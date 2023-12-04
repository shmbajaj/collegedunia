import { GetInTouchForm } from "./get-in-touch-form";
import { PageHeaderHeading } from "../../../components/page-header";
import React from "react";
import { cn } from "~/lib/utils";

export function GetInTouch({
  className,
  children,
  ...props
}: React.HtmlHTMLAttributes<HTMLElement>) {
  return (
    <section
      {...props}
      className={cn(
        "border shadow-lg px-8 py-8 mb-4 max-w-5xl m-auto",
        className
      )}
    >
      <PageHeaderHeading className="uppercase mb-4">
        GET IN TOUCH
      </PageHeaderHeading>
      <div className="flex flex-col md:flex-row gap-4">
        <GetInTouchForm className="flex-1" />
        {children && <div className="flex-1">{children}</div>}
      </div>
    </section>
  );
}
