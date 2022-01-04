import "./input-styles.css";
export default function Input({ type, placeholder, value, className, id }) {
  let inputPlaceholder = placeholder ? placeholder : "";
  if (type === "password") {
    return (
      <input
        type="password"
        className={`h-element-input h-element-input_password ${className}`}
        id={id}
        placeholder={inputPlaceholder}
      />
    );
  } else if (type === "email") {
    return (
      <input
        type="email"
        className={`h-element-input h-element-input_email ${className}`}
        id={id}
        placeholder={inputPlaceholder}
      />
    );
  } else if (type === "number") {
    return (
      <input
        type="number"
        className={`h-element-input h-element-input_number ${className}`}
        id={id}
        placeholder={inputPlaceholder}
      />
    );
  } else {
    return (
      <input
        type="text"
        className={`h-element-input h-element-input_text ${className}`}
        id={id}
        placeholder={inputPlaceholder}
      />
    );
  }
}
