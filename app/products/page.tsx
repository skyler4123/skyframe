"use client";

import { useEffect, useState } from "react";
import { ProductsApi } from "@/api/products_api";
import { ProductType } from "@/types/product_type";

export default function Home() {
  const [productsState, setProductsState] = useState<ProductType[]>([]); // Adjust type as needed
  useEffect(() => {
    const products = ProductsApi.index(); // Assuming this API returns products
    products
      .then((data) => {
        console.log("Fetched products:", data);
        setProductsState(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Products
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ul className="list-inside list-disc text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          {productsState.map((product) => (
            <li key={product.id} className="mb-2 tracking-[-.01em]">
              <div>
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt={image.name}
                    className="w-16 h-16 object-cover"
                  />
                ))}
              </div>
              <div>
                {product.id} - {product.name} - {product.price} - {product.description}\
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
