import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen h-full font-[family-name:var(--font-figtree)]">
      <main className="h-full">
        <div className="h-full flex flex-col justify-between">
          <div className="text-xl mr-8 sm:mr-40 py-8 sm:py-20 max-w-4/10 flex flex-col gap-8 ml-auto my-auto">
            <p>秋月を発見 - 福岡の隠れた名所。</p>
            <p>
              福岡の山間に佇む秋月は、「九州の小京都」として知られる歴史ある町です。
            </p>
            <p>
              武士時代の風情が残る町並み、美しい自然、豊かな文化遺産が魅力で、都会の喧騒から離れた静かなひとときを楽しめます。観光でも移住でも、秋月はあなたを温かく迎えてくれます。
            </p>
          </div>
          <h1 className="font-mincho text-display px-8 sm:px-20">AKIZUKI</h1>
        </div>
        <div className="h-screen px-8 sm:px-20">
          <Image
            className=""
            src="/images/akizuki-shrine.png"
            alt="Shrine in Akizuki"
            width={468}
            height={777}
            priority
          />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
