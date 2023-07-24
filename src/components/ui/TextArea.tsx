'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  label?: string;
  large?: boolean;
}

export const textareaVariants = cva(
  'px-3 py-2 rounded-md focus:outline-none leading-8 transition-all w-full',
  {
    variants: {
      variant: {
        default:
          'bg-foreground/5 text-foreground ring-primary ring-offset-1 ring-offset-background focus-visible:ring-2 active:bg-foreground/20 focus:bg-foreground/10 hover:bg-foreground/10',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const TextArea: React.FC<TextAreaProps> = forwardRef<
  HTMLTextAreaElement,
  TextAreaProps
>(({ large = false, label, variant, className, ...props }, ref) => {
  return (
    <div className='relative'>
      {label && (
        <label htmlFor={props.name || props.id} className='leading-7 text-sm'>
          {label}
        </label>
      )}

      <textarea
        className={cn(textareaVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    </div>
  );
});

export default TextArea;
