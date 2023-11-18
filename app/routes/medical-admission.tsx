import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Medical Admissions" },
    {
      name: "description",
      content: "Get Admission in Medical",
    },
  ];
};

export default function MedicalAdmissions() {
  return <div className="container relative">MedicalAdmissions</div>;
}
