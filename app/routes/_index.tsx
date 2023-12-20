import { Link } from '@remix-run/react';
import { GetInTouch } from '~/pages/index/components/get-in-touch';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '~/components/page-header';
import { Stats } from '~/pages/index/components/stats';
import { Testimonials } from '~/pages/index/components/testimonials';
import { buttonVariants } from '~/components/ui/button';
import { WhatWeOffer } from '~/pages/index/components/what-we-offer';
import { WhyChooseUs } from '~/pages/index/components/why-choose-us';
import { cn, validationAction } from '~/lib/utils';
import { json, type ActionFunctionArgs } from '@remix-run/node';
import { GetInTouchFormSchema } from '~/data/schema';
import type { GetInTouchFormInput } from '~/pages/index/components/get-in-touch-form';
import homePageHeader from 'app/images/educom-home-page-pageheader.jpeg';
import { homePageTestimonials } from '~/data/testimonials.data';
import thumbnail from '~/images/educom-home-page-article.jpeg';

export const action = async ({ request }: ActionFunctionArgs) => {
  const { data, errors } = await validationAction<GetInTouchFormInput>({
    request,
    schema: GetInTouchFormSchema,
  });
  if (errors) {
    return json({ errors });
  }
  return json({ data });
};

export default function Index() {
  return (
    <div className="container relative mb-8">
      <section className="relative h-[580px]">
        <PageHeader className="pb-8 absolute top-16 right-1 z-40 w-full max-w-lg ">
          <p className="capitalize">TAKE YOUR FUTURE TO NEW HEIGHTS</p>
          <PageHeaderHeading className="capitalize">
            Explore expert education consultants for personalized guidance
          </PageHeaderHeading>
          <div className="w-full flex items-center space-x-4 pb-8 pt-4 md:pb-10">
            <Link
              to="/contact-us"
              className={cn(buttonVariants({ className: 'text-center' }))}
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className={cn(
                buttonVariants({ variant: 'outline', className: 'text-center' })
              )}
            >
              Learn More
            </Link>
          </div>
        </PageHeader>
        <div className="relative w-full h-full">
          <img
            src={homePageHeader}
            alt="Page Header Background"
            className="w-full h-full object-cover object-center absolute top-0 left-0"
          />
          <div className="w-full h-full absolute top-0 left-0 bg-blend-screen bg-opacity-30 bg-slate-500"></div>
        </div>
      </section>
      <section className="flex flex-col items-center text-center lg:flex-row gap-8 m-auto">
        <PageHeader className="pb-8 items-center">
          <PageHeaderHeading className="capitalize  md:text-left  text-center font-bold text-orange-500">
            About Us
          </PageHeaderHeading>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
          <PageHeaderDescription className="flex flex-col gap-2">
            <span>
              Unlock academic success with our expert education consultants! Our
              dedicated team provides personalized guidance for your educational
              journey
            </span>
            <span>
              Welcome to Educom Guidance, your trusted partner in education
              consulting services! We understand that navigating the educational
              landscape can be complex, and that's where our experienced
              education consultants come in to simplify the process and guide
              you towards success. Whether you're a student aspiring to pursue
              higher education, a parent seeking the best educational
              opportunities for your child, or an institution aiming to enhance
              academic excellence, our team of expert education consultants is
              here to support you every step of the way.
            </span>
            <span>
              education consulting services with a rich legacy of 14 years of
              experience. Specializing in MBA consultation, engineering
              consultation, and medical admission consultation, we are dedicated
              to ensuring that aspiring students achieve their academic and
              professional goals. What sets us apart is our extensive network,
              as we are connected with 100+ top colleges across India.
            </span>
          </PageHeaderDescription>
        </PageHeader>
        <div className="lg:max-w-md">
          <img src={thumbnail} alt="Why Choose Us Article Thumbnail" />
        </div>
      </section>
      <WhatWeOffer />
      <Testimonials testimonials={homePageTestimonials} />
      <WhyChooseUs />
      <Stats />
      <GetInTouch showContactInfo></GetInTouch>
    </div>
  );
}
