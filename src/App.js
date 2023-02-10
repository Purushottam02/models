import "./App.css";
import Model from "./component/Model";
import Title from "./component/Title";
import Footer from "./component/Footer";
function App() {
  return (
    <div className="App">
      <Title title="CONFIGURE INSTALLATION PARAMETERS" subtitle=" RN1234567" />
      <Model />
      <Footer />
    </div>
  );
}

export default App;
