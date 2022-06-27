import Intro from "./components/intro/intro";
import Footer from "./components/footer/Footer";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import { useContext } from "react";


function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className
    style={
      {
      backgroundColor: darkMode ? "#0c191e" : "#eaeded",
      color:darkMode ? "#dbd7d3": "#3c302b"
      }
    }>
      <Toggle darkMode={darkMode}/>
      <Intro darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </div>
  );
}

export default App;
