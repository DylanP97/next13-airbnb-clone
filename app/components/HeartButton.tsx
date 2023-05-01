'use client';

import { interfaceIcons } from "@/public/interface";

import useFavorite from "@/app/hooks/useFavorite";
import { SafeUser } from "@/app/types";

import ClientOnly from "./ClientOnly";
import Image from "next/image";

interface HeartButtonProps {
  listingId: string
  currentUser?: SafeUser | null
}

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser
}) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser
  });

  return (
    <div
      onClick={toggleFavorite}
      className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
      "
    >
      <Image
        src={interfaceIcons['borderHeart']}
        alt="interface-icon"
        className="absolute"
      />
    {!hasFavorited ? (
      <Image
        src={interfaceIcons['emptyHeart']}
        alt="interface-icon"
        
      />
    ) : (
      <Image
        src={interfaceIcons['redHeart']}
        alt="interface-icon"
      />
    )}
    </div>
  );
}

export default HeartButton;