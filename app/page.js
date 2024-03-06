import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-24">
      <div className="container z-10 w-full max-w-5xl mx-auto font-mono text-sm text-center">
        <Image
          src="/cookie.jpg"
          width={400}
          height={400}
          alt="Cookie"
          className="mx-auto"
        />
        <h1 className="mt-3 text-xl">Cookie the pasaway</h1>
      </div>
    </main>
  );
}
