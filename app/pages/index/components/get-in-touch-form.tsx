import * as z from "zod";
// import { toast } from "../../../components/ui/use-toast";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Button } from "../../../components/ui/button";
import { Checkbox } from "../../../components/ui/checkbox";
import { useFetcher } from "@remix-run/react";
import { Label } from "~/components/ui/label";

const items = [
  { label: "Engineering", id: "engineering" },
  { label: "Medical", id: "medical" },
  { label: "BA LLB/ LLM", id: "ballb/llm" },
  { label: "MBA/PGDM/MMS", id: "mba/pgdm/mms" },
  { label: "BBA/BBM", id: "bba/bbm" },
  { label: "B Com./ M Com.", id: "bcom./mcom." },
  { label: "B Pharma / M Pharma", id: "bpharma/mpharma" },
  { label: "BCA/MCA/BSc./MSc.", id: "bca/mca/bsc./msc." },
  { label: "Other", id: "other" },
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

export function GetInTouchForm() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form className="space-y-8">
      <Label className="flex flex-col w-full max-w-sm  gap-1.5">
        <span>Name</span>
        <Input placeholder="Shubham Bajaj" name="name" />
        <p className="text-sm text-muted-foreground">
          This is your public display name. It can be your real name or a
          pseudonym. You can only change this once every 30 days.
        </p>
      </Label>

      <Label className="flex flex-col w-full max-w-sm  gap-1.5">
        <span>Phone Number</span>
        <Input placeholder="89xxxxxxxx" name="phoneNumber" />
        <p className="text-sm text-muted-foreground">
          This is your public display name. It can be your real name or a
          pseudonym. You can only change this once every 30 days.
        </p>
      </Label>

      <Label className="flex flex-col w-full max-w-sm  gap-1.5">
        <span>Email</span>
        <Input placeholder="shubham@gmail.com" name="email" />
        <p className="text-sm text-muted-foreground">
          This is your public display name. It can be your real name or a
          pseudonym. You can only change this once every 30 days.
        </p>
      </Label>

      <Label className="flex flex-col w-full max-w-sm  gap-1.5">
        <div className="mb-4">
          <span className="text-base">Course Looking For</span>
          <p className="text-sm text-muted-foreground">
            Select the items you want to display in the sidebar.
          </p>
        </div>
        {items.map((item) => (
          <Label
            key={item.id}
            className="flex flex-row items-start space-x-3 space-y-0"
          >
            <Checkbox name="courseLookingFor" />
            <span className="font-normal">{item.label}</span>
          </Label>
        ))}
      </Label>

      <Label className="flex flex-col w-full max-w-sm  gap-1.5">
        <span>Message</span>
        <Textarea
          placeholder="Tell us a little bit about yourself"
          className="resize-none"
          name="message"
        />
        <p className="text-sm text-muted-foreground">
          You can <span>@mention</span> other users and organizations to link to
          them.
        </p>
      </Label>

      <Button type="submit">Submit</Button>
    </fetcher.Form>
  );
}
