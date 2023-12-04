import { useFetcher, type MetaFunction, Link } from '@remix-run/react';
import type { ActionFunctionArgs } from '@remix-run/node';
import type { ActionErrors } from '~/types/validation-action';
import type * as z from 'zod';
import { json } from '@remix-run/node';
import { cn, validationAction } from '~/lib/utils';
import { FormRegisterationSchema } from '~/data/schema';
import React from 'react';
import { toast } from '~/components/ui/use-toast';
import { Button, buttonVariants } from '~/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import {
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from '~/components/form';
import { Input } from '~/components/ui/input';
import { Separator } from '~/components/ui/separator';

export const meta: MetaFunction = () => {
  return [{ title: 'Registration' }];
};

export type FormRegistrationInput = z.infer<typeof FormRegisterationSchema>;

export interface FormRegistrationActionData {
  errors?: ActionErrors<FormRegistrationInput>;
  data?: FormRegistrationInput;
}

const formRegisterationDefaultValues: Partial<FormRegistrationInput> = {
  name: '',
  phoneNumber: '',
  email: '',
  password: '',
  confirmPassword: '',
  tenthSchool: '',
  tenthBoard: '',
  tenthScore: '',
  tenthYearOfPassing: '',
  twelfthScore: '',
  twelfthYearOfPassing: '',
  fatherName: '',
  fatherPhoneNumber: '',
  city: '',
  fathersOccupation: '',
  annualIncome: 0,
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const { data, errors } = await validationAction<FormRegistrationInput>({
    request,
    schema: FormRegisterationSchema,
  });
  if (errors) {
    return json({ errors });
  }
  return json({ data });
};

