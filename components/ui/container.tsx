import * as React from "react";

export function Container({ children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className="h-screen px-8 sm:px-20 flex flex-col justify-center"
      {...props}
    >
      {children}
    </div>
  );
}
