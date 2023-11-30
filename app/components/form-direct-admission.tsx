import { useFetcher } from '@remix-run/react';
import React, { useRef } from 'react';
import type * as z from 'zod';
import type { FormDirectAdmissionSchema } from '~/data/schema';
import { cn } from '~/lib/utils';
import type { ActionErrors } from '~/types/validation-action';
import { toast } from './ui/use-toast';
import { Button } from './ui/button';

export type FormDirectAdmissionInput = z.infer<
  typeof FormDirectAdmissionSchema
>;

export interface FormDirectAdmissionActionData {
  errors?: ActionErrors<FormDirectAdmissionInput>;
  data?: FormDirectAdmissionInput;
}

const formDirectAdmissionDefaultValues: FormDirectAdmissionInput = {
  courseLookingFor: [],
  name: '',
  phoneNumber: '',
  fatherName: '',
  fatherPhoneNumber: '',
  email: '',
  collegePreferedLocation: '',
  preferedCollege: '',
  tenthScore: '',
  twelfthScore: '',
  yearOfPassing: '',
  majorSubject: '',
};

export function FormDirectAdmission({
  className,
  ...props
}: React.HTMLAttributes<HTMLFormElement>) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const fetcher = useFetcher<FormDirectAdmissionActionData>();

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
    <fetcher.Form
      {...props}
      method="post"
      className={cn('space-y-8', className)}
      ref={formRef}
    >
      <div className={'flex flex-col w-full max-w-sm  gap-1.5'}>
        <Button type="submit" disabled={isSubmitting}>
          Submit
        </Button>
      </div>
    </fetcher.Form>
  );
}
