import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

const CTAButton = ({ href, children, variant = "primary", className = "" }: CTAButtonProps) => {
  const baseClasses = variant === "primary" ? "btn-primary" : "btn-secondary";

  return (
    <Link href={href} className={`${baseClasses} ${className}`}>
      {children}
    </Link>
  );
};

export default CTAButton;
