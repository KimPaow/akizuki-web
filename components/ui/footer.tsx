import * as React from "react";
import Link from "@/components/ui/link";
import Text from "@/components/ui/text";
import { LayoutQueryResult } from "@/sanity/types";
import { Divider } from "./divider";

function Footer({
  socials,
  menu,
  phone,
  email,
  ...props
}: React.ComponentProps<"footer"> & {
  socials?: NonNullable<LayoutQueryResult>["socials"];
  menu?: NonNullable<LayoutQueryResult>["menu"];
  phone?: string;
  email?: string;
}) {
  return (
    <footer className="bg-foreground px-4 py-16 sm:p-8 md:p-16" {...props}>
      <div className="w-full max-w-[1600px] px-4 md:px-8 mx-auto flex flex-col gap-16">
        <div className="flex flex-col md:flex-row gap-16 md:gap-16 justify-start">
          <div className="flex-2 flex flex-col gap-4">
            <Link
              underline
              href="/"
              className="!text-background font-mincho scroll-m-20 text-2xl tracking-tight mr-auto"
            >
              ホーム
            </Link>
            {menu?.map((link) => {
              if (link._type === "externalLink") {
                return (
                  <Link
                    key={link._key}
                    underline={true}
                    href={link.url ?? ""}
                    className="!text-background font-mincho scroll-m-20 text-2xl tracking-tight mr-auto"
                  >
                    {link.title}
                  </Link>
                );
              } else {
                const internalLink = link as unknown as {
                  slug: { current: string };
                  name: string;
                  _id: string;
                };
                return (
                  <Link
                    key={internalLink._id}
                    underline={true}
                    href={`/${internalLink.slug?.current}`}
                    className="!text-background font-mincho scroll-m-20 text-2xl tracking-tight mr-auto"
                  >
                    {internalLink.name}
                  </Link>
                );
              }
            })}
          </div>
          {socials && (
            <div className="flex-2 flex flex-col gap-4">
              <Text variant="h3" className="text-background">
                Social
              </Text>
              {socials.map((social) => (
                <Link
                  key={social._key}
                  underline
                  href={social.url ?? ""}
                  className="!text-background mr-auto"
                >
                  {social.title}
                </Link>
              ))}
            </div>
          )}
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
          <div className="hidden flex-4 sm:flex flex-col mb-auto gap-8">
            <Text
              variant="display"
              className="text-background md:text-end !text-8xl"
            >
              秋月
            </Text>
          </div>
        </div>
        <Divider className="bg-background" />
        <div className="flex flex-col md:flex-row gap-16 md:gap-16 justify-between">
          <Text variant="small" className="text-background">
            ©24 AKIZUKI – All rights reserved
          </Text>
          <div>
            <Text className="text-background">KEZZA株式会社</Text>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
