import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const items = [
  { course: "Engineering", id: "engineering" },
  { course: "Medical", id: "medical" },
  { course: "BA LLB/ LLM", id: "ballb/llm" },
  { course: "MBA/PGDM/MMS", id: "mba/pgdm/mms" },
  { course: "BBA/BBM", id: "bba/bbm" },
  { course: "B Com./ M Com.", id: "bcom./mcom." },
  { course: "B Pharma / M Pharma", id: "bpharma/mpharma" },
  { course: "BCA/MCA/BSc./MSc.", id: "bca/mca/bsc./msc." },
  { course: "Other", id: "other" },
];

const PartialGetInTouchFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    }),
  phoneNumber: z
    .string()
    .min(10, {
      message: "The PhoneNumber must be 10 characters",
    })
    .max(10, {
      message: "The PhoneNumber must be 10 characters",
    })
    .regex(/^[6-9]\d{9}$/, "The PhoneNumber must contain numbers"),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  message: z.string().optional(),
});

const CourseLookingForSchema = z.object({
  courseLookingFor: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
});

const GetInTouchFormSchema = PartialGetInTouchFormSchema.merge(
  CourseLookingForSchema
);

type GetInTouchFormValues = z.infer<typeof GetInTouchFormSchema>;

const defaultValues: GetInTouchFormValues = {
  courseLookingFor: [],
  name: "",
  email: "",
  phoneNumber: "",
  message: "",
};

export function GetInTouchForm(){
  const form = useForm<GetInTouchFormValues>({
    defaultValues,
    resolver: zodResolver(GetInTouchFormSchema) 
  })
}