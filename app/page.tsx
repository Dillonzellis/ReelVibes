import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="bg-black">
      <div className="container">
        <div className="flex justify-between pt-8 border-b border-white pb-4">
          <h1 className="text-white text-5xl font-bold italic">ReelVibes</h1>
          <div>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
        <div className="text-white pt-12">
          <div>Ask for A List of Movies</div>
          <div>give rating to each Movie</div>
          <div>Submit Button</div>
          <div>Give recommendation based on movies and rating</div>
        </div>
      </div>
    </main>
  );
}
