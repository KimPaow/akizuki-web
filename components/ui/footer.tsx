import * as React from "react";
// import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "@/components/ui/link";
import Text from "@/components/ui/text";
import { email, links, phone, socials } from "@/data/links";

function Footer({ ...props }: React.ComponentProps<"footer">) {
  return (
    <footer className="bg-foreground px-4 py-16 sm:p-8 md:p-16" {...props}>
      <div className="w-full max-w-[1280px] mx-auto flex flex-col md:flex-row gap-16 md:gap-16 justify-start">
        <div className="flex-2 flex flex-col gap-4">
          <Link
            underline
            href="/"
            className="text-background font-mincho scroll-m-20 text-2xl tracking-tight mr-auto"
          >
            ホーム
          </Link>
          {links.map((link) => (
            <Link
              key={link.href}
              underline={true}
              href={link.href}
              className="text-background font-mincho scroll-m-20 text-2xl tracking-tight mr-auto"
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div className="flex-2 flex flex-col gap-4">
          <Text variant="h3" className="text-background">
            Social
          </Text>
          {socials.map((social) => (
            <Link
              key={social.text}
              underline
              href={social.href}
              className="text-background mr-auto"
            >
              {social.text}
            </Link>
          ))}
        </div>
        <div className="flex-2 flex flex-col gap-8">
          {email && (
            <div className="flex flex-col gap-4">
              <Text variant="h3" className="text-background">
                Email
              </Text>
              <Text variant="small" className="text-background">
                {email}
              </Text>
            </div>
          )}
          {phone && (
            <div className="flex flex-col gap-4">
              <Text variant="h3" className="text-background">
                Phone
              </Text>
              <Text variant="small" className="text-background">
                {phone}
              </Text>
            </div>
          )}
        </div>
        <div className="hidden flex-4 sm:flex flex-col mt-auto gap-8">
          <Text
            variant="display"
            className="text-background md:text-end !text-8xl"
          >
            秋月
          </Text>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
