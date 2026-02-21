import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Button({
  to,
  label,
  extraClass = "",
  baseClass = "w-fit flex items-center justify-center gap-2 rounded-md transition duration-600 cursor-pointer text-nowrap font-[510]",
  variant = "primary",
  size = "lg",
  Icon,
}) {
  const variants = {
    primary: "bg-primary-400 text-primary-900 hover:bg-primary-500",
    secondary:
      "bg-secondary-500 text-secondary-900 hover:bg-primary-500 hover:text-neutral-100",
    tertiary: "bg-primary-500/10",
  };
  const sizes = {
    lg: "px-6 py-4 text-sm",
    md: "px-4 py-3 text-[12px] sm:text-sm",
    sm: "p-1 text-xs",
  };

  if (to) {
    return (
      <Link
        to={to}
        className={`${baseClass} ${sizes[size]} ${variants[variant]} ${extraClass}`}
      >
        {label}
        <span className="text-xs opacity-70">{Icon && <Icon />}</span>
      </Link>
    );
  }
  return (
    <button
      className={`${baseClass} ${sizes[size]} ${variants[variant]} ${extraClass}`}
    >
      {label}
      <span className="text-xs opacity-70">{Icon && <Icon />}</span>
    </button>
  );
}

export default Button;
