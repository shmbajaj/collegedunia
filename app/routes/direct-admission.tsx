import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "Direct Admission" }];
};

export default function DirectAdmission() {
  return <div className="container relative">DirectAdmission</div>;
}
