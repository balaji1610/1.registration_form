import utilis from "../utilis";
import { useState } from "react";
import InputField from "../reusableComponents/inputField";
import RadioField from "../reusableComponents/radioField";
import { ToastContainer, toast } from "react-toastify";
export default function Form() {
  const [registierUser, setRegisterUser] = useState(utilis);
  const [registierUserLists, setRegisterUserLists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [getGenderValue, setGetGenderValue] = useState("");
  const options = [
    {
      label: "Male",
      value: "Male",
    },
    {
      label: "Female",
      value: "Female",
    },
    {
      label: "Prefer not to say",
      value: "Prefer not to say",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegisterUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleRadioChange = (event) => {
    const { value } = event.target;

    setGetGenderValue(value);
    setRegisterUser((prev) => {
      return { ...prev, gender: value };
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registierUser),
      });

      const result = await response.json();

      if (response.status === 200) {
        setIsLoading(false);
        toast.success(result.message || "User registered successfully!");
      }

      if (!response.ok) {
        setIsLoading(false);
        toast.error(result.message);
      }
      setRegisterUser(utilis); // Reset the form fields after submission
      setGetGenderValue("");
      // Success message or response
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container" style={{ padding: "20px" }}>
      <div className="row">
        {/* left side */}
        <div className="col-sm-6">
          <InputField
            label="Full Name"
            placeholder="Enter Your Name"
            name="fullName"
            type="text"
            value={registierUser.fullName}
            onChange={handleChange}
          />
          <InputField
            label="Email"
            placeholder="Enter your email"
            name="email"
            type="text"
            value={registierUser.email}
            onChange={handleChange}
          />
          <InputField
            label="Password"
            placeholder="Enter your email"
            name="password"
            type="password"
            value={registierUser.password}
            onChange={handleChange}
          />
        </div>
        <div className="col-sm-6">
          {/* Right Side */}
          <InputField
            label="User Name"
            placeholder="Enter Your Username"
            name="userName"
            type="text"
            value={registierUser.userName}
            onChange={handleChange}
          />
          <InputField
            label="Phone Number"
            placeholder="Enter Your number"
            name="phoneNumber"
            type="tel"
            value={registierUser.phoneNumber}
            onChange={handleChange}
          />
          <InputField
            label="Confirm Password"
            placeholder="Confirm Your password"
            name="confirmPassword"
            type="password"
            value={registierUser.confirmPassword}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          Gender
          <RadioField
            options={options}
            onChange={handleRadioChange}
            name="gender"
            getGenderValue={getGenderValue}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div class="d-grid gap-2">
            <button
              class="btn btn-primary"
              type="button"
              onClick={handleOnSubmit}
            >
              {" "}
              {isLoading ? (
                <div
                  class="spinner-border"
                  role="status"
                  style={{
                    cursor: "not-allowed",
                  }}
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Register"
              )}
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
