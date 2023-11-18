import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "Registration" }];
};

export default function Registration() {
  return <div className="container relative">Registration</div>;
}
