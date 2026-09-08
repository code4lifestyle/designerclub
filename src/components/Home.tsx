import Signup from "./Signup";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center px-4 py-12">
      <Signup />
      <h2 className="text-center">this is home page</h2>
    </main>
  );
}
