import { Link } from "@remix-run/react";
import { BookTextIcon, LightbulbIcon, MessageCircleIcon } from "lucide-react";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "~/components/page-header";
import { Testimonials } from "~/components/testimonials";
import { buttonVariants } from "~/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { cn } from "~/lib/utils";

export default function Index() {
  return (
    <div className="container relative">
      <section className="relative h-[580px]">
        <PageHeader className="pb-8 absolute top-16 right-1 z-40 w-full max-w-lg ">
          <p className="capitalize">PROFESSIONAL EDUCATION CONSULTING</p>
          <PageHeaderHeading className="capitalize">
            TAKE YOUR FUTURE TO NEW HEIGHTS
          </PageHeaderHeading>
          <div className="w-full flex items-center space-x-4 pb-8 pt-4 md:pb-10">
            <Link to="#" className={cn(buttonVariants())}>
              Get Started
            </Link>
            <Link to="#" className={cn(buttonVariants({ variant: "outline" }))}>
              Learn More
            </Link>
          </div>
        </PageHeader>
        <div className="absolute w-full h-full top-0 left-0 bg-slate-500 bg-[url('https://catalysteducations.com/wp-content/uploads/2022/12/edit2-scaled.jpg')] bg-no-repeat bg-cover bg-center bg-fixed"></div>
      </section>
      <section className="flex flex-col items-center pb-8">
        <PageHeader className="pb-8 items-center">
          <p className="uppercase text-center text-orange-500">
            Don’t Settle For Less
          </p>
          <PageHeaderHeading className="capitalize">
            Our Consulting Services
          </PageHeaderHeading>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
          <PageHeaderDescription className="leading-8 text-center">
            Catalyst Education Consultancy is one of the{" "}
            <strong>Leading Direct Admission Consultant</strong> in Pune, Mumbai
            and all over India. We provide direct admission in Colleges in Pune,
            Mumbai through institute level empty seats or the management quota
            seats. We also help in{" "}
            <strong>direct admissions for NRI Quota Admissions Seats.</strong>{" "}
            With our rich experience and dependable methodologies combined with
            cost-adequacy we have made incredible progress in putting the
            correct student to the correct institution. We provide admission
            assistance, guidance, and counseling for top colleges and
            universities in India and abroad.
          </PageHeaderDescription>
        </PageHeader>
        <article className="flex flex-col md:flex-row">
          <Card className="bg-orange-500 p-10 grid place-items-center text-center shadow-md md:mt-10 md:mb-10 md:max-w-xs">
            <CardHeader>
              <CardTitle className="text-white">Management Admission</CardTitle>
            </CardHeader>
            <CardDescription>
              <p className="font-medium text-base text-white leading-8">
                The management field continues to be one of the most
                sought-after fields in India, if not the most sought-after. This
                makes the Medical Courses all the more important.
              </p>
            </CardDescription>
            <CardFooter className="pt-6">
              <Link
                to="#"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                Learn More
              </Link>{" "}
            </CardFooter>
          </Card>
          <Card className="p-10 grid place-items-center text-center shadow-xl  md:max-w-xs">
            <CardHeader>
              <CardTitle>Engineering Admission</CardTitle>
            </CardHeader>
            <CardDescription>
              <p className="font-medium text-base text-black leading-8">
                Around 35-45 lakh people enrol in B Tech courses every year.
                This leads to increased competition for courses as well as
                confusion regarding the Engineering course in India.
              </p>
            </CardDescription>
            <CardFooter className="pt-6">
              <Link
                to="#"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                Learn More
              </Link>{" "}
            </CardFooter>
          </Card>
          <Card className="bg-blue-500 p-10 grid place-items-center text-center shadow-md md:mt-10 md:mb-10 md:max-w-xs">
            <CardHeader>
              <CardTitle className="text-white">Medical Admission</CardTitle>
            </CardHeader>
            <CardDescription>
              <p className="font-medium text-base text-white leading-8">
                Every year, thousands of students across the country vie for
                admissions into medical schools in India. Hence the Competition
                for getting into a medical program is high.
              </p>
            </CardDescription>
            <CardFooter className="pt-6">
              <Link
                to="#"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                Learn More
              </Link>{" "}
            </CardFooter>
          </Card>
        </article>
      </section>
      <section className="flex flex-col items-center bg-blue-500 pt-24 pb-8">
        <PageHeader className="pb-8 items-center">
          <p className="uppercase text-center text-orange-300 font-medium">
            Offer
          </p>
          <PageHeaderHeading className="capitalize text-white">
            What We Offer
          </PageHeaderHeading>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
        </PageHeader>
        <article className="flex flex-col gap-4 md:gap-8 md:flex-row p-20 md:p-24">
          <Card className="p-10 grid place-items-center text-center shadow-md md:mt-10 md:mb-10 md:max-w-xs">
            <CardHeader className="items-center gap-4">
              <div className="bg-orange-500 rounded-full p-4 w-20 h-20 pb-4 flex items-center">
                <MessageCircleIcon className="text-white w-12 h-12" />
              </div>
              <CardTitle className="text-blue-500">
                GENUINE COUNSELLING
              </CardTitle>
            </CardHeader>
            <CardDescription>
              <p className="font-medium text-base  leading-8">
                Our team of experienced counselors in India have the expertise
                to provide you with credible, real-time and authentic advice.
              </p>
            </CardDescription>
          </Card>
          <Card className="p-10 grid place-items-center text-center shadow-xl  md:max-w-xs">
            <CardHeader className="items-center gap-4">
              <div className="bg-orange-500 rounded-full p-4 w-24 h-24 pb-4 flex items-center">
                <LightbulbIcon className="text-white w-16 h-16" />
              </div>
              <CardTitle className="text-blue-500">
                YOUR KNOWLEDGE BANK
              </CardTitle>
            </CardHeader>
            <CardDescription>
              <p className="font-medium text-base leading-8">
                Access to regular and up-to-date notes, lectures, webinars,
                recorded sessions, daily practice questions, and model test
                papers
              </p>
            </CardDescription>
          </Card>
          <Card className=" p-10 grid place-items-center text-center shadow-md md:mt-10 md:mb-10 md:max-w-xs">
            <CardHeader className="items-center gap-4">
              <div className="bg-orange-500 rounded-full p-4 w-20 h-20 pb-4 flex items-center">
                <BookTextIcon className="text-white w-12 h-12" />
              </div>
              <CardTitle className="text-blue-500">
                ADMISSION & MANAGEMENT QUOTA ASSISTANCE
              </CardTitle>
            </CardHeader>
            <CardDescription>
              <p className="font-medium text-base leading-8">
                Hand-holding Services right from Registration to Documentation
                and admission-related formalities.
              </p>
            </CardDescription>
          </Card>
        </article>
      </section>
      <Testimonials />
    </div>
  );
}
