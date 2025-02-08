import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Dashboard() {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      console.log("User is not signed in. Redirecting to login...");
      router.push("/auth/login");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div>Redirecting to login...</div>;
  }

  return (
    <div>
      <h1>Welcome, {user?.firstName || "User"}!</h1>
    </div>
  );
}
