import Image from "next/image";
import Container from "@/components/ui/container";
import { AnimatedIntro } from "../ui/animated-intro";

export function Landing({ ...props }: React.ComponentProps<"div">) {
  return (
    <Container
      className="min-h-screen flex flex-col justify-center items-center relative"
      {...props}
    >
      <div className="mx-auto flex flex-col gap-8 sm:gap-16 items-center justify-center">
        <AnimatedIntro />
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
