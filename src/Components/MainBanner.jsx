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
        <div className="box" style={{backgroundColor:"#f0c62d"}}>2</div>
        <div className="box" style={{backgroundColor:"#00c2d1"}}>1</div>
        <div className="box" style={{backgroundColor:"#f58888"}}>3</div>
        <div className="box" style={{backgroundColor:"#8e44ad "}}>4</div>
        <div className="box" >5</div>
        <div className="box" style={{backgroundColor:"#00c2d1"}}>6</div>
        <div className="box" style={{backgroundColor:"#f58888"}}>7</div>
        <div className="box" style={{backgroundColor:"#8e44ad "}}>8</div>
        <div className="box" style={{backgroundColor:"#f0c62d"}}>9</div>

      </div>
    </MainBannerStyle>
  );
};
