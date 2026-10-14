
export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  onClick,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-primary text-on-primary hover:scale-105 hover:shadow-lg hover:shadow-primary/30",

    secondary: "bg-secondary text-on-secondary hover:scale-105",

    outline:
      "border border-primary text-primary hover:bg-primary hover:text-on-primary",

    ghost: "text-primary hover:bg-primary/10",
  };

  const sizes = {
    sm: "px-3 py-2 text-xs sm:px-4 sm:text-sm",

    md: "px-4 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-base",

    lg: "px-5 py-3 text-base sm:px-8 sm:py-4 sm:text-lg",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
