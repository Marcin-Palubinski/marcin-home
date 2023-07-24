'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  large?: boolean;
}

export const inputVariants = cva(
  'px-3 py-2 rounded-md focus:outline-none leading-8 transition-all w-full',
  {
    variants: {
      variant: {
        default:
          'bg-foreground/10 text-foreground ring-primary ring-offset-1 ring-offset-background focus-visible:ring-2 active:bg-foreground/30 focus:bg-foreground/20',
        foreground:
          'bg-foreground/80 text-background hover:bg-foreground/90 ring-foreground/80 focus-visible:ring-2 ring-offset-1 ring-offset-background active:bg-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ large = false, label, variant, className, ...props }, ref) => {
    return (
      <div className='relative'>
        {label && (
          <label htmlFor={props.name || props.id} className='leading-7 text-sm'>
            {label}
          </label>
        )}

        <input
          className={cn(inputVariants({ variant, className }))}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

export default Input;
