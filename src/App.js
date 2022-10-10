import "./App.css";
import Phone from "./components/phone";
import Form from "./components/form";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="App">
        <div className="row">
          <div className="col-md-6">
            <div id="layout1">
              <Phone />
            </div>
          </div>
          <div className="col-md-6">
            <div id="layout2"></div>
            <Form />
            </div>
        </div>
        <Footer />
      </div>
      <h1>created by nishant</h1>
    </>
  );
}

export default App;
