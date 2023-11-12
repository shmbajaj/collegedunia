import type { MetaFunction } from "@remix-run/node";
import { SiteFooter } from "~/components/site-footer";
import { SiteHeader } from "~/components/site-header";

export const meta: MetaFunction = () => {
  return [
    { title: "CollegeDunia" },
    {
      name: "description",
      content: "Welcome to CollegeDunia!",
    },
  ];
};

interface IndexProps {
  children: React.ReactNode;
}

export default function Index({ children }: IndexProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </div>
  );
}
