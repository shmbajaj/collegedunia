import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "../../../components/ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Button } from "../../../components/ui/button";
import { Checkbox } from "../../../components/ui/checkbox";

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
  const form = useForm<GetInTouchFormValues>({
    defaultValues,
    resolver: zodResolver(GetInTouchFormSchema),
  });

  function onSubmit(data: GetInTouchFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Shubham Bajaj" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name. It can be your real name or a
                pseudonym. You can only change this once every 30 days.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="89xxxxxxxx" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name. It can be your real name or a
                pseudonym. You can only change this once every 30 days.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="shubham@gmail.com" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name. It can be your real name or a
                pseudonym. You can only change this once every 30 days.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="courseLookingFor"
          render={({ field }) => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Course Looking For</FormLabel>
                <FormDescription>
                  Select the items you want to display in the sidebar.
                </FormDescription>
              </div>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="courseLookingFor"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked: any) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value: any) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can <span>@mention</span> other users and organizations to
                link to them.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
