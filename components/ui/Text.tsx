import React from "react";
import clsx from "clsx";

type TextVariant =
  | "title"
  | "subtitle"
  | "body"
  | "small";

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: TextVariant;
}

const variantStyles: Record<TextVariant, string> = {
  title: "text-3xl font-bold ",
  subtitle: "font-semibold text-sm tracking-wide leading-relaxed",
  body: "text-sm tracking-normal leading-relaxed text-gray-400 ",
  small: "text-sm text-gray-400",
};

function Text({
  children,
  variant = "body",
  className,
  ...props
}: TextProps) {
  return (
    <p
      className={clsx(
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export default Text;