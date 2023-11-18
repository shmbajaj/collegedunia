import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "Forum" }];
};

export default function Forum() {
  return <div className="container relative">Forum</div>;
}
