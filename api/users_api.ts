const API_URL = "https://jsonplaceholder.typicode.com/users";

export const UsersAPI = {
  async index() {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch users");
    return res.json();
  },

  async show(id: string) {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw new Error("User not found");
    return res.json();
  },

  async create(data: any) {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to create user");
    return res.json();
  },

  async update(id: string, data: any) {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to update user");
    return res.json();
  },
}