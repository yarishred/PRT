import styled from "styled-components";

//Main Banner
export const MainBannerStyle = styled.section`
  width: 90%;
  height: 100vh;
  margin: auto;
  background-color: var(--color_1st);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;

  .banner-wrapper {
    width: 600px;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
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
    width: 400px;
    height: 400px;
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
  width: 100px;
  height: 100vh;
  background-color: #111111;

  ul {
    width: inherit;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .link {
    background: none;
    font-size: 1.5rem;
    text-transform: lowercase;
    font-weight: bold;
  }

  li {
    transform: rotate(-90deg);
    font-family: var(--primary_font);
    margin: 4rem 0;
  }

  .menu-opt1 {
    color: var(--color_4th);
    border: none;
  }

  .menu-opt2 {
    color: var(--color_3rd);
  }
`;
