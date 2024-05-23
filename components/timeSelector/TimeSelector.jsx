"use client";

const TimeSelector = ({
  label,
  id,
  name,
  placeholder,
  className,
  onChange,
  value,
  errorMessage,
  required = false,
  unitType,
}) => {
  const min = 0;
  const max = unitType === "hours" ? 23 : 59;

  return (
    <div className="form-group">
      <label>
        <span className="font-satoshi font-semibold text-base text-gray-700">
          {label}
        </span>
        <input
          type="number"
          id={id}
          name={name}
          placeholder={placeholder}
          className={className}
          onChange={onChange}
          value={value}
          required={required}
          min={min}
          max={max}
        />
        {errorMessage ? <p className="error_message">{errorMessage}</p> : null}
      </label>
    </div>
  );
};

export default TimeSelector;
