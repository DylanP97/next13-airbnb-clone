'use client';

import qs from 'query-string';
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";
import Image from 'next/image';

interface CategoryBoxProps {
  icon: any,
  label: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};
    
    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label
    }

    if (params?.get('category') === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery
    }, { skipNull: true });

    router.push(url);
  }, [label, router, params]);


  return ( 
    <div
      onClick={handleClick}
      className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        p-3
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer
        ${selected ? 'border-b-neutral-800' : 'border-transparent'}
        ${selected ? 'text-neutral-800' : 'text-neutral-500'}
      `}
    >
      <Image className={`${selected ? 'opacity-90' : 'opacity-60'}`} src={icon.src} alt='category-icon' width={30} height={30} />
      <div className="font-medium mt-[6px] text-center text-sm whitespace-nowrap w-[fit-content] min-w-[50px]">
        {label}
      </div>
    </div>
   );
}
 
export default CategoryBox;