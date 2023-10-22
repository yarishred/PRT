import { MainBannerStyle } from "../StyledComponents/ComponentStyles";

export const MainBanner = () => {
  return (
    <MainBannerStyle>
      <div className="banner-wrapper">
        <h1 className="banner-textPrimary">Yari Ruiz</h1>
        <p className="banner-textsecondary">
          Developer & MSc in Machine Learning.
        </p>
      </div>
      <div className="banner-img-wrapper">
        <div className="box6 box" style={{ backgroundColor: "#f0c62d" }}>
          1
        </div>
        <div className="box8 box" style={{ backgroundColor: "#00c2d1" }}>
          2
        </div>
        <div className="box9 box" style={{ backgroundColor: "#f58888" }}>
          3
        </div>
        <div className="box2 box" style={{ backgroundColor: "#8e44ad " }}>
          4
        </div>
        <div className="box7 box" style={{ backgroundColor: "#ffffff " }}>
          5
        </div>
        <div className="box5 box" style={{ backgroundColor: "#00c2d1" }}>
          6
        </div>
        <div className="box1 box" style={{ backgroundColor: "#f58888" }}>
          7
        </div>
        <div className="box3 box" style={{ backgroundColor: "#fc8b4a " }}>
          8
        </div>
        <div className="box4 box" style={{ backgroundColor: "#f0c62d" }}>
          9
        </div>
      </div>
    </MainBannerStyle>
  );
};
