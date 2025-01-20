import { Logo } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Bell, Hash, LucideHome, Mail, User2 } from "lucide-react";
import Link from "next/link";

const homeLinks = [
  {
    title: "Home",
    link: "/feed",
    icon: <LucideHome />,
  },

  {
    title: "Hashtags",
    link: "/hashtags",
    icon: <Hash />,
  },
  {
    title: "Messages",
    link: "/messages",
    icon: <Mail />,
  },
  {
    title: "Notifications",
    link: "/notifications",
    icon: <Bell />,
  },

  {
    title: "Profile",
    link: "/profile",
    icon: <User2 />,
  },
];

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="h-dvh max-w-3xl mx-auto">
        <aside className="h-full hidden lg:flex flex-col justify-between sticky top-0 border-r w-1/4 p-5">
          <div>
            <Logo />
            <ul className="my-5 space-y-5">
              {homeLinks.map((item, idx) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <li key={idx}>
                  <Link
                    href={item.link}
                    className="flex gap-2 items-center text-lg text-neutral-700 hover:text-black transition-all duration-300"
                  >
                    {item.icon} {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Button className="w-full">Logout</Button>
        </aside>

        <main className="h-full">{children}</main>
      </div>
      <div className="fixed min-w-full bottom-0 lg:hidden flex justify-evenly py-4 border-t">
        {homeLinks.map((item, idx) => (
          <Link
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={idx}
            href={item.link}
            className="flex flex-col items-center"
          >
            <div className="hover:bg-neutral-200 p-2 rounded-md transition-all duration-300">
              {item.icon}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
