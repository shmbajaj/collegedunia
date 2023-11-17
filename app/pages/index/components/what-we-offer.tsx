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
    <section className="flex flex-col items-center pb-8 bg-blue-500">
      <PageHeader className="pb-8 items-center">
        <p className="uppercase text-center text-orange-300 font-medium">
          Offer
        </p>
        <PageHeaderHeading className="capitalize text-white">
          What We Offer
        </PageHeaderHeading>
        <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
      </PageHeader>
      <article className="flex flex-col lg:flex-row max-w-lg gap-4 lg:gap-8 p-4 lg:px-8 lg:py-4 lg:max-w-5xl">
        <Card className="p-4 flex flex-col text-center shadow-md lg:mt-10 lg:mb-10 lg:p-6">
          <CardHeader className="items-center gap-4">
            <div className="bg-orange-500 rounded-full p-4 w-20 h-20 pb-4 flex items-center">
              <MessageCircleIcon className="text-white w-12 h-12" />
            </div>
            <CardTitle className="text-blue-500">GENUINE COUNSELLING</CardTitle>
          </CardHeader>
          <CardDescription>
            <p className="font-medium text-base leading-8">
              Our team of experienced counselors in India have the expertise to
              provide you with credible, real-time and authentic advice.
            </p>
          </CardDescription>
        </Card>
        <Card className="p-4 flex flex-col text-center shadow-xl lg:p-6">
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
        <Card className="p-4 flex flex-col text-center shadow-md lg:mt-10 lg:mb-10 lg:p-6">
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
