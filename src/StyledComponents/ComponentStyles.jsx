import styled from "styled-components";

//Main Banner
export const MainBannerStyle = styled.section`
  width: 90%;
  height: 100vh;
  margin: auto;
  background-color: var(--color_1st);
  display: flex;
  align-items:center;
  justify-content:center;
  padding: 4rem;

 .banner-wrapper{
  width:50rem;
  height:60vh;
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
 }

  .banner-textPrimary {
    font-size: 8rem;
    font-family: var(--primary_font);
    color: var(--color_3rd);
  }
  .banner-textsecondary {
    font-size: 1.5rem;
    font-family: var(--secondary_font);
    color: var(--color_2nd);
  }

  .banner-img-wrapper {
    width: 50rem;
    height: 60vh;
    display: flex;
    justify-content:flex-start;
    align-items:center;
  }

`;

//Navigation

export const NavigationStyle = styled.nav`
  width: 6rem;
  height: 100vh;
  background-color: #111111;
`;
