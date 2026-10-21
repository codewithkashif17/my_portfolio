


import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)] transition-colors duration-300">
      <Navbar />

      <main className="relative">
        {children}
      </main>

      <Footer />
    </div>
  );
}
