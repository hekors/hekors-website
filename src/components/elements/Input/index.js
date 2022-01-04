import "./input-styles.css";
export default function Input({
  type,
  placeholder,
  onChange,
  className,
  id,
  style,
}) {
  let inputPlaceholder = placeholder ? placeholder : "";
  if (type === "password") {
    return (
      <input
        type="password"
        className={` ${className}`}
        id={id}
        placeholder={inputPlaceholder}
        onChange={onChange}
        style={style}
      />
    );
  } else if (type === "email") {
    return (
      <input
        type="email"
        className={` ${className}`}
        id={id}
        placeholder={inputPlaceholder}
        onChange={onChange}
        style={style}
      />
    );
  } else if (type === "number") {
    return (
      <input
        type="number"
        className={` ${className}`}
        id={id}
        placeholder={inputPlaceholder}
        onChange={onChange}
        style={style}
      />
    );
  } else {
    return (
      <input
        type="text"
        className={`  ${className}`}
        id={id}
        placeholder={inputPlaceholder}
        onChange={onChange}
        style={style}
      />
    );
  }
}
