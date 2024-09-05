"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    // Assure-toi que les données de l'utilisateur sont chargées avant d'agir
    if (isLoaded) {
      if (user) {
        router.push("/dashboard");
      } else {
        router.push("/accueil");
      }
    }
  }, [user, isLoaded, router]); // Ajoute toutes les dépendances nécessaires

  return (
    <div className="items-center justify-center m-auto">
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
}
