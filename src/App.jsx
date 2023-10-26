import { GlobalStyle } from "./StyledComponents/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "./Components/Nav";
import { ContactSection } from "./Components/ContactSection";
import { WorksSection } from "./Components/WorksSection";
import { ContentSection } from "./Components/ContentSection";
import { BlogSection } from "./Components/BlogSection";

function App() {
  return (
    <>
      <main className="app-container">
        <GlobalStyle />
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" exact element={<ContentSection />} />
            <Route path="/about" exact element={<ContentSection />} />
            <Route path="/blog" exact element={<ContentSection />} />
            <Route path="/works" exact element={<WorksSection />} />
            <Route path="/contact" exact element={<ContactSection />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
