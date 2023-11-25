import type { MetaFunction } from "@remix-run/react";
import { Link } from "@remix-run/react";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "~/components/page-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { buttonVariants } from "~/components/ui/button";
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { cn } from "~/lib/utils";

export const meta: MetaFunction = () => {
  return [
    { title: "Engineering Admissions" },
    {
      name: "description",
      content: "Get Admission in Engineering",
    },
  ];
};

export default function EngineeringAdmissions() {
  return (
    <div className="relative">
      <section className="relative h-[580px]">
        <PageHeader className="pb-8 absolute top-16 left-4 md:left-28 z-40 w-full max-w-lg ">
          <p className="capitalize font-bold">
            PROFESSIONAL EDUCATION CONSULTING
          </p>
          <PageHeaderHeading className="capitalize">
            ENGINEERING ADMISSIONS
          </PageHeaderHeading>
          <PageHeaderDescription className="text-white">
            Engineering is one of the most preferred courses. Around 35-45 lakh
            people enroll in one or the other B Tech course every year.Know how
            to apply for engineering admissions.
          </PageHeaderDescription>
          <div className="w-full flex items-center space-x-4 pb-8 pt-4 md:pb-10">
            <Link
              to="services"
              className={cn(
                buttonVariants({ variant: "outline", className: "text-center" })
              )}
            >
              Apply Now
            </Link>
          </div>
        </PageHeader>
        {/* TODO: replace image url with own asset url */}
        <div className="w-full h-full bg-[#0C71C3] bg-[url('https://catalysteducations.com/wp-content/uploads/2022/12/edit-3-1-scaled.jpg')] bg-no-repeat bg-cover bg-center bg-fixed bg-blend-screen"></div>
      </section>
      <section className="flex flex-col items-center pb-8">
        <PageHeader className="pb-8 items-center">
          <p className="uppercase text-center font-bold text-orange-500">
            TYPES OF ENGINEERING COURSES
          </p>
          <PageHeaderHeading className="capitalize text-center md:text-left">
            Engineering Branches
          </PageHeaderHeading>
          <PageHeaderDescription>
            Section Under Development
          </PageHeaderDescription>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
        </PageHeader>
        {/* TODO: use carousel */}
      </section>
      <section className="flex flex-col items-center pb-8">
        <PageHeader className="pb-8 items-center">
          <p className="uppercase text-center font-bold text-orange-500">
            Entrance Exams
          </p>
          <PageHeaderHeading className="capitalize text-center md:text-left">
            Engineering Entrance Exams
          </PageHeaderHeading>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
        </PageHeader>
        <div className="container grid gap-4 md:grid-cols-2 max-w-5xl">
          <div>
            {" "}
            {Array.from({ length: 3 }).map((_, index) => (
              <Card className="flex-col text-base mb-4" key={index}>
                <CardContent className="flex gap-4 bg-gray-100/50 text-center p-4 font-semibold">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-blue-500 capitalize">
                      JEE Advance
                    </div>
                    <div className="text-gray-500 leading-8">
                      The Joint Entrance Examination Advanced (JEE-Advanced) is
                      an entrance exam which is conducted by the Indian
                      Institute of Technology (IITs) on all-India level
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-white w-full px-6 py-0">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full border-b-0"
                  >
                    <AccordionItem
                      value={`item-${index}`}
                      className="border-b-0"
                    >
                      <AccordionTrigger>Learn More</AccordionTrigger>
                      <AccordionContent className="grid gap-4 text-base text-gray-500">
                        <p>
                          The exam qualifies candidates for admission in various
                          prestigious engineering colleges across India.
                          Previously known as IIT-JEE, it was renamed in 2013
                          and since then, it has been administered and regulated
                          by the seven branches of IITs (Roorkee, Kharagpur,
                          Delhi, Bombay, Kanpur, Madras and Guwahati). It
                          consists of two papers with questions drawn from
                          Physics, Chemistry, Mathematics and a Architecture
                          Aptitude Test (AAT) for candidates aspiring to enroll
                          in an architecture course
                        </p>
                        <p>
                          <strong>Age:</strong> Should’ve appeared in Higher
                          Secondary in 2019, 2020, and 2021
                        </p>
                        <p>
                          <strong>Qualification:</strong> At least 75% marks in
                          10+2
                        </p>
                        <p>
                          <strong>Compulsory Subjects:</strong> Physics and
                          Chemistry, along with English, Mathematics, and an
                          optional subject
                        </p>
                        <p>
                          <strong>Number Of Attempts:</strong> 2
                        </p>
                        <p>
                          <strong>Subjects In Paper:</strong> Physics,
                          Chemistry, Maths, and AAT (Architecture Aptitude Test)
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div>
            {Array.from({ length: 3 }).map((_, index) => (
              <Card className="flex-col text-base mb-4" key={index}>
                <CardContent className="flex gap-4 bg-gray-100/50 text-center p-4 font-semibold">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-blue-500 capitalize">
                      JEE Advance
                    </div>
                    <div className="text-gray-500 leading-8">
                      The Joint Entrance Examination Advanced (JEE-Advanced) is
                      an entrance exam which is conducted by the Indian
                      Institute of Technology (IITs) on all-India level
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-white w-full px-6 py-0">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full border-b-0"
                  >
                    <AccordionItem
                      value={`item-${index}`}
                      className="border-b-0"
                    >
                      <AccordionTrigger>Learn More</AccordionTrigger>
                      <AccordionContent className="grid gap-4 text-base text-gray-500">
                        <p>
                          The exam qualifies candidates for admission in various
                          prestigious engineering colleges across India.
                          Previously known as IIT-JEE, it was renamed in 2013
                          and since then, it has been administered and regulated
                          by the seven branches of IITs (Roorkee, Kharagpur,
                          Delhi, Bombay, Kanpur, Madras and Guwahati). It
                          consists of two papers with questions drawn from
                          Physics, Chemistry, Mathematics and a Architecture
                          Aptitude Test (AAT) for candidates aspiring to enroll
                          in an architecture course
                        </p>
                        <p>
                          <strong>Age:</strong> Should’ve appeared in Higher
                          Secondary in 2019, 2020, and 2021
                        </p>
                        <p>
                          <strong>Qualification:</strong> At least 75% marks in
                          10+2
                        </p>
                        <p>
                          <strong>Compulsory Subjects:</strong> Physics and
                          Chemistry, along with English, Mathematics, and an
                          optional subject
                        </p>
                        <p>
                          <strong>Number Of Attempts:</strong> 2
                        </p>
                        <p>
                          <strong>Subjects In Paper:</strong> Physics,
                          Chemistry, Maths, and AAT (Architecture Aptitude Test)
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
