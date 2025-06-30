import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/form";
function App() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">1</div>
          <div className="col-sm-8">
            <h1 style={{ borderBottom: "3px solid #3F51B5", width: "43px" }}>
              Registration
            </h1>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
