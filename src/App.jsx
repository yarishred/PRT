import { GlobalStyle } from "./StyledComponents/GlobalStyle";
import { MainBanner } from "./Components/MainBanner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "./Components/Nav";

function App() {
  return (
    <>
      <main className="app-container">
        <GlobalStyle />
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" exact element={<MainBanner />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
