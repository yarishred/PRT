import { useRef, useEffect, useState } from "react";
import { ContentSectionStyle } from "../StyledComponents/ComponentStyles";
import { AboutSection } from "./AboutSection";
import { MainBanner } from "./MainBanner";
import { useLocation } from "react-router";


export const ContentSection = () => {
  const scrollContainerRef = useRef(null);
  const location = useLocation();
  const [isCurrentPath, setIsCurrentPath] = useState("/");

  const handleScroll = (e) => {
    if (scrollContainerRef.current) {
      const delta = e.deltaY;
      scrollContainerRef.current.scrollLeft += delta > 0 ? 100 : -100;
    }
  };

  const changeOffsetComponent = () => {
    const testScroll =
      scrollContainerRef.current.scrollLeft +
      scrollContainerRef.current.offsetWidth +
      100;
    scrollContainerRef.current.scrollLeft = testScroll;
  };

  useEffect(() => {
    setIsCurrentPath(location.pathname);
    isCurrentPath === "/about" ? changeOffsetComponent() : null;
  }, [isCurrentPath, location]);

  return (
    <ContentSectionStyle ref={scrollContainerRef} onWheel={handleScroll}>
      <div className="wrapper-scrolling">
        <MainBanner />
        <AboutSection />
      </div>
    </ContentSectionStyle>
  );
};
