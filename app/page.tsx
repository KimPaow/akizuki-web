import Text from "@/components/ui/text";
import { Experience } from "@/components/sections/experience";
import { Living } from "@/components/sections/living";
import { ContactForm } from "@/components/forms/contact";

export default function Home() {
  return (
    <div className="min-h-screen h-full font-[family-name:var(--font-figtree)]">
      <main className="min-h-full">
        <div className="min-h-screen flex flex-col justify-between">
          <div className="text-xl mr-8 sm:mr-40 py-8 sm:py-20 max-w-4/10 flex flex-col gap-8 ml-auto my-auto">
            <Text variant="large" color="muted">
              秋月を発見 - 福岡の隠れた名所。
            </Text>
            <Text variant="large" color="muted">
              福岡の山間に佇む秋月は、「九州の小京都」として知られる歴史ある町です。
            </Text>
            <Text variant="large" color="muted">
              武士時代の風情が残る町並み、美しい自然、豊かな文化遺産が魅力で、都会の喧騒から離れた静かなひとときを楽しめます。観光でも移住でも、秋月はあなたを温かく迎えてくれます。
            </Text>
          </div>
          <Text variant="display" className="px-8 sm:px-20">
            AKIZUKI
          </Text>
        </div>
        <Experience />
        <Living />
        <ContactForm />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
