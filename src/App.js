import Nav from "./component/Nav";
import GlobalStyle from "../src/component/GlobalStyle";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <LandingPage />
    </div>
  );
}

export default App;
