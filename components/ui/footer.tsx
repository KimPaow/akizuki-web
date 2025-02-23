import * as React from "react";
// import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "@/components/ui/link";
import Text from "@/components/ui/text";
import { email, links, phone, socials } from "@/data/links";

function Footer({ ...props }: React.ComponentProps<"footer">) {
  return (
    <footer className="bg-foreground p-16" {...props}>
      <div className="w-full max-w-[1600px] mx-auto flex gap-16 justify-start">
        <div className="flex-2 flex flex-col gap-4">
          <Link
            underline
            href="/"
            className="invert font-mincho scroll-m-20 text-2xl tracking-tight mr-auto"
          >
            ホーム
          </Link>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="invert font-mincho scroll-m-20 text-2xl tracking-tight mr-auto"
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div className="flex-2 flex flex-col gap-4">
          <Text variant="h3" className="invert">
            Social
          </Text>
          {socials.map((social) => (
            <Link
              key={social.text}
              underline
              href={social.href}
              className="invert mr-auto"
            >
              {social.text}
            </Link>
          ))}
        </div>
        <div className="flex-2 flex flex-col gap-8">
          {email && (
            <div className="flex flex-col gap-4">
              <Text variant="h3" className="invert">
                Email
              </Text>
              <Text variant="small" className="invert">
                {email}
              </Text>
            </div>
          )}
          {phone && (
            <div className="flex flex-col gap-4">
              <Text variant="h3" className="invert">
                Phone
              </Text>
              <Text variant="small" className="invert">
                {phone}
              </Text>
            </div>
          )}
        </div>
        <div className="flex-4 flex flex-col mt-auto gap-8">
          <Text variant="display" className="invert text-end !text-8xl">
            秋月
          </Text>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
