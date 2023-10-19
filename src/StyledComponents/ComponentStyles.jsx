import styled from "styled-components";

//Main Banner
export const MainBannerStyle = styled.section`
  width: 100%;
  height: 100vh;
  margin: auto;
  background-color: var(--color_1st);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;

  .banner-wrapper {
    width: 50%;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .banner-textPrimary {
    font-size: 7rem;
    font-family: var(--primary_font);
    color: var(--color_3rd);
  }
  .banner-textsecondary {
    font-size: 1.2rem;
    font-family: var(--secondary_font);
    color: var(--color_2nd);
  }

  .banner-img-wrapper {
    width: 40%;
    height: 70vh;
    background-color: seagreen;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
  }

  .banner-image {
    width: 400px;
    height: 600px;
  }

  .box {
    background-color: #fff; /* Set your desired background color */
    height: 100%;
  }
`;

//Navigation

export const NavigationStyle = styled.nav`
  width: 6rem;
  height: 100vh;
  background-color: #111111;
`;
