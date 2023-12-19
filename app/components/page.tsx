import { Link } from '@remix-run/react';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '~/components/page-header';
import { buttonVariants } from '~/components/ui/button';
import { cn } from '~/lib/utils';
import { GetInTouch } from '~/pages/index/components/get-in-touch';
import { OurConsultingServices } from '~/pages/index/components/our-consulting-services';
import type { TestimonialsProps } from '~/pages/index/components/testimonials';
import { Testimonials } from '~/pages/index/components/testimonials';
import { WhyChooseUs } from '~/pages/index/components/why-choose-us';

export interface PageInfoProps extends TestimonialsProps {
  pageHeaderCaption: string;
  pageHeaderTitle: string;
  pageHeaderDescription: string;
  pageHeaderTo: string;
  pageHeaderBackgroundImageURL: string;
  pageHeaderBackgroundFallbackColor: string;
  showDescription?: boolean;
}

export function Page({
  pageHeaderCaption,
  pageHeaderTitle,
  pageHeaderDescription,
  pageHeaderTo,
  pageHeaderBackgroundImageURL,
  pageHeaderBackgroundFallbackColor,
  children,
  className,
  testimonials,
  showDescription = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & PageInfoProps) {
  return (
    <div className={cn('relative', className)} {...props}>
      <section className="relative h-[580px]">
        <PageHeader className="pb-8 absolute top-16 left-4 md:left-28 z-40 w-full max-w-lg ">
          <p className="capitalize font-bold">{pageHeaderCaption}</p>
          <PageHeaderHeading className="capitalize">
            {pageHeaderTitle}
          </PageHeaderHeading>
          <PageHeaderDescription className="text-white">
            {pageHeaderDescription}
          </PageHeaderDescription>
          <div className="w-full flex items-center space-x-4 pb-8 pt-4 md:pb-10">
            <Link
              to={pageHeaderTo}
              className={cn(
                buttonVariants({ variant: 'outline', className: 'text-center' })
              )}
            >
              Apply Now
            </Link>
          </div>
        </PageHeader>
        <div className="w-full h-full relative">
          <img
            src={pageHeaderBackgroundImageURL}
            alt="PageHeader Background"
            className={cn(
              'w-full h-full object-cover object-center absolute top-0 left-0'
            )}
          />
          <div
            className={cn(
              'w-full h-full absolute top-0 left-0 bg-blend-screen bg-opacity-50',
              `bg-[${pageHeaderBackgroundFallbackColor}]`
            )}
          ></div>
        </div>
      </section>

      {children}

      <section className="mx-4 my-auto">
        <WhyChooseUs />
      </section>

      <section className="mx-4 my-auto">
        <Testimonials testimonials={testimonials} />
      </section>

      <section className="mx-4 my-auto">
        <OurConsultingServices showDescription={showDescription} />
      </section>

      <section className="mx-4 my-auto mb-4">
        <GetInTouch showContactInfo></GetInTouch>
      </section>
    </div>
  );
}
