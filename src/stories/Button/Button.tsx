import { ReactNode } from "react";
import "./button.css";

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
    secondary: "bg-secondary-500 text-white",
    primary: "bg-primary-500",
  } as Record<string, string>;

  return (
    <button
      type="button"
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        variations[variation],
      ].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </button>
  );
};
