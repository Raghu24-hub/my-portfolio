import Navbar from "C:\Users\Raghu Naidu\my-portfolio\src\app\components\navbar.tsx";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0f0f0f] text-black dark:text-white">
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to Raghu's Portfolio 🚀</h1>
      </div>
    </main>
  );
}