import { useMemo } from "react";

const useFormatPrice = (price: number): string => {
  const formattedPrice = useMemo(() => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return formatter.format(price);
  }, [price]);

  return formattedPrice;
};

export default useFormatPrice;
