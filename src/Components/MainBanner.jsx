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
        <div className="box">2</div>
        <div className="box">1</div>
        <div className="box">3</div>
        <div className="box">4</div>
        <div className="box">5</div>
        <div className="box">6</div>
        <div className="box">7</div>
        <div className="box">8</div>
        <div className="box">9</div>

      </div>
    </MainBannerStyle>
  );
};
