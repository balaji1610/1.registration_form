import utilis from "../utilis";
import { useState } from "react";
import InputField from "../reusableComponents/inputField";
import RadioField from "../reusableComponents/radioField";
export default function Form() {
  const [registierUser, setRegisterUser] = useState(utilis);
  const [registierUserLists, setRegisterUserLists] = useState([]);

  const options = [
    {
      label: "Male",
      name: "Male",
    },
    {
      label: "Female",
      name: "Female",
    },
    {
      label: "Prefer not to say",
      name: "Prefer not to say",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegisterUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setRegisterUser((prev) => {
      return { ...prev, gender: value };
    });
  };

  const handleOnSubmit = () => {
    setRegisterUserLists((prev) => {
      return [...prev, registierUser];
    });
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
            onChange={handleChange}
          />
          <InputField
            label="Email"
            placeholder="Enter your email"
            name="email"
            type="text"
            onChange={handleChange}
          />
          <InputField
            label="Password"
            placeholder="Enter your email"
            name="password"
            type="password"
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
            onChange={handleChange}
          />
          <InputField
            label="Phone Number"
            placeholder="Enter Your number"
            name="phoneNumber"
            type="tel"
            onChange={handleChange}
          />
          <InputField
            label="Confirm Password"
            placeholder="Confirm Your password"
            name="confirmPassword"
            type="password"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          Gender
          <RadioField options={options} onChange={handleRadioChange} />
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
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
