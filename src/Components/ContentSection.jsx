import { useRef, useEffect, useState } from "react";
import { ContentSectionStyle } from "../StyledComponents/ComponentStyles";
import { AboutSection } from "./AboutSection";
import { MainBanner } from "./MainBanner";
import { useLocation } from "react-router";
import { PATHNAME } from "../utils/consts";
import { BlogSection } from "./BlogSection";

export const ContentSection = () => {
  const [currentPath, setCurrentPath] = useState(PATHNAME.home);

  const scrollContainerRef = useRef(null);

  const location = useLocation();

  const handleScroll = (eventComponent) => {
    if (scrollContainerRef.current) {
      const delta = eventComponent.deltaY;
      scrollContainerRef.current.scrollLeft +=
        delta > 0
          ? scrollContainerRef.current.offsetWidth
          : -scrollContainerRef.current.offsetWidth;
    }
  };

  const changeOffsetComponent = (offsetPosition) => {
    const testScroll = scrollContainerRef.current.scrollLeft + offsetPosition;

    scrollContainerRef.current.scrollLeft = testScroll;
  };

  useEffect(() => {
    setCurrentPath(location.pathname);
    currentPath === PATHNAME.about &&
      changeOffsetComponent(
        scrollContainerRef.current.offsetWidth +
          scrollContainerRef.current.offsetWidth
      );
    currentPath === PATHNAME.home &&
      changeOffsetComponent(
        scrollContainerRef.current.offsetWidth -
          scrollContainerRef.current.offsetWidth / 2
      );
    currentPath === PATHNAME.blog && changeOffsetComponent();
  }, [currentPath, location]);

  return (
    <ContentSectionStyle
      ref={scrollContainerRef}
      onWheel={handleScroll}
      style={currentPath !== PATHNAME.home ? { scrollBehavior: "smooth" } : {}}
    >
      <div className="wrapper-scrolling">
        <BlogSection />
        <MainBanner />
        <AboutSection />
      </div>
    </ContentSectionStyle>
  );
};
