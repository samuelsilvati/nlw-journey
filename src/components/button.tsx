import { ComponentProps } from 'react'

import { tv, VariantProps } from 'tailwind-variants'
const buttonVariants = tv({
  base: 'flex items-center gap-2 rounded-lg justify-center px-5 py-2 font-medium  transition-opacity hover:opacity-90',
  variants: {
    variant: {
      primary: 'bg-lime-300 text-lime-950',
      secondary: 'bg-zinc-800 text-zinc-200',
    },

    size: {
      default: 'py-2',
      full: 'w-full h-11',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode
}
export function Button({ children, variant, size, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      type="button"
      className={buttonVariants({ variant, size })}
    >
      {children}
    </button>
  )
}
