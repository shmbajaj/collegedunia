import React from "react";
import type { CarouselProviderProps } from "pure-react-carousel";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import styles from "pure-react-carousel/dist/react-carousel.es.css";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export function Carousel({ children, ...props }: CarouselProviderProps) {
  return (
    <CarouselProvider {...props}>
      <Slider className="pb-0">
        {React.Children.toArray(children)
          .filter(Boolean)
          .map((child, index) => (
            <Slide index={index} key={index} className="pb-0">
              {child}
            </Slide>
          ))}
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
}
