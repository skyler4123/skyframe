"use client";

import { UsersAPI } from "@/api/users_api";
import { useEffect, useState } from "react";
import { UserType } from "@/types/user_type";

export default function Home() {
  const [usersState, setUsersState] = useState<UserType[]>([]);
  
  useEffect(() => {
    const users = UsersAPI.index();
    users
      .then((data) => {
        console.log("Fetched users:", data);
        setUsersState(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Users
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ul className="list-inside list-disc text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          {usersState.map((user) => (
            <li key={user.id} className="mb-2 tracking-[-.01em]">
              {user.id} - {user.name} - {user.username} - {user.email} - address: {user.address.street}, {user.address.city} - company: {user.company.name}
            </li>
          ))}
        </ul>
      </main>

    </div>
  );
}
