import type { MetaFunction } from "@remix-run/node";
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

export default function Index() {
  return <SiteHeader />;
}
