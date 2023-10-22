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
    padding: 2rem;
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
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: calc();
    align-items: center;
    justify-content: center;
  }

  @keyframes fallingBlock1 {
    0% {
      transform: translateY(-54rem);
    }

    90% {
      transform: translateY(calc((400px / 3) * 2));
    }

    95% {
      transform: translateY(258px);
    }

    100% {
      transform: translateY(calc((400px / 3) * 2));
    }
  }

  @keyframes fallingBlock2 {
    0% {
      transform: translateY(-74rem);
    }

    90% {
      transform: translateY(calc(400px / 3));    }

    95% {
      transform: translateY(124px);
    }

    100% {
      transform: translateY(calc(400px / 3));    }
  }

  @keyframes fallingBlock3 {
    0% {
      transform: translateY(-54rem);
    }

    90% {
      transform: translateY(calc((400px / 3) * 2));
    }

    95% {
      transform: translateY(258px);
    }

    100% {
      transform: translateY(calc((400px / 3) * 2));
    }
  }

  @keyframes fallingBlock4 {
    0% {
      transform: translateY(-54rem);
    }

    90% {
      transform: translateY(calc((400px / 3) * 2));
    }

    95% {
      transform: translateY(258px);
    }

    100% {
      transform: translateY(calc((400px / 3) * 2));
    }
  }

  @keyframes fallingBlock5 {
    0% {
      transform: translateY(-80rem);
    }

    90% {
      transform: translateY(calc(400px / 3));    }

    95% {
      transform: translateY(124px);
    }

    100% {
      transform: translateY(calc(400px / 3));    }
  }

  @keyframes fallingBlock6 {
    0% {
      transform: translateY(-94rem);
    }

    90% {
      transform: translateY(2px);    }

    95% {
      transform: translateY(-9px);
    }

    100% {
      transform: translateY(2px);    }
  }

  @keyframes fallingBlock7 {
    0% {
      transform: translateY(-80rem);
    }

    90% {
      transform: translateY(calc(400px / 3));    }

    95% {
      transform: translateY(124px);
    }

    100% {
      transform: translateY(calc(400px / 3));    }
  }

  @keyframes fallingBlock8 {
    0% {
      transform: translateY(-90rem);
    }

    90% {
      transform: translateY(2px);    }

    95% {
      transform: translateY(-9px);
    }

    100% {
      transform: translateY(2px);   }
  }

  @keyframes fallingBlock9 {
    0% {
      transform: translateY(-90rem);
    }

    90% {
      transform: translateY(2px);   }

    95% {
      transform: translateY(-9px);
    }

    100% {
      transform: translateY(2px);   }
  }

  .box {
    position: absolute;
    width: calc(400px / 3);
    height: calc(400px / 3);
  }

  .box1 {
    top: 0;
    animation: fallingBlock1 1s linear;
    transform: translateY(calc((400px / 3) * 2));
  }

  .box2 {
    top: 1px;
    animation: fallingBlock2 1s linear;
    transform: translateY(calc(400px / 3));
  }

  .box3 {
    left: 33.3%;
    top: 0;
    animation: fallingBlock3 1.5s linear;
    transform: translateY(calc((400px / 3) * 2));
  }

  .box4 {
    right: 0;
    top: 0;
    animation: fallingBlock4 0.9s linear;
    transform: translateY(calc((400px / 3) * 2));
  }

  .box5 {
    right: 0;
    top: 1px;
    animation: fallingBlock5 2s linear;
    transform: translateY(calc(400px / 3));
  }

  .box6 {
    top: 0;
    animation: fallingBlock6 1.7s linear;
    transform: translateY(2px);  }

  .box7 {
    left: 33.3%;
    top: 1px;
    animation: fallingBlock7 2.2s linear;
    transform: translateY(calc(400px / 3));
  }

  .box8 {
    left: 33.3%;
    top: 0;
    animation: fallingBlock8 2.5s linear;
    transform: translateY(2px);  }

  .box9 {
    top: 0;
    right: 0;
    animation: fallingBlock9 2s linear;
    transform: translateY(2px);
  }
  */



 



/* 
@keyframes fallingBlock {
    0% {
        transform: translateY(-90rem);
    }

    90% {
        transform: translateY(1px);
    }

    95% {
        transform: translateY(-9px);
    }

    100% {
        transform: translateY(1px);
    }
} */


/* Aplica la misma animación a todas las cajas
.box1, .box2, .box3, .box4, .box5, .box6, .box7, .box8, .box9 {
    animation: fallingBlock 2s linear;
}

 Define las posiciones iniciales de las cajas */
/* .box1 { top: 0; left: 0; }
.box2 { top: 0; left: calc(400px / 3); }
.box3 { top: 0; left: calc(2 * (400px / 3)); }
.box4 { top: calc(400px / 3); left: 0; }
.box5 { top: calc(400px / 3); left: calc(400px / 3); }
.box6 { top: calc(400px / 3); left: calc(2 * (400px / 3)); }
.box7 { top: calc(2 * (400px / 3)); left: 0; }
.box8 { top: calc(2 * (400px / 3)); left: calc(400px / 3); }
.box9 { top: calc(2 * (400px / 3)); left: calc(2 * (400px / 3)); }  */


  .banner-image {
    width: 400px;
    height: 600px;
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
