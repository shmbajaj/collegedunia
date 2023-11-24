import React from "react";
import type { CarouselProviderProps } from "pure-react-carousel";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { cn } from "~/lib/utils";
import { buttonVariants } from "./ui/button";
import styles from "pure-react-carousel/dist/react-carousel.es.css";
import type { LinksFunction } from "@remix-run/node";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export function Carousel({ children, ...props }: CarouselProviderProps) {
  return (
    <CarouselProvider {...props} className="overflow-hidden">
      <Slider className="pb-0 flex">
        {React.Children.toArray(children)
          .filter(Boolean)
          .map((child, index) => (
            <Slide
              index={index}
              key={index}
              className="pb-0"
              style={{ paddingBottom: 0 }}
            >
              {child}
            </Slide>
          ))}
      </Slider>
      <div className="w-full flex justify-between items-center gap-4 flex-wrap mt-4 absolute top-1/3 left-0 lg:top-1/2">
        <ButtonBack
          className={cn(buttonVariants({ variant: "default", size: "icon" }))}
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </ButtonBack>
        <ButtonNext
          className={cn(buttonVariants({ variant: "default", size: "icon" }))}
        >
          <ChevronRightIcon className="w-4 h-4" />
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
}
