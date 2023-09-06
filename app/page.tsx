import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="bg-black">
      <div className="container">
        <h1 className="text-white text-2xl">Movie Tracker</h1>
        <div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </main>
  );
}
