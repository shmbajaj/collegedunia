import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "About Us" }];
};

export default function AboutUs() {
  return <div className="container relative">About Us</div>;
}
