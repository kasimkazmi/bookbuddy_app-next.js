import * as React from "react";

import { cn } from "@/lib/utils";

type CardVariant = "default" | "destructive" | "variantBorder";

// Assuming VariantProps and cardVariants are defined correctly elsewhere
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
  variant?: CardVariant; // Assuming CardVariant is defined elsewhere
}

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CardProps
>(({ className, variant = "default", ...props }, ref) => {
  if (variant === "variantBorder") {
    const borderClasses =
      variant === "variantBorder" ? "border-t-2 border-b-2 border-white" : "";
    return (
      <div className="w-96 transition duration-300 ease-in-out transform hover:scale-105">
        <div className={`rounded-3xl  py-1.5  ${borderClasses}`}>
          <div className={`rounded-3xl  py-1.5 ${borderClasses}`}>
            <div className={`rounded-3xl py-4 ${borderClasses}`}>
              <div
                ref={ref}
                className={cn(
                  "rounded-lg bg-card text-card-foreground shadow-lg",
                  className
                )}
                {...props}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="transition duration-300 ease-in-out transform hover:scale-105">
      <div
        ref={ref}
        className={cn(
          "rounded-lg bg-card text-card-foreground shadow-lg",
          className
        )}
        {...props}
      />
    </div>
  );
});
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-secondary-foreground ", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
