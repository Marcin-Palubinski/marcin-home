'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export const buttonVariants = cva(
  'px-4 py-1.5 rounded-md focus:outline-none text-lg shadow-md font-semibold flex items-center gap-2.5',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-primary/80 ring-primary/80 focus-visible:ring-2 ring-offset-1 ring-offset-background active:bg-primary/90',
        foreground:
          'bg-foreground/80 text-background hover:bg-foreground/90 ring-foreground/80 focus-visible:ring-2 ring-offset-1 ring-offset-background active:bg-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const Button: React.FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ children, variant, className, ...props }, ref) => {
  return (
    <button
      className={cn(buttonVariants({ variant, className }))}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
