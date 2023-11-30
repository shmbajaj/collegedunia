import type { MetaFunction } from "@remix-run/react";
import { Link } from "@remix-run/react";
import { WalletIcon } from "lucide-react";
import { Carousel } from "~/components/carousel";
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
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { cn } from "~/lib/utils";
import { GetInTouch } from "~/pages/index/components/get-in-touch";
import { OurConsultingServices } from "~/pages/index/components/our-consulting-services";

export const meta: MetaFunction = () => {
  return [
    { title: 'Management Admissions' },
    {
      name: 'description',
      content: 'Get Admission in Management',
    },
  ];
};

export default function ManagementAdmissions() {
  return (
    <div className="relative">
      <section className="relative h-[580px]">
        <PageHeader className="pb-8 absolute top-16 left-4 md:left-28 z-40 w-full max-w-lg ">
          <p className="capitalize font-bold">OUR SERVICES</p>
          <PageHeaderHeading className="capitalize">
            MANAGEMENT ADMISSIONS
          </PageHeaderHeading>
          <PageHeaderDescription className="text-white">
            Management admissions have become increasingly popular. With the
            rise of startups, multinational companies and conglomerates,
            employers are seeking qualified professionals with management
            experience to help navigate their growing operations.
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
        <div className="w-full h-full bg-[#0C71C3] bg-[url('https://catalysteducations.com/wp-content/uploads/2022/12/h123-scaled.jpg')] bg-no-repeat bg-cover bg-center bg-fixed bg-blend-screen"></div>
      </section>

      <section className="flex flex-col items-center pb-8">
        <PageHeader className="pb-8 items-center">
          <p className="uppercase text-center font-bold text-orange-500">
            Branches
          </p>
          <PageHeaderHeading className="capitalize text-center md:text-left">
            Streams Of Specialization in Management
          </PageHeaderHeading>
          <PageHeaderDescription>
            Section Under Development
          </PageHeaderDescription>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
        </PageHeader>
        <Carousel className="max-w-[320px] h-[650px] md:h-[612px]">
          {Array.from({ length: 10 }).map((_, index) => (
            <Card className="border-2 border-[#0C71C3] w-full" key={index}>
              <CardHeader className="relative h-44 p-0">
                <div className="w-full h-full bg-[#0C71C3] bg-[url('https://catalysteducations.com/wp-content/uploads/2022/12/edit-3-1-scaled.jpg')] bg-no-repeat bg-cover bg-center"></div>
              </CardHeader>
              <CardContent className="p-2">
                <p className="uppercase text-center font-bold text-orange-500">
                  Telecommunications Engineering {index}
                </p>
                <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-black md:my-4" />
                <p className="leading-8">
                  Telecommunications engineering is an intersection of
                  electrical and computer engineering, providing students the
                  practical knowledge to work on the interconnections between
                  networks, telecom systems and cyberspace. With learning about
                  these components, graduates of telecommunications engineering
                  are capable of working in a variety of fields.
                </p>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </section>

      <section className="flex flex-col items-center pb-8 bg-blue-100">
        <PageHeader className="pb-8 items-center">
          <p className="uppercase text-center font-bold text-orange-500">
            Courses
          </p>
          <PageHeaderHeading className="capitalize text-center md:text-left">
            Types of Management Courses
          </PageHeaderHeading>
          <PageHeaderDescription>
            Section Under Development
          </PageHeaderDescription>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
        </PageHeader>
        <Carousel className="max-w-[320px] h-[650px] md:h-[612px]">
          {Array.from({ length: 10 }).map((_, index) => (
            <Card className="border-2 border-[#0C71C3] w-full" key={index}>
              <CardHeader className="relative h-44 p-0">
                <div className="w-full h-full bg-[#0C71C3] bg-[url('https://catalysteducations.com/wp-content/uploads/2022/12/edit-3-1-scaled.jpg')] bg-no-repeat bg-cover bg-center"></div>
              </CardHeader>
              <CardContent className="p-2">
                <p className="uppercase text-center font-bold text-orange-500">
                  Telecommunications Engineering {index}
                </p>
                <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-black md:my-4" />
                <p className="leading-8">
                  Telecommunications engineering is an intersection of
                  electrical and computer engineering, providing students the
                  practical knowledge to work on the interconnections between
                  networks, telecom systems and cyberspace. With learning about
                  these components, graduates of telecommunications engineering
                  are capable of working in a variety of fields.
                </p>
              </CardContent>
            </Card>
          ))}
        </Carousel>{" "}
      </section>

      <section className="flex flex-col items-center pb-8">
        <PageHeader className="pb-8 items-center">
          <p className="uppercase text-center font-bold text-orange-500">
            SCOPE
          </p>
          <PageHeaderHeading className="capitalize text-center md:text-left">
            Scope of Management
          </PageHeaderHeading>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
          <PageHeaderDescription className="flex flex-col gap-4">
            <span>
              When it comes to career options after pursuing these courses,
              there’s really no limit! An MBA can open up many doors for
              students in fields like Finance, Operations, Human Resources, and
              Marketing. With an MBA degree, there are many different roles that
              one could take on such as Business Development Manager, Financial
              Manager or Event Manager. The average salary for such roles lies
              between INR 7-9 lakhs per annum in India. It goes without saying
              that with an esteemed degree from a top management college in
              India – your career prospects are truly limitless!
            </span>
            <span>
              An estimate of the average salaries in the top managerial fields
              are mentioned below: –
            </span>
          </PageHeaderDescription>
        </PageHeader>
      </section>

      <section className="bg-blue-100 p-8 flex flex-col md:flex-row flex-wrap gap-8">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            className="cursor-pointer group perspective bg-white w-52 h-52 p-4"
            key={index}
          >
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              <div className="absolute backface-hidden w-full h-full">
                <div className="w-full h-full bg-[#0C71C3] bg-[url('https://catalysteducations.com/wp-content/uploads/2022/12/edit-3-1-scaled.jpg')] bg-no-repeat bg-cover bg-center"></div>
                <p className="capitalize text-center font-medium text-base text-orange-500">
                  Marketing Management
                </p>
              </div>
              <div className="absolute my-rotate-y-180 backface-hidden w-full h-full overflow-hidden flex flex-col items-center justify-center">
                <WalletIcon />
                <span className="uppercase text-center font-bold">
                  Rs. 354,123
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="flex flex-col items-center pb-8">
        <PageHeader className="pb-8 items-center">
          <p className="uppercase text-center font-bold text-orange-500">
            TOP COLLEGES
          </p>
          <PageHeaderHeading className="capitalize text-center md:text-left">
            Best Management Colleges In India
          </PageHeaderHeading>
          <PageHeaderDescription>
            Section Under Development
          </PageHeaderDescription>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
        </PageHeader>
        <Carousel className="max-w-[320px] h-[650px] md:h-[612px]">
          {Array.from({ length: 10 }).map((_, index) => (
            <Card className="border-2 border-[#0C71C3] w-full" key={index}>
              <CardHeader className="relative h-44 p-0">
                <div className="w-full h-full bg-[#0C71C3] bg-[url('https://catalysteducations.com/wp-content/uploads/2022/12/edit-3-1-scaled.jpg')] bg-no-repeat bg-cover bg-center"></div>
              </CardHeader>
              <CardContent className="p-2">
                <p className="uppercase text-center font-bold text-orange-500">
                  Telecommunications Engineering {index}
                </p>
                <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-black md:my-4" />
                <p className="leading-8">
                  Telecommunications engineering is an intersection of
                  electrical and computer engineering, providing students the
                  practical knowledge to work on the interconnections between
                  networks, telecom systems and cyberspace. With learning about
                  these components, graduates of telecommunications engineering
                  are capable of working in a variety of fields.
                </p>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </section>

      <section className="flex flex-col items-center pb-8">
        <PageHeader className="pb-8 items-center">
          <p className="uppercase text-center font-bold text-orange-500">
            Entrance Exams
          </p>
          <PageHeaderHeading className="capitalize text-center md:text-left">
            Management Entrance Exams{" "}
          </PageHeaderHeading>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
        </PageHeader>
        <div className="container grid md:gap-4 md:grid-cols-2 max-w-5xl">
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

      <section className="flex flex-col items-center pb-8">
        <PageHeader className="pb-8 items-center">
          <p className="uppercase text-center font-bold text-orange-500">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <PageHeaderHeading className="capitalize text-center md:text-left">
            FAQS
          </PageHeaderHeading>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
        </PageHeader>
        <div className="container grid md:gap-4 md:grid-cols-2 max-w-5xl">
          <div>
            {Array.from({ length: 3 }).map((_, index) => (
              <Accordion
                type="single"
                collapsible
                className="w-full border-[1px] border-gray-300 mb-4"
                key={index}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border-b-0 data-[state=open]:bg-gray-100 p-2"
                >
                  <AccordionTrigger>
                    {` Q${index + 1}. Is it worth pursuing engineering?`}
                  </AccordionTrigger>
                  <AccordionContent className="grid gap-4 text-base text-gray-500">
                    Yes, engineering is worth it! Engineers are in high demand
                    and have great career prospects. An engineering degree can
                    open up many opportunities in a diverse range of
                    professions. A degree in engineering typically leads to
                    higher salary and job satisfaction along with the chance for
                    professional growth and development.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
          <div>
            {Array.from({ length: 3 }).map((_, index) => (
              <Accordion
                type="single"
                collapsible
                className="w-full border-[1px] border-gray-300 mb-4"
                key={index}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border-b-0 data-[state=open]:bg-gray-100 p-2"
                >
                  <AccordionTrigger>
                    {` Q${index + 1}. Is it worth pursuing engineering?`}
                  </AccordionTrigger>
                  <AccordionContent className="grid gap-4 text-base text-gray-500">
                    Yes, engineering is worth it! Engineers are in high demand
                    and have great career prospects. An engineering degree can
                    open up many opportunities in a diverse range of
                    professions. A degree in engineering typically leads to
                    higher salary and job satisfaction along with the chance for
                    professional growth and development.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-4 my-auto">
        <OurConsultingServices />
      </section>

      <section className="mx-4 my-auto mb-4">
        <GetInTouch>
          <div className="p-4 lg:p-12 bg-blue-500 border-t-8 border-orange-500 text-white flex flex-col gap-2 text-center font-semibold h-max">
            <span>
              COMMERCIA, HINJAWADI BRIDGE,WAKAD, PUNE, MAHARASHTRA 411057
            </span>
            <span>CONTACT:</span>
            <span>+91 77579 20539</span>
            <span>+91 87673 31852</span>
          </div>
        </GetInTouch>
      </section>
    </div>
  );
}
