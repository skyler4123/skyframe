"use client";

import { UsersAPI } from "@/api/users_api";
import { useEffect, useState } from "react";


export default function Home() {
  const [usersState, setUsersState] = useState(null);
  
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
    </div>
  );
}
