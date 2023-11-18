import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Management Admissions" },
    {
      name: "description",
      content: "Get Admission in Management",
    },
  ];
};

export default function ManagementAdmissions() {
  return <div className="container relative">ManagementAdmissions</div>;
}
