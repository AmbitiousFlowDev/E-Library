export default function Input({
  type,
  list = null,
  id = null,
  onChange,
  name,
  className,
  placeHolder,
  value,
  required = true,
  ref = null,
}) {
  return (
    <input
      id={id}
      list={list}
      ref={ref}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeHolder}
      required={required}
    />
  );
}
