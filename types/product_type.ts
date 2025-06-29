import { ImageType } from "./image_type";

export type ProductType = {
  id: string;
  name: string;
  price: string;
  description: string;
  createdAt: string;
  images: ImageType[];
  category: string;
};
