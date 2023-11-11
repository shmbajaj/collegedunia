import { Link } from "@remix-run/react";
import { Icons } from "./icons";
// import { cn } from "~/lib/utils";
import {
  AlignJustifyIcon,
  BellIcon,
  ChevronDown,
  DotIcon,
  EditIcon,
  GraduationCap,
  GripIcon,
  MapPin,
} from "lucide-react";
import { Button } from "./ui/button";
import { Search } from "./search";
import { Separator } from "./ui/separator";

export function MainNav() {
  //   const { pathname } = useLocation();
  return (
    <div className="mr-4 hidden md:flex">
      <Link to="/" className="mr-6 flex items-center space-x-2">
        <Icons.Logo className="h-6 w-6" />
        <span className="hidden sm:inline-block font-bold">collegedunia</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <div className="flex flex-col items-center whitespace-nowrap">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span className="flex items-center gap-[2px]">
              <GraduationCap className="h-4 w-4" /> Select Goal
            </span>
            &
            <span className="flex items-center gap-[2px]">
              <MapPin className="h-4 w-4" /> City
            </span>
          </div>
          <Button className="px-0 py-0 h-auto bg-white hover:bg-white text-primary">
            Select Goal <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="hidden sm:block w-96 flex-1 md:flex-none">
          <Search placeholder="Search for colleges, exams, courses and more..." />
        </div>
        <div className="block sm:hidden w-32 flex-1 md:flex-none">
          <Search placeholder="Search ..." />
        </div>
        <div className="flex items-center gap-1">
          <EditIcon className="h-6 w-6" />
          <div className="flex flex-col items-center whitespace-nowrap">
            <p className="text-sm font-bold">Write a Review</p>
            <Button className="text-xs px-2 py-1 h-6">Get upto ₹500*</Button>
          </div>
        </div>
        <Separator orientation="vertical" />
        <Button variant="ghost" className="border-none hover:bg-none">
          <GripIcon className="mr-2 h-4 w-4" /> Explore
        </Button>
        <Button variant="secondary" className="rounded-full">
          <div className="relative">
            <BellIcon className="h-4 w-4" />
            <DotIcon className="h-14 w-14 absolute -top-7 -right-6" />
          </div>
        </Button>
        <Button variant="secondary" className="rounded-full">
          <AlignJustifyIcon className="h-4 w-4" />
        </Button>
      </nav>
    </div>
  );
}
