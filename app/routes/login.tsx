import type { MetaFunction } from '@remix-run/react';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '~/components/page-header';

export const meta: MetaFunction = () => {
  return [{ title: 'Login' }];
};

export default function Login() {
  return (
    <div className="container relative">
      <PageHeader>
        <PageHeaderHeading>Login</PageHeaderHeading>
        <PageHeaderDescription>Page Under Development.</PageHeaderDescription>
      </PageHeader>
    </div>
  );
}
