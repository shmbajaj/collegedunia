import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "Services" }];
};

export default function Services() {
  return <div className="container relative">Services</div>;
}
