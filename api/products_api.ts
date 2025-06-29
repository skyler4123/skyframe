const BASE_URL = "https://6861040c8e7486408444a6a3.mockapi.io/api/v1/products";

export const ProductsApi = {
  async index() {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
  },

  async show(id: string) {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) throw new Error("Product not found");
    return res.json();
  },

  async create(data: any) {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to create product");
    return res.json();
  },

  async update(id: string, data: any) {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to update product");
    return res.json();
  },

  async delete(id: string) {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete product");
    return res.json();
  },
};