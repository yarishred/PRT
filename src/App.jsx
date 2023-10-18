import { GlobalStyle } from "./StyledComponents/GlobalStyle";
import { MainBanner } from "./Components/MainBanner";
import { NavigationStyle } from "./StyledComponents/ComponentStyles";

function App() {
  return (
    <>
      <main className="app-container">
        <GlobalStyle />
        <NavigationStyle />
        <MainBanner />
      </main>
    </>
  );
}

export default App;
