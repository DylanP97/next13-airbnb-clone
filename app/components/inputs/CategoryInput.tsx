'use client';

import Image from "next/image";


interface CategoryBoxProps {
  label: string;
  icon: any;
  selected?: boolean;
  onClick: (value: string) => void;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  label,
  icon,
  selected,
  onClick
}) => {
  return ( 
    <div
      onClick={() => onClick(label)}
      className={`
        rounded-xl
        border-2
        p-4
        flex
        flex-col
        gap-3
        hover:border-black
        transition
        cursor-pointer
        ${selected ? 'border-black' : 'border-neutral-200'}
      `}
    >
        <Image
          src={icon}
          alt="category-icon"
          width={28}
          className="opacity-90"
        />

      <div className="font-semibold">
        {label}
      </div>
    </div>
   );
}
 
export default CategoryBox;