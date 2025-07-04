import React from "react";
export default function RadioField(props) {
  const { options, onChange, getGenderValue, name } = props;

  return (
    <div class="form-check d-flex">
      {options.map((option, index) => {
        return (
          <div className="form-check me-3" key={index}>
            <input
              class="form-check-input"
              type="radio"
              value={option.value}
              name={name}
              checked={option.value === getGenderValue}
              onChange={onChange}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              {option.label}
            </label>
          </div>
        );
      })}
    </div>
  );
}
