import { cookies } from "next/headers";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export async function Navbar() {
  const session = (await cookies()).get("session");

  return (
    <nav className="py-4 px-8 sticky top-0 z-10 backdrop-blur-md shadow">
      <div className="max-w-3xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Logo />
        </div>

        {session ? (
          <div className="flex gap-2">
            <Button>Get started</Button>
          </div>
        ) : (
          <Button>Logout</Button>
        )}
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <Image
        src={"/logo.svg"}
        alt="Logo"
        width={20}
        height={20}
        quality={100}
      />
      <h1 className="text-xl font-bold">Devsnet</h1>
    </div>
  );
}
