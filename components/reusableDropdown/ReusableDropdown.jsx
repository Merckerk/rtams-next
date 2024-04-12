"use client";

const ReusableDropdown = ({
  label,
  id,
  name,
  options,
  value,
  onChange,
  errorMessage,
  placeholder,
}) => {
  return (
    <div className="form_group">
      <label
        htmlFor={id}
        className="form_label font-satoshi font-semibold text-base text-gray-700"
      >
        {label}
      </label>
      <select
        id={id}
        name={name}
        className="form_input"
        onChange={onChange}
        value={value}
        required
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span className="error_message">{errorMessage}</span>
    </div>
  );
};

export default ReusableDropdown;
