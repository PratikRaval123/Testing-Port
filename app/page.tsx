import PortfolioWrapper from "@/components/PortfolioWrapper";

export default function Home() {
  return (
    <main className="bg-primary min-h-screen text-stone-600 dark:text-stone-300 overflow-x-hidden selection:bg-accent selection:text-white transition-colors duration-300 font-sans">
      <PortfolioWrapper />
    </main>
  );
}