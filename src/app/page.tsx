import Dashboard from "./dashboard/page";
import NavBar from "@/components/global/navbar/navbar";

export default function Home() {
  return (
    <div className="relative flex h-screen justify-center items-start gap-2 bg-black/5  p-2 overflow-hidden">
      <NavBar />
      <Dashboard />
    </div>
  );
}
