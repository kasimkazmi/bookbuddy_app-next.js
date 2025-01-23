import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/src/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center shadow-lg whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground custom-btn ",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 custom-btn  ",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground ",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 custom-btn",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        play: "custom-btn bg-primary text-primary-foreground ",
        facebook: "bg-blue-600 border border-input bg-background hover:text-white hover:bg-blue-700 custom-btn",
        google: "bg-red-500 border border-input bg-background hover:text-white  hover:bg-red-600 custom-btn",
        apple: "bg-black border text-white border-input bg-background text-white hover:bg-gray-900 custom-btn",


      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> // Added the 'icon' property
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant,icon: Icon, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (

      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
      <span className=" flex justify-center items-center">
      {Icon && <Icon />}

        {props.children}
        </span>
      </Comp>      

    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
