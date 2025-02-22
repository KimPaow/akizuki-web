import * as React from "react";

export function UnderConstruction({
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className="h-full font-[family-name:var(--font-figtree)]" {...props}>
      <main className="h-full flex flex-col items-center justify-items-center">
        <div className="my-auto flex flex-col gap-8 items-center justify-items-center">
          <div className="flex flex-col gap-8">
            <h1 className="font-mincho text-5xl">Under construction</h1>
            <p className="text-l block">This page is coming soon.</p>
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
