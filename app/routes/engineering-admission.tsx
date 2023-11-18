import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Engineering Admissions" },
    {
      name: "description",
      content: "Get Admission in Engineering",
    },
  ];
};

export default function EngineeringAdmissions() {
  return <div className="container relative">EngineeringAdmissions</div>;
}
