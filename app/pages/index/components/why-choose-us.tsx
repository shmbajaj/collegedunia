import { PageHeaderHeading } from '../../../components/page-header';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from '../../../components/ui/card';
import { cn } from '~/lib/utils';
import { buttonVariants } from '../../../components/ui/button';
import { Link } from '@remix-run/react';

function Description() {
  return (
    <>
      <span className="flex flex-col gap-2">
        <strong>Extensive Experience &nbsp;</strong>
        <span>
          With 14 years of experience, we have honed our expertise in education
          consulting. Our team stays abreast of industry trends and admission
          requirements, providing the most accurate and relevant advice.
        </span>
      </span>
      <span className="flex flex-col gap-2">
        <span>
          <strong>Vast Network &nbsp;</strong>
        </span>
        <span>
          We boast a vast network, connected with 100+ top colleges across
          India. This network enables us to provide our clients with a diverse
          range of options and opportunities.
        </span>
      </span>
      <span className="flex flex-col gap-2">
        <span>
          <strong>Success-driven Strategies &nbsp;</strong>
        </span>
        <span>
          We employ success-driven strategies to ensure our clients stand out in
          the highly competitive admissions landscape. Our consultants work
          collaboratively with you to enhance your application and interview
          skills, increasing your likelihood of admission to your preferred
          program.
        </span>
      </span>
      <span className="flex flex-col gap-2">
        <span>
          <strong>Success Stories &nbsp;</strong>
        </span>
        <span>
          Join the ranks of our successful clients who have achieved admission
          to prestigious programs and institutions. Your success story begins
          with Educom Guidance.
        </span>
      </span>
    </>
  );
}

export function WhyChooseUs({
  description,
  children,
}: {
  description?: string;
  children?: Array<React.ReactElement> | React.ReactElement;
}) {
  return (
    <section className="flex items-center bg-educom p-4 lg:p-8">
      <Card className="p-2 lg:p-8 items-center lg:max-w-3xl md:m-auto">
        <CardHeader>
          <p className="uppercase text-orange-300 font-medium">WHY US</p>
          <PageHeaderHeading className="capitalize">
            Why choose Educom Guidance?
          </PageHeaderHeading>
          <hr className="my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
        </CardHeader>
        <CardDescription
          className={cn('font-medium text-base leading-8 p-4 md:p-8', {
            'grid gap-4 md:grid-cols-2': !description && !children,
          })}
        >
          {description ? description : !children ? <Description /> : null}
          {children}
        </CardDescription>
        <CardFooter className="pt-6">
          <Link
            to="/about-us"
            className={cn(
              buttonVariants({
                variant: 'default',
              })
            )}
          >
            Full Article
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
}
