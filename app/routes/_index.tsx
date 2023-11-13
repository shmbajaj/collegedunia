import { Link } from "@remix-run/react";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "~/components/page-header";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default function Index() {
  return (
    <div className="container relative">
      <PageHeader className="pb-8">
        <p className="capitalize">PROFESSIONAL EDUCATION CONSULTING</p>
        <PageHeaderHeading className="capitalize">
          TAKE YOUR FUTURE TO NEW HEIGHTS
        </PageHeaderHeading>
        <div className="w-full flex items-center space-x-4 pb-8 pt-4 md:pb-10">
          <Link to="#" className={cn(buttonVariants())}>
            Get Started
          </Link>
          <Link to="#" className={cn(buttonVariants({ variant: "outline" }))}>
            Learn More
          </Link>
        </div>
      </PageHeader>
    </div>
  );
}
