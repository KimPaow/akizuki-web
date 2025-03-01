import Image from "next/image";
import Text from "@/components/ui/text";
import Container from "@/components/ui/container";
import Link from "../ui/link";

export function Landing({ ...props }: React.ComponentProps<"div">) {
  return (
    <Container
      className="min-h-screen flex flex-col justify-center items-center relative"
      {...props}
    >
      <div className="mx-auto flex flex-col gap-8 sm:gap-16 items-center justify-center">
        <div className="px-8 sm:px-20 mr-auto flex flex-col items-center justify-items-center">
          <Text variant="display">AKIZUKI</Text>
          <Text variant="lead" color="muted">
            A hidden gem in Fukuoka, Japan |{" "}
            <Link underline href="https://maps.app.goo.gl/BEsHf75AnMdM8Tpp6">
              33°27 N, 130°41 E
            </Link>
          </Text>
        </div>
      </div>
      <Image
        src="/images/drawing.jpg"
        alt="An old castle drawing"
        width={1648}
        height={1540}
        className="h-full object-cover absolute -z-20 mix-blend-multiply dark:mix-blend-screen opacity-10 dark:invert"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-radial from-transparent-50 to-70% to-background -z-10"></div>
    </Container>
  );
}
