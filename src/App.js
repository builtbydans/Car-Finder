import "./index.css";
import Form from "./components/Form/Form";
import Results from "./components/Results";

const App = () => {
  return (
    <>
      <h1>Car Finder</h1>
      <div className="app">
        <div style={{ width: "30%" }}>
          <h3>Form Section</h3>
          <Form />
        </div>
        <div style={{ width: "70%" }}>
          <h3>Results Section</h3>
          <Results />
        </div>
      </div>
    </>
  );
};

export default App;
