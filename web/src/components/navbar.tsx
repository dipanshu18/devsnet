import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LucideMenu } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { cookies } from "next/headers";
import Image from "next/image";

export async function Navbar() {
  const session = (await cookies()).get("session");

  return (
    <nav className="py-4 px-8 sticky top-0 z-10 backdrop-blur-md shadow">
      <div className="max-w-3xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger className="sm:hidden">
              <LucideMenu />
            </SheetTrigger>
            <SheetContent
              side={"left"}
              className="h-full flex flex-col justify-between"
            >
              <SheetHeader className="text-left">
                <SheetTitle>Devsnet</SheetTitle>
                <VisuallyHidden>
                  <SheetDescription />
                </VisuallyHidden>
                <ul className="text-neutral-700">
                  <li>hi</li>
                </ul>
              </SheetHeader>
              <SheetFooter className="flex flex-col w-full space-y-2">
                <Button>Login</Button>
                <Button>Get started</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          <Logo />
        </div>

        {!session ? (
          <div className="hidden sm:flex gap-2">
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
