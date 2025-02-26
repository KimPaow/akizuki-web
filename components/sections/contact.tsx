import * as React from "react";
import Text from "@/components/ui/text";
import { ContactForm } from "@/components/forms/contact";
import { Container } from "@/components/ui/container";

export function Contact({ ...props }: React.ComponentProps<"div">) {
  return (
    <Container className="grid grid-cols-10 auto-rows-auto gap-x-8" {...props}>
      <div className="row-start-2 md:row-start-1 col-start-1 col-end-11 md:col-end-5">
        <ContactForm />
      </div>
      <div className="row-start-1 col-start-1 md:col-start-6 col-end-11 flex flex-col justify-start gap-4 sm:gap-8 mb-16">
        <Text variant="h3" color="muted">
          コンタクト
        </Text>
        <Text variant="h2" className="mt-0 sm:mt-10 text-4xl sm:text-8xl cjk">
          旅を
          <wbr />
          始めましょう
        </Text>
      </div>
    </Container>
  );
}
