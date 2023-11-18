import { Link } from "@remix-run/react";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";
import { buttonVariants } from "./ui/button";
import { Icons } from "./icons";

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0 w-full border-t text-white  bg-orange-500/95">
      <div className=" container flex flex-col items-center justify-between gap-4 md:flex-row m-auto max-w-5xl h-14">
        <p className="text-center leading-loose md:text-left">
          {`Copyright © ${siteConfig.year}`}{" "}
          <span className="font-medium">{siteConfig.name}</span> | Powered by{" "}
          <a
            href={siteConfig.poweredBy.link}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            {siteConfig.poweredBy.name}
          </a>
        </p>
        <nav className="flex items-center gap-4">
          {siteConfig.links.map((link) => (
            <Link key={link.to} to={link.to} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0 hover:bg-orange-500 hover:opacity-85 "
                )}
              >
                <Icons.Instagram className="h-4 w-4" />
                <span className="sr-only">{link.title}</span>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
