import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/form";
function App() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-sm-2 col-md-4"
            style={{ backgroundColor: "#A4CCD9", height: "100vh" }}
          ></div>
          <div className="col-sm-8" style={{ padding: "20px" }}>
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
