import Content from "./component/content"
import Title from "./component/title"
import Footer from "../src/component/footer"
import  Header from "../src/component/Header"
import "./App.css"


function App() {
  return (
    <div className="App">
      < Header/>
      <Title />
      < Content/>
      <Footer />
     
      
    </div>
  );
}

export default App;
