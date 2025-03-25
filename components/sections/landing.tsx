import Image from "next/image";
import Container from "@/components/ui/container";
import { AnimatedIntro } from "../ui/animated-intro";

export function Landing({ ...props }: React.ComponentProps<"div">) {
  return (
    <Container
      className="min-h-screen flex flex-col justify-center items-center relative m-0 max-w-none"
      {...props}
    >
      <div className="mx-auto flex flex-col gap-8 sm:gap-16 items-center justify-center">
        <AnimatedIntro />
      </div>
      <Image
        src="/images/landing/hunui.webp"
        alt="An old castle drawing"
        // width={1648}
        // height={1540}
        fill
        className="h-full object-cover absolute -z-20"
      />
    </Container>
  );
}
