"use client";

import { use, useEffect } from "react";

type Props = {
  params: Promise<{ id: string }>;
};

export default function ProductsIdPage(props: Props) {
  const { id } = use(props.params);
  // useEffect(() => {
  //   // Here you can fetch product details using the id
  //   console.log(params.id)
  // }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Products Page {id}
    </div>
  )
}