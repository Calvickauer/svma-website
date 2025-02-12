import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";
import { TranslationProvider, useTranslation } from "../context/TranslationContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingNavbar from "../components/FloatNavbar";
import { useState, useEffect } from "react";
import "../styles/globals.css";

function AppContent({ Component, pageProps }: AppProps) {
  const { toggleLanguage, isSpanish } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="appContainer">
      <Navbar />
      <button
        onClick={toggleLanguage}
        className="translateButton"
        style={{
          position: "fixed",
          top: "10px",
          right: "10px",
          padding: "8px 12px",
          cursor: "pointer",
          zIndex: 1000,
          backgroundColor: "#A2B853",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontWeight: "bold",
        }}
      >
        {mounted ? (isSpanish ? "English" : "Español") : "Loading..."}
      </button>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
      <FloatingNavbar />
    </div>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <TranslationProvider>
        <AppContent Component={Component} pageProps={pageProps} />
      </TranslationProvider>
    </ClerkProvider>
  );
}

export default MyApp;
