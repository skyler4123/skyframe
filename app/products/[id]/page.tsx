"use client";

import { useEffect } from "react";

type Props = {
  params: { id: string };
};

export default function ProductsIdPage(props: Props) {

  useEffect(() => {
    console.log("Product ID:", props);
    // Here you can fetch product details using the id
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Products
    </div>
  )
}