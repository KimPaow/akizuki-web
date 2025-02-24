import * as React from "react";
import Text from "@/components/ui/text";
import { ContactForm } from "@/components/forms/contact";

export function Contact({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className="min-h-screen flex flex-col justify-center max-w-[1600px] mx-auto"
      {...props}
    >
      <div className="min-h-200 px-8 sm:px-20 flex flex-col md:flex-row gap-8">
        <div className="flex-4 flex flex-col justify-start gap-8 mb-16">
          <Text variant="h3" color="muted">
            コンタクト
          </Text>
          <Text variant="h2" className="text-8xl">
            旅を始めましょう
          </Text>
        </div>
        <span className="flex-1" />
        <div className="flex-5">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
