import type { MetaFunction } from '@remix-run/react';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '~/components/page-header';

export const meta: MetaFunction = () => {
  return [{ title: 'Direct Admission' }];
};

export default function DirectAdmission() {
  return (
    <div className="container relative">
      <PageHeader className="pb-8">
        <p className="capitalize font-bold text-orange-500">
          DON’T SETTLE FOR LESS
        </p>
        <PageHeaderHeading className="capitalize">
          Direct Admission
        </PageHeaderHeading>
        <PageHeaderDescription>
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
    </div>
  );
}
