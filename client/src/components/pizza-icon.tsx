interface PizzaIconProps {
  size?: number;
  className?: string;
  variant?: "default" | "outline" | "pink";
}

export default function PizzaIcon({ size = 24, className = "", variant = "default" }: PizzaIconProps) {
  const strokeColor = variant === "pink" ? "#E6007E" : "#111111";
  const crustColor = "#E6007E";
  const toppingColor = variant === "pink" ? "#111111" : "#E6007E";
  const fill = variant === "outline" ? "none" : "transparent";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 30 L3.5 8.5 Q16 2.5 28.5 8.5 Z"
        fill={fill}
        stroke={strokeColor}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 8.5 Q16 2.5 28.5 8.5"
        stroke={crustColor}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="13.5" cy="17" r="2" fill={toppingColor} />
      <circle cx="19.5" cy="12.5" r="1.4" fill={toppingColor} opacity="0.35" />
    </svg>
  );
}
