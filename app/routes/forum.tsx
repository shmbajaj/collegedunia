import type { MetaFunction } from '@remix-run/react';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '~/components/page-header';

export const meta: MetaFunction = () => {
  return [{ title: 'Forum' }];
};

export default function Forum() {
  return (
    <div className="container relative">
      <PageHeader className="pb-8">
        <PageHeaderHeading className="capitalize">Forum</PageHeaderHeading>
        <PageHeaderDescription>Page Under Development</PageHeaderDescription>
      </PageHeader>
    </div>
  );
}
