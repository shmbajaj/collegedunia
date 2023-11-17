import { BookTextIcon, LightbulbIcon, MessageCircleIcon } from "lucide-react";
import { PageHeader, PageHeaderHeading } from "~/components/page-header";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export function WhatWeOffer() {
  return (
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
            <CardTitle className="text-blue-500">GENUINE COUNSELLING</CardTitle>
          </CardHeader>
          <CardDescription>
            <p className="font-medium text-base  leading-8">
              Our team of experienced counselors in India have the expertise to
              provide you with credible, real-time and authentic advice.
            </p>
          </CardDescription>
        </Card>
        <Card className="p-10 grid place-items-center text-center shadow-xl  md:max-w-xs">
          <CardHeader className="items-center gap-4">
            <div className="bg-orange-500 rounded-full p-4 w-24 h-24 pb-4 flex items-center">
              <LightbulbIcon className="text-white w-16 h-16" />
            </div>
            <CardTitle className="text-blue-500">YOUR KNOWLEDGE BANK</CardTitle>
          </CardHeader>
          <CardDescription>
            <p className="font-medium text-base leading-8">
              Access to regular and up-to-date notes, lectures, webinars,
              recorded sessions, daily practice questions, and model test papers
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
              Hand-holding Services right from Registration to Documentation and
              admission-related formalities.
            </p>
          </CardDescription>
        </Card>
      </article>
    </section>
  );
}
