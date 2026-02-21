import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Button({
  label,
  extraClass = "",
  variant = "primary",
  size = "lg",
  Icon,
  path,
}) {
  const variants = {
    primary: "bg-primary-400 text-primary-900 hover:bg-primary-500",
    secondary:
      "bg-secondary-500 text-secondary-900 hover:bg-primary-500 hover:text-neutral-100",
    tertiary: "bg-primary-500/10",
  };
  const sizes = {
    lg: "px-6 py-4",
    md: "px-4 py-3 text-[12px] sm:text-sm",
    sm: "p-1 text-xs",
  };
  // const iconTag = <FaArrowUpRightFromSquare className="text-xs" />;

  return (
    <Link to={path}>
      <button
        className={`w-fit flex items-center justify-center gap-2 rounded-md transition duration-600 cursor-pointer text-nowrap font-[510] ${sizes[size]} ${variants[variant]} ${extraClass}`}
      >
        <span>{label}</span>
        <span className="text-xs opacity-70">{Icon && <Icon />}</span>
      </button>
    </Link>
  );
}

export default Button;
