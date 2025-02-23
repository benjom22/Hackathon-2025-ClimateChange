"use client";

import { useSession } from "next-auth/react";

export default function ProfileMenu() {
  const { data } = useSession();

  return (
    <div>
      <p>test</p>
    </div>
  );
}