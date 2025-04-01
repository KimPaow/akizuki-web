import Text from "@/components/ui/text";
import { ContactForm } from "@/components/forms/contact";
import { Container } from "@/components/ui/container";

export function Contact({ ...props }: React.ComponentProps<"div">) {
  return (
    <Container className="flex flex-col max-w-[60ch] gap-16" {...props}>
      <Text variant="h2" className="text-2xl cjk">
        お問い合わせ
      </Text>
      <ContactForm />
    </Container>
  );
}