export default function Registration({
  className,
  ...props
}: React.HTMLAttributes<HTMLFormElement>) {
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const fetcher = useFetcher<FormRegistrationActionData>();

  const actionData = fetcher.data;
  const isSubmitting = fetcher.state === 'submitting';
  const isSubmitted = Boolean(fetcher.data?.data && !fetcher.data.errors);

  React.useEffect(() => {
    if (!isSubmitted) return;
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            {JSON.stringify(fetcher.data?.data, null, 2)}
          </code>
        </pre>
      ),
    });
    formRef.current?.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitted]);

  return (
    <div className="container relative flex items-center justify-center p-8">
      <fetcher.Form
        {...props}
        method="post"
        className={cn('space-y-8', className)}
        ref={formRef}
      >
        <FormItem>
          <FormLabel htmlFor="name" error={actionData?.errors?.name}>
            Name
          </FormLabel>
          <Input
            placeholder="John Doe"
            name="name"
            id="name"
            defaultValue={formRegisterationDefaultValues.name}
          />
          <FormDescription>
            Enter your full name as per official records.
          </FormDescription>
          <FormMessage>{actionData?.errors?.name}</FormMessage>
        </FormItem>

        <FormItem>
          <FormLabel
            htmlFor="phoneNumber"
            error={actionData?.errors?.phoneNumber}
          >
            Phone Number
          </FormLabel>
          <Input
            placeholder="9876543210"
            name="phoneNumber"
            id="phoneNumber"
            defaultValue={formRegisterationDefaultValues.phoneNumber}
          />
          <FormDescription>
            Provide a valid 10-digit phone number.
          </FormDescription>
          <FormMessage>{actionData?.errors?.phoneNumber}</FormMessage>
        </FormItem>

        <FormItem>
          <FormLabel
            htmlFor="highestEducationSchema"
            error={actionData?.errors?.highestEducationSchema}
          >
            Highest Education
          </FormLabel>
          <Select
            defaultValue={formRegisterationDefaultValues.highestEducationSchema}
            name="highestEducationSchema"
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue
                placeholder={
                  formRegisterationDefaultValues.highestEducationSchema ||
                  'Select Highest Education'
                }
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Highest Education</SelectLabel>
                <SelectItem value="twelfth">Twelfth</SelectItem>
                <SelectItem value="graduation">Graduation</SelectItem>
                <SelectItem value="postGraduation">Post Graduation</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <FormMessage>
            {actionData?.errors?.highestEducationSchema}
          </FormMessage>
        </FormItem>

        <FormItem>
          <FormLabel htmlFor="email" error={actionData?.errors?.email}>
            Email
          </FormLabel>
          <Input
            placeholder="john@example.com"
            name="email"
            id="email"
            defaultValue={formRegisterationDefaultValues.email}
          />
          <FormDescription>
            Provide a valid email address for communication.
          </FormDescription>
          <FormMessage>{actionData?.errors?.email}</FormMessage>
        </FormItem>

        <FormItem>
          <FormLabel
            htmlFor="preferedCollege"
            error={actionData?.errors?.preferedCollege}
          >
            Preferred College
          </FormLabel>
          <Input
            placeholder="Preferred College Name"
            name="preferedCollege"
            id="preferedCollege"
            defaultValue={formRegisterationDefaultValues.preferedCollege}
          />
          <FormDescription>
            Enter the name of your preferred college (if applicable).
          </FormDescription>
          <FormMessage>{actionData?.errors?.preferedCollege}</FormMessage>
        </FormItem>

        <FormItem>
          <FormLabel htmlFor="password" error={actionData?.errors?.password}>
            Password
          </FormLabel>
          <Input
            type="password"
            placeholder="********"
            name="password"
            id="password"
            defaultValue={formRegisterationDefaultValues.password}
          />
          <FormDescription>
            Choose a strong password for your account.
          </FormDescription>
          <FormMessage>{actionData?.errors?.password}</FormMessage>
        </FormItem>

        <FormItem>
          <FormLabel
            htmlFor="confirmPassword"
            error={actionData?.errors?.confirmPassword}
          >
            Confirm Password
          </FormLabel>
          <Input
            type="password"
            placeholder="********"
            name="confirmPassword"
            id="confirmPassword"
            defaultValue={formRegisterationDefaultValues.confirmPassword}
          />
          <FormDescription>Confirm your chosen password.</FormDescription>
          <FormMessage>{actionData?.errors?.confirmPassword}</FormMessage>
        </FormItem>

        <Separator />

        <FormItem>
          <FormLabel
            htmlFor="tenthSchool"
            error={actionData?.errors?.tenthSchool}
          >
            Tenth School
          </FormLabel>
          <Input
            placeholder="Tenth School Name"
            name="tenthSchool"
            id="tenthSchool"
            defaultValue={formRegisterationDefaultValues.tenthSchool}
          />
          <FormDescription>
            Enter the name of the school where you completed your tenth grade.
          </FormDescription>
          <FormMessage>{actionData?.errors?.tenthSchool}</FormMessage>
        </FormItem>

        <FormItem>
          <FormLabel
            htmlFor="tenthBoard"
            error={actionData?.errors?.tenthBoard}
          >
            Tenth Board
          </FormLabel>
          <Input
            placeholder="Tenth Board Name"
            name="tenthBoard"
            id="tenthBoard"
            defaultValue={formRegisterationDefaultValues.tenthBoard}
          />
          <FormDescription>
            Enter the name of the board for your tenth-grade examination.
          </FormDescription>
          <FormMessage>{actionData?.errors?.tenthBoard}</FormMessage>
        </FormItem>

        <FormItem>
          <FormLabel
            htmlFor="tenthScore"
            error={actionData?.errors?.tenthScore}
          >
            Tenth Score
          </FormLabel>
          <Input
            placeholder="90"
            name="tenthScore"
            id="tenthScore"
            defaultValue={formRegisterationDefaultValues.tenthScore}
          />
          <FormDescription>
            Enter your tenth-grade score as a percentage.
          </FormDescription>
          <FormMessage>{actionData?.errors?.tenthScore}</FormMessage>
        </FormItem>

        <FormItem>
          <FormLabel
            htmlFor="tenthYearOfPassing"
            error={actionData?.errors?.tenthYearOfPassing}
          >
            Tenth Year of Passing
          </FormLabel>
          <Input
            placeholder="2020"
            name="tenthYearOfPassing"
            id="tenthYearOfPassing"
            defaultValue={formRegisterationDefaultValues.tenthYearOfPassing}
          />
          <FormDescription>
            Enter the year you passed your tenth-grade examination.
          </FormDescription>
          <FormMessage>{actionData?.errors?.tenthYearOfPassing}</FormMessage>
        </FormItem>

        <FormItem>
          <FormLabel
            htmlFor="twelfthScore"
            error={actionData?.errors?.twelfthScore}
          >
            Twelfth Score
          </FormLabel>
          <Input
            placeholder="95"
            name="twelfthScore"
            id="twelfthScore"
            defaultValue={formRegisterationDefaultValues.twelfthScore}
          />
          <FormDescription>
            Enter your twelfth-grade score as a percentage.
          </FormDescription>
          <FormMessage>{actionData?.errors?.twelfthScore}</FormMessage>
        </FormItem>

        <FormItem>
          <FormLabel
            htmlFor="twelfthYearOfPassing"
            error={actionData?.errors?.twelfthYearOfPassing}
          >
            Twelfth Year of Passing
          </FormLabel>
          <Input
            placeholder="2022"
            name="twelfthYearOfPassing"
            id="twelfthYearOfPassing"
            defaultValue={formRegisterationDefaultValues.twelfthYearOfPassing}
          />
          <FormDescription>
            Enter the year you passed your twelfth-grade examination.
          </FormDescription>
          <FormMessage>{actionData?.errors?.twelfthYearOfPassing}</FormMessage>
        </FormItem>

        <Separator />

        <FormItem>
          <FormLabel
            htmlFor="fatherName"
            error={actionData?.errors?.fatherName}
          >
            Father's Name
          </FormLabel>
          <Input
            placeholder="John Doe Sr."
            name="fatherName"
            id="fatherName"
            defaultValue={formRegisterationDefaultValues.fatherName}
          />
          <FormDescription>Enter your father's full name.</FormDescription>
          <FormMessage>{actionData?.errors?.fatherName}</FormMessage>
        </FormItem>

        <FormItem>
          <FormLabel
            htmlFor="fatherPhoneNumber"
            error={actionData?.errors?.fatherPhoneNumber}
          >
            Father's Phone Number
          </FormLabel>
          <Input
            placeholder="9876543210"
            name="fatherPhoneNumber"
            id="fatherPhoneNumber"
            defaultValue={formRegisterationDefaultValues.fatherPhoneNumber}
          />
          <FormDescription>
            Provide a valid 10-digit phone number for your father.
          </FormDescription>
          <FormMessage>{actionData?.errors?.fatherPhoneNumber}</FormMessage>
        </FormItem>

        <FormItem>
          <FormLabel htmlFor="city" error={actionData?.errors?.city}>
            City
          </FormLabel>
          <Input
            placeholder="City Name"
            name="city"
            id="city"
            defaultValue={formRegisterationDefaultValues.city}
          />
          <FormDescription>
            Enter the name of the city where you currently reside.
          </FormDescription>
          <FormMessage>{actionData?.errors?.city}</FormMessage>
        </FormItem>

        <FormItem>
          <FormLabel
            htmlFor="fathersOccupation"
            error={actionData?.errors?.fathersOccupation}
          >
            Father's Occupation
          </FormLabel>
          <Input
            placeholder="Occupation"
            name="fathersOccupation"
            id="fathersOccupation"
            defaultValue={formRegisterationDefaultValues.fathersOccupation}
          />
          <FormDescription>Enter your father's occupation.</FormDescription>
          <FormMessage>{actionData?.errors?.fathersOccupation}</FormMessage>
        </FormItem>

        <FormItem>
          <FormLabel
            htmlFor="annualIncome"
            error={actionData?.errors?.annualIncome}
          >
            Annual Income
          </FormLabel>
          <Input
            type="number"
            placeholder="500000"
            name="annualIncome"
            id="annualIncome"
            defaultValue={formRegisterationDefaultValues.annualIncome}
          />
          <FormDescription>
            Enter your family's annual income in INR.
          </FormDescription>
          <FormMessage>{actionData?.errors?.annualIncome}</FormMessage>
        </FormItem>

        <div className="flex flex-col md:flex-row gap-4">
          <Button type="submit" disabled={isSubmitting}>
            Register
          </Button>
          <Link
            to="/login"
            className={cn(
              buttonVariants({ variant: 'secondary', className: 'text-center' })
            )}
          >
            Login
          </Link>
        </div>
      </fetcher.Form>
    </div>
  );
}
