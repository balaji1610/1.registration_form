import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./form";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/UserList");
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-sm-2 col-md-4"
            style={{ backgroundColor: "#A4CCD9", height: "100vh" }}
          ></div>
          <div className="col-sm-8" style={{ padding: "20px" }}>
            <div className="row">
              <div className="col-sm-4">
                {" "}
                <h1
                  style={{ borderBottom: "3px solid #3F51B5", width: "43px" }}
                >
                  Registration
                </h1>
              </div>
              <div className="col-sm-4">
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={handleOnClick}
                >
                  User Lists
                </button>
              </div>
            </div>

            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
