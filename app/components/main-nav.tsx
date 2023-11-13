import { Link, useLocation } from "@remix-run/react";
import { Icons } from "./icons";
import { cn } from "~/lib/utils";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { navConfig } from "~/config/nav";
import { siteConfig } from "~/config/site";

export function MainNav() {
  const { pathname } = useLocation();
  return (
    <div className="m-auto max-w-5xl hidden md:flex container h-14 items-center justify-evenly">
      <Link to="/" className="mr-6 flex items-center space-x-2">
        <Icons.Logo className="h-6 w-6" />
        <span className="hidden sm:inline-block font-bold">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Button
          variant="outline"
          className="border-none p-0 hover:bg-inherit text-sm font-medium"
        >
          Consultation <ChevronDown className="h-4 w-4 ml-2" />
        </Button>
        <div className="flex items-center space-x-3">
          {navConfig.mainNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname?.startsWith(`/${item.to}`)
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
