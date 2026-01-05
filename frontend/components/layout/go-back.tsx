"use client";

import { useRouter } from "next/navigation";

export default function GoBackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="hover:text-primary opacity-50 hover:opacity-100"
    >
      Go Back
    </button>
  );
}
