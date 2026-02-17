import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Button({
  label,
  extraClass = "",
  variant = "primary",
  size = "lg",
  Icon,
}) {
  const variants = {
    primary:
      "bg-primary-600 text-neutral-100 hover:bg-secondary-500 hover:text-secondary-900",
    secondary:
      "bg-secondary-500 text-secondary-900 hover:bg-primary-500 hover:text-neutral-100",
    tertiary: "bg-primary-500/10",
  };
  const sizes = {
    lg: "px-6 py-4",
    md: "px-4 py-3 text-[12px] xl:text-sm",
    sm: "px-3 py-2 text-sm",
  };
  // const iconTag = <FaArrowUpRightFromSquare className="text-xs" />;

  return (
    <Link to="/Properties">
      <button
        className={`w-full flex items-center justify-center gap-2 rounded-md transition duration-600 cursor-pointer text-nowrap ${sizes[size]} ${variants[variant]} ${extraClass}`}
      >
        <span>{label}</span>
        <span className="text-xs opacity-70">{Icon && <Icon />}</span>
      </button>
    </Link>
  );
}

export default Button;
