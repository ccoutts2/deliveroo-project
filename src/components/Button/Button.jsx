import "./Button.scss";

const Button = ({ className, label }) => {
  return (
    <button className={`button${className ? ` ${className}` : ""}`}>{label}</button>
  );
};

export default Button;
