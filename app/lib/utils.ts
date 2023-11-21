import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ZodError, ZodSchema } from "zod";
import type { ActionErrors } from "~/types/validation-action";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function validationAction<ActionInput>({
  request,
  schema,
}: {
  request: Request;
  schema: ZodSchema;
}) {
  const formData = await request.formData();
  const formDataArray = Array.from(formData.entries());
  const body = formDataArray.reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: acc[key] ? [...(acc[key] ?? []), value] : value,
    }),
    {} as ActionInput
  );

  try {
    const data = schema.parse(body);
    return { data, errors: null };
  } catch (e) {
    const _errors = e as ZodError<ActionInput>;
    const errors = _errors.issues.reduce(
      (acc: ActionErrors<ActionInput>, error) => {
        const key = error.path[0] as keyof ActionInput;
        acc[key] = error.message;
        return acc;
      },
      {}
    );
    return {
      data: body,
      errors,
    };
  }
}
