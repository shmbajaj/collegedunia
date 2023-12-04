import type { ActionFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import type { MetaFunction } from '@remix-run/react';
import {
  FormDirectAdmission,
  type FormDirectAdmissionInput,
} from '~/components/form-direct-admission';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '~/components/page-header';
import { FormDirectAdmissionSchema } from '~/data/schema';
import { validationAction } from '~/lib/utils';

export const meta: MetaFunction = () => {
  return [{ title: 'Direct Admission' }];
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const { data, errors } = await validationAction<FormDirectAdmissionInput>({
    request,
    schema: FormDirectAdmissionSchema,
  });
  if (errors) {
    return json({ errors });
  }
  return json({ data });
};

export default function DirectAdmission() {
  return (
    <div className="container relative mb-8 flex flex-col items-center justify-center gap-8">
      <PageHeader className="pb-8 items-center">
        <p className="capitalize font-bold text-orange-500">
          DON’T SETTLE FOR LESS
        </p>
        <PageHeaderHeading className="capitalize">
          Direct Admission
        </PageHeaderHeading>
        <PageHeaderDescription className="leading-8 text-center">
          Catalyst Education is a prominent{' '}
          <strong>direct admission consultant</strong> that offers direct
          admission to colleges in{' '}
          <strong>
            India especially in Pune, Mumbai, and other colleges of Maharashtra
          </strong>
          through institute level empty seats or management quota seats. We also
          facilitate direct admission for NRI quota admission seats. With years
          of experience, we have successfully placed numerous students in the
          right institutions by providing reliable methodologies and
          cost-effective services. Our team provides admission assistance,
          guidance, and counseling for top colleges and universities in India
          and abroad, particularly when finding the right place for admission
          within a short period seems challenging.
        </PageHeaderDescription>
      </PageHeader>

      <h2 className="text-xl leading-tight tracking-tighter md:text-2xl lg:leading-[1.1] mb-8 text-center">
        Fill in the following form with your details to apply for direct
        admissions to your Dream College.
      </h2>

      <FormDirectAdmission />
    </div>
  );
}
