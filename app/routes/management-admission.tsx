import type { MetaFunction } from '@remix-run/react';
import { type ActionFunctionArgs } from '@remix-run/node';
import { Carousel } from '~/components/carousel-old';
import { FAQ } from '~/components/faq';
import { LearnMoreCard } from '~/components/learn-more-card';
import { Page } from '~/components/page';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '~/components/page-header';
import { Card, CardContent, CardHeader } from '~/components/ui/card';
import { managementAdmission } from '~/data/pages.data';
import { contactUsAction } from '~/lib/common.action';

export const meta: MetaFunction = () => {
  return [
    { title: 'Management Admissions' },
    {
      name: 'description',
      content: 'Get Admission in Management',
    },
  ];
};

export const action = async (args: ActionFunctionArgs) => contactUsAction(args);

export default function ManagementAdmissions() {
  return (
    <Page {...managementAdmission}>
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
        <Carousel>
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

      <section className="flex flex-col items-center pb-8 bg-gray-100">
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
        <Carousel>
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
        </Carousel>{' '}
      </section>

      {/* <section className="flex flex-col items-center pb-8">
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
      </section> */}

      {/* <section className="bg-blue-100 p-8 flex flex-col md:flex-row flex-wrap gap-8">
        <div className="cursor-pointer group perspective bg-white w-52 h-52 p-4">
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
      </section> */}

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
        <Carousel>
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
            Management Entrance Exams
          </PageHeaderHeading>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
        </PageHeader>
        <div className="container grid md:gap-4 md:grid-cols-2 max-w-5xl">
          <div>
            {Array.from({ length: 3 }).map((_, index) => (
              <LearnMoreCard index={index} key={index} />
            ))}
          </div>
          <div>
            {Array.from({ length: 3 }).map((_, index) => (
              <LearnMoreCard index={index} key={index} />
            ))}
          </div>
        </div>
      </section>

      <FAQ />
    </Page>
  );
}
