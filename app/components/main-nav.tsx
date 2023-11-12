import { Link, useLocation } from "@remix-run/react";
import { Icons } from "./icons";
import { cn } from "~/lib/utils";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export function MainNav() {
  const { pathname } = useLocation();
  return (
    <div className="mr-4 hidden md:flex">
      <Link to="/" className="mr-6 flex items-center space-x-2">
        <Icons.Logo className="h-6 w-6" />
        <span className="hidden sm:inline-block font-bold">collegedunia</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Button variant="outline" className="border-none p-0 hover:bg-inherit">
          Consultation <ChevronDown className="h-4 w-4 ml-2" />
        </Button>
        <Link
          to="direct-admission"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/direct-admission")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Direct Admission
        </Link>
        <Link
          to="about-us"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/about-us")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          About Us
        </Link>
        <Link
          to="login"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/login")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Login
        </Link>
        <Link
          to="registration"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/registration")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Registration
        </Link>
        <Link
          to="contact-us"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/contact-us")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Contact Us
        </Link>
        <Link
          to="forum"
          className={cn(
            "hidden transition-colors hover:text-foreground/80 lg:block",
            pathname?.startsWith("/forum")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Forum
        </Link>
      </nav>
    </div>
  );
}
