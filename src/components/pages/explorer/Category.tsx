import { TypeCategory } from "@/@types/Books";
import { ComponentProps } from "react";
import { tv } from "tailwind-variants";

interface ICategoryProps extends ComponentProps<'span'> {
  category: TypeCategory;
  isActive: boolean;
}

const categoryTailwindVariant = tv({
  base: "p-2 rounded-full font-semibold text-xs cursor-pointer transition ease-in-out duration-150 border text-[#8381D9] border-[#8381D9] hover:brightness-115 min-w-20 text-center",
  variants: {
    isActive: {
      true: "text-zinc-100 bg-[#2A2879] hover:bg-[#3e3cbe] border-[#2A2879] text-white",
    }
  }
})

export default function Category({ category, isActive, ...props }: ICategoryProps) {
  return (
    <span
      className={categoryTailwindVariant({ isActive })}
      {...props}
    >
      {category}
    </span>
  )
}
