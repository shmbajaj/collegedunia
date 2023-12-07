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

export interface PageInfoProps {
  pageHeaderCaption: string;
  pageHeaderTitle: string;
  pageHeaderDescription: string;
  pageHeaderTo: string;
  pageHeaderBackgroundImageURL: string;
  pageHeaderBackgroundFallbackColor: string;
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
  ...props
}: React.HTMLAttributes<HTMLDivElement> & PageInfoProps) {
  // TODO: use prop for background image
  const bgImageURLProperty = `bg-[url('https://catalysteducations.com/wp-content/uploads/2022/12/edit-3-1-scaled.jpg')]`;
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
        <div
          className={cn(
            `w-full h-full bg-[${pageHeaderBackgroundFallbackColor}]  bg-no-repeat bg-cover bg-center bg-fixed bg-blend-screen`,
            bgImageURLProperty
          )}
        ></div>
      </section>

      {children}

      <section className="mx-4 my-auto">
        <OurConsultingServices />
      </section>

      <section className="mx-4 my-auto mb-4">
        <GetInTouch showContactInfo></GetInTouch>
      </section>
    </div>
  );
}
