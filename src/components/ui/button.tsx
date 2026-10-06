import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        /* Primary action: deep brand ink, premium and quiet */
        default:
          "bg-ink text-cream hover:bg-ink-soft shadow-sm-soft hover:shadow-card active:scale-[0.98]",
        /* Brand green action */
        primary:
          "bg-primary text-primary-foreground hover:bg-nature-dark shadow-sm-soft hover:shadow-glow-primary active:scale-[0.98]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-muted hover:border-foreground/25 active:scale-[0.98]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/85 shadow-sm-soft",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline rounded-md",
        /* On dark backgrounds */
        onDark:
          "bg-cream text-ink hover:bg-white shadow-sm-soft active:scale-[0.98]",
        onDarkOutline:
          "border border-cream/25 bg-transparent text-cream hover:bg-cream/10 hover:border-cream/45 active:scale-[0.98]",
        /* Legacy landing-page variants, kept for compatibility */
        hero: "bg-gradient-hero text-primary-foreground shadow-sm-soft hover:shadow-glow-primary active:scale-[0.98]",
        heroOutline:
          "border border-cream/25 bg-transparent text-cream hover:bg-cream/10 backdrop-blur-sm",
        golden: "bg-secondary text-secondary-foreground shadow-sm-soft hover:shadow-card active:scale-[0.98]",
        tech: "bg-tech text-accent-foreground shadow-sm-soft hover:shadow-glow-accent active:scale-[0.98]",
        nature: "bg-primary text-primary-foreground shadow-sm-soft hover:bg-nature-dark active:scale-[0.98]",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-[0.8125rem]",
        lg: "h-12 px-7 text-base",
        xl: "h-14 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
