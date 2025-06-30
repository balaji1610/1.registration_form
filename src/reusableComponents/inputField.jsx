export default function InputField(props) {
  const { label, name, type, placeholder, onChange, value } = props;
  return (
    <div style={{ margin: "5px 0 30px 0" }}>
      <div>
        {" "}
        <label for={label} class="form-label">
          {label}
        </label>
      </div>

      <input
        type={type}
        class="form-control"
        name={name}
        value={value}
        placeholder={placeholder}
        style={{ width: "20rem" }}
        onChange={onChange}
      />
    </div>
  );
}
