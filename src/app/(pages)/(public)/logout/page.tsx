"use client";
import { useAuthStore } from "@/app/stores/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LogoutPage() {
  const router = useRouter();
  const { clearUserId } = useAuthStore();

  useEffect(() => {
    const localStorage = window.localStorage;
    localStorage.removeItem("auth-storage");

    const logout = async () => {
      const res = await fetch("/api/auth/logout");
      const json = await res.json();
      if (json.data) {
        router.push("/login");
      }
    };
    clearUserId();
    logout();
  }, [router, clearUserId]);

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-2px)] bg-chetwode-blue-100">
      <span className="text-3xl italic text-chetwode-blue-950/50">
        Saindo...
      </span>
    </div>
  );
}
