"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    const logout = async () => {
      const res = await fetch("/api/auth/logout");
      const json = await res.json();
      if (json.data) {
        router.push("/login");
      }
    };
    logout();
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-2px)] bg-chetwode-blue-100">
      <span className="text-3xl italic text-chetwode-blue-950/50">
        Saindo...
      </span>
    </div>
  );
}
