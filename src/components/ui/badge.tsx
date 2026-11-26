import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center border px-2.5 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-lamp/40 bg-transparent text-lamp dark:text-lamp hover:bg-lamp/10",
        secondary: "border-line dark:border-line bg-transparent text-paper dark:text-paper/80 hover:bg-night-2 dark:hover:bg-night-2",
        destructive: "border-red-500/40 bg-transparent text-red-600 hover:bg-red-500/10",
        outline: "border-line dark:border-line text-foreground bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
