import "./index.css";
import Form from "./components/Form/Form";
import Results from "./components/Results";

const App = () => {
  return (
    <>
      <div className="app">
        <div style={{ width: "25%" }}>
          <h3>Form Section</h3>
          <Form />
        </div>
        <div style={{ width: "75%" }}>
          <h3>Results Section</h3>
          <p>Sort By: Price Low to High</p>
          <Results />
        </div>
      </div>
    </>
  );
};

export default App;
