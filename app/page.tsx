import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Learn Server Action With Next Js 14</h2>
      <Button>
        <Link href="/todo">Go To ToDo List</Link>
      </Button>

      <Button>
        <Link href="/project">Go To Project Page</Link>
      </Button>
    </main>
  );
}
