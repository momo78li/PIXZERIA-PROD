import logoImage from "@assets/pixzeria-logo_1750094451160.png";

interface PixzeriaLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
  textColor?: string;
}

export default function PixzeriaLogo({ 
  size = "md", 
  showText = true, 
  className = "",
  textColor = "text-pizza-red"
}: PixzeriaLogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-16 h-16",
    xl: "w-24 h-24"
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl"
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className={`${sizeClasses[size]} flex-shrink-0`}>
        <img 
          src={logoImage} 
          alt="PIXZERIA Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      {showText && (
        <span className={`font-fredoka ${textColor} font-bold ${textSizeClasses[size]}`}>
          PIXZERIA
        </span>
      )}
    </div>
  );
}