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
import thumbnail from '~/images/educom-home-page-article.jpeg';

const defaultDescription = `Choose Educom Guidance for our 14 years of extensive education
consulting experience. Our expertise ensures accurate advice,
keeping up with industry trends and admission requirements.
Connected to 100+ top Indian colleges, we provide diverse
opportunities. Success-driven strategies enhance your application,
interview skills, and admission prospects. Collaborate with our
consultants to join successful clients in prestigious programs. Your
Educom Guidance journey begins your success story.`;

export function WhyChooseUs({
  description,
  children,
}: {
  description?: string;
  children?: Array<React.ReactElement> | React.ReactElement;
}) {
  return (
    <section className="flex items-center bg-educom p-4 lg:p-8">
      <div className="flex flex-col lg:flex-row gap-8 m-auto">
        <Card className="p-2 lg:p-8 items-center lg:max-w-md md:m-auto">
          <CardHeader>
            <p className="uppercase text-orange-300 font-medium">WHY US</p>
            <PageHeaderHeading className="capitalize">
              Why choose Educom Guidance?
            </PageHeaderHeading>
            <hr className="my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
          </CardHeader>
          <CardDescription className="font-medium text-base leading-8 p-4 md:p-8">
            {description ? description : !children ? defaultDescription : null}
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
        <div className="lg:max-w-md">
          <img src={thumbnail} alt="Why Choose Us Article Thumbnail" />
        </div>
      </div>
    </section>
  );
}
