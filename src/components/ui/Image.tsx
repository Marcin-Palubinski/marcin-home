'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';
import NextImage from 'next/image';

interface ImageProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof imageVariants> {
  src: string;
  alt: string;
}

const imageVariants = cva('relative rounded-md overflow-hidden shadow-md', {
  variants: {
    variant: {
      default: 'aspect-16/9',
      square: 'aspect-1/1',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const Image: React.FC<ImageProps> = forwardRef<HTMLDivElement, ImageProps>(
  ({ src, alt, variant, className, ...props }, ref) => {
    return (
      <div
        className={cn(
          imageVariants({
            variant,
          }),
          className
        )}
        {...props}
        ref={ref}
      >
        <NextImage
          src={src}
          alt={alt}
          fill
          className='object-fit object-cover'
        />
      </div>
    );
  }
);

export default Image;
