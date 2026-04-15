"use client";

import { AomiFrame } from "@/components/aomi-frame";

export default function Home() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-neutral-950 p-4">
      <AomiFrame
        width="100%"
        height="100%"
        backendUrl="https://api.aomi.dev"
      />
    </main>
  );
}
