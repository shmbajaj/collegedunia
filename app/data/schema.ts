import * as z from "zod";

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
    .array(z.string(), {
      required_error: "You have to select at least one item.",
    })
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
});

export const GetInTouchFormSchema = PartialGetInTouchFormSchema.merge(
  CourseLookingForSchema
);
