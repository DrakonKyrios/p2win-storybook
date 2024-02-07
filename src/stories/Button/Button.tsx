import { ReactNode } from "react";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variation?: string;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Optional click handler
   */
  onClick?: () => void;

  /**
   * Allow Element or string for display label
   */
  children: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variation = "primary",
  size = "medium",
  backgroundColor,
  children,
  ...props
}: ButtonProps) => {
  const variations = {
    primary: "bg-primary-500 text-white",
    secondary: "bg-secondary-500 text-white",
    ghost:
      "bg-gray-300 bg-transparent shadow-[rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset]",
  } as Record<string, string>;

  const sizes = {
    small: "text-md py-[10px] px-[16px]",
    medium: "text-lg py-[11px] px-[20px]",
    large: "text-xl py-[12px] px-[24px]",
  } as Record<string, string>;

  return (
    <button
      type="button"
      className={[
        "rounded-md border-0 cursor-pointer inline-block font-bold",
        sizes[size],
        variations[variation],
      ].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </button>
  );
};
