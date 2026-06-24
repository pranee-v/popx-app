/**
 * FormField
 * Labeled input matching the PopX style: small purple label above
 * a bordered input, with an optional red required asterisk.
 */
export default function FormField({
  id,
  label,
  required = false,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    <div className="form-field">
      <label htmlFor={id} className="form-field__label">
        {label}
        {required && <span className="form-field__asterisk">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="form-field__input"
        required={required}
      />
    </div>
  );
}
