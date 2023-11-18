import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "Contact Us" }];
};

export default function ContactUs() {
  return <div className="container relative">Contact Us</div>;
}
