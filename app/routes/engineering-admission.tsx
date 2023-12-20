import { type ActionFunctionArgs } from '@remix-run/node';
import type { MetaFunction } from '@remix-run/react';
import { Carousel } from '~/components/carousel-old';
import { Page } from '~/components/page';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '~/components/page-header';
import { StyledHeading2 } from '~/components/typography';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '~/components/ui/card';
import { engineeringAdmission } from '~/data/pages.data';
import { contactUsAction } from '~/lib/common.action';

export const meta: MetaFunction = () => {
  return [
    { title: 'Engineering Admissions' },
    {
      name: 'description',
      content: 'Get Admission in Engineering',
    },
  ];
};

export const action = async (args: ActionFunctionArgs) => contactUsAction(args);

export default function EngineeringAdmissions() {
  const mid = engineeringAdmission.engineeringAllExam.length / 2;
  const rightHalfStartIndex = mid - (mid % 1);
  const engineeringAllExamLeftHalf =
    engineeringAdmission.engineeringAllExam.slice(0, rightHalfStartIndex);
  const engineeringAllExamRightHalf =
    engineeringAdmission.engineeringAllExam.slice(rightHalfStartIndex);
  return (
    <Page {...engineeringAdmission}>
      <section className="flex flex-col items-center text-center">
        <PageHeader className="pb-8 items-center">
          <PageHeaderHeading className="capitalize  md:text-left  text-center font-bold text-orange-500">
            What Sets Us Apart?
          </PageHeaderHeading>
          <PageHeaderDescription className="flex flex-col gap-2">
            <span>14+ Experience</span>
            <span>Connected With 100+ Top Colleges</span>
            <span>5000+ Successful Stories</span>
          </PageHeaderDescription>
        </PageHeader>
      </section>

      <section className="md:mt-[8rem] lg:mt-[4rem] flex flex-col items-center pb-8 text-center container m-auto">
        <StyledHeading2 className="uppercase text-center">
          Few Words about us
        </StyledHeading2>
        <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
        <PageHeaderDescription className="flex flex-col gap-4">
          <span>
            Welcome to Educom Guidance, we’re specialized Engineering Admission
            Consultation! Our skilled Engineering Consultants are here to
            expertly navigate you through the intricate process of securing
            admission to premier engineering colleges. Whether it's crafting a
            compelling application or mastering entrance exams, our personalized
            support maximizes your chances of success. Let our Engineering
            Consultants assist you in unlocking the doors to your promising
            future in engineering – reach out to us today!
          </span>
          <span>
            We have Dedicated expert team specialized in management
            consultation, engineering consultation, medical consultation, and
            other Courses in India.
          </span>
        </PageHeaderDescription>
      </section>

      <section className="flex flex-col items-center pb-8">
        <PageHeader className="pb-8 items-center">
          <p className="uppercase text-center font-bold text-orange-500">
            TYPES OF ENGINEERING COURSES
          </p>
          <PageHeaderHeading className="capitalize text-center md:text-left">
            Engineering Branches
          </PageHeaderHeading>
          <PageHeaderDescription className="text-center">
            Engineering encompasses various specialized branches, each offering
            distinct fields of study and career paths. Some common engineering
            branches include:
          </PageHeaderDescription>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
        </PageHeader>
        <Carousel>
          {engineeringAdmission.engineeringBranches.map((branch, index) => (
            <Card className="border-2 border-[#0C71C3] w-full" key={index}>
              <CardHeader className="relative h-44 p-0">
                <div className="w-full h-full relative">
                  <img
                    src={branch.imageSource}
                    alt="PageHeader Background"
                    className={
                      'w-full h-full object-cover object-center absolute top-0 left-0'
                    }
                  />
                  <div
                    className={
                      'w-full h-full absolute top-0 left-0 bg-blend-screen bg-opacity-50 bg-[#0C71C3]'
                    }
                  ></div>
                </div>
              </CardHeader>
              <CardContent className="p-2">
                <p className="uppercase text-center font-bold text-orange-500">
                  {branch.branch}
                </p>
                <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-black md:my-4" />
                <p className="leading-8 text-center">{branch.overview}</p>
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
            Engineering Entrance Exams
          </PageHeaderHeading>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
        </PageHeader>
        <div className="container grid md:gap-4 md:grid-cols-2 max-w-5xl">
          <div>
            {engineeringAllExamLeftHalf.map((exam, index) => (
              <Card className="flex-col text-base mb-4" key={index}>
                <CardContent className="flex gap-4 bg-gray-100/50 text-center p-4 font-semibold">
                  <Avatar>
                    <AvatarImage src={exam.imageSource} alt={exam.name} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-blue-500 capitalize">
                      {exam.name}
                    </div>
                    <div className="text-gray-500 leading-8">
                      {exam.description}
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
                        <p>{exam.learnMore.content}</p>
                        <p>
                          <strong>Age:&nbsp;</strong>
                          {exam.learnMore?.age ??
                            exam.learnMore.eligibility?.age}
                        </p>
                        <p>
                          <strong>Qualification:&nbsp;</strong>
                          {exam.learnMore?.qualification}
                          {exam.learnMore.eligibility?.qualification && (
                            <p className="flex flex-col gap-4">
                              {Object.entries(
                                exam.learnMore.eligibility?.qualification ?? {}
                              ).map(([key, value], index) => (
                                <span key={index}>
                                  {key}:&nbsp; {value}
                                </span>
                              ))}
                            </p>
                          )}
                        </p>
                        {exam.learnMore.compulsorySubjects && (
                          <p>
                            <strong>Compulsory Subjects:&nbsp;</strong>
                            {exam.learnMore.compulsorySubjects}
                          </p>
                        )}
                        {exam.learnMore.lateralEntryAvailableFor && (
                          <>
                            <p>
                              <strong>
                                Lateral Entry Available for:&nbsp;
                              </strong>
                            </p>
                            <p className="flex flex-col gap-4">
                              {exam.learnMore.lateralEntryAvailableFor.map(
                                (item, index) => (
                                  <span key={index}>{item}</span>
                                )
                              )}
                            </p>
                          </>
                        )}
                        {exam.learnMore.numberOfAttempts && (
                          <p>
                            <strong>Number Of Attempts:&nbsp;</strong>
                            {exam.learnMore.numberOfAttempts}
                          </p>
                        )}
                        {exam.learnMore.collegesCovered && (
                          <>
                            <p>
                              <strong>Colleges Covered:&nbsp;</strong>
                            </p>
                            <p className="flex flex-col gap-4">
                              {exam.learnMore.collegesCovered.map(
                                (item, index) => (
                                  <span key={index}>{item}</span>
                                )
                              )}
                            </p>
                          </>
                        )}
                        <p>
                          <strong>Subjects In Paper:&nbsp;</strong>
                          {exam.learnMore.subjectsInPaper}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div>
            {engineeringAllExamRightHalf.map((exam, index) => (
              <Card className="flex-col text-base mb-4" key={index}>
                <CardContent className="flex gap-4 bg-gray-100/50 text-center p-4 font-semibold">
                  <Avatar>
                    <AvatarImage src={exam.imageSource} alt={exam.name} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-blue-500 capitalize">
                      {exam.name}
                    </div>
                    <div className="text-gray-500 leading-8">
                      {exam.description}
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
                        <p>{exam.learnMore.content}</p>
                        {(exam.learnMore?.age ||
                          exam.learnMore?.eligibility?.age) && (
                          <p>
                            <strong>Age:&nbsp;</strong>
                            {exam.learnMore?.age ??
                              exam.learnMore.eligibility?.age}
                          </p>
                        )}
                        {(exam.learnMore.qualification ||
                          exam.learnMore.eligibility?.qualification) && (
                          <p>
                            <strong>Qualification:&nbsp;</strong>
                            {exam.learnMore?.qualification}
                            {Array.isArray(
                              exam.learnMore.eligibility?.qualification
                            ) &&
                              exam.learnMore.eligibility?.qualification && (
                                <p className="flex flex-col gap-4">
                                  {Object.entries(
                                    exam.learnMore.eligibility?.qualification ??
                                      {}
                                  ).map(([key, value], index) => (
                                    <span key={index}>
                                      {key}:&nbsp; {value}
                                    </span>
                                  ))}
                                </p>
                              )}

                            {!Array.isArray(
                              exam.learnMore.eligibility?.qualification
                            ) && (
                              <span>
                                {
                                  exam.learnMore.eligibility
                                    ?.qualification as String
                                }
                              </span>
                            )}
                          </p>
                        )}
                        {exam.learnMore.compulsorySubjects && (
                          <p>
                            <strong>Compulsory Subjects:&nbsp;</strong>
                            {exam.learnMore.compulsorySubjects}
                          </p>
                        )}
                        {exam.learnMore.lateralEntryAvailableFor && (
                          <>
                            <p>
                              <strong>
                                Lateral Entry Available for:&nbsp;
                              </strong>
                            </p>
                            <p className="flex flex-col gap-4">
                              {exam.learnMore.lateralEntryAvailableFor.map(
                                (item, index) => (
                                  <span key={index}>{item}</span>
                                )
                              )}
                            </p>
                          </>
                        )}
                        {exam.learnMore.numberOfAttempts && (
                          <p>
                            <strong>Number Of Attempts:&nbsp;</strong>
                            {exam.learnMore.numberOfAttempts}
                          </p>
                        )}
                        {exam.learnMore.collegesCovered && (
                          <>
                            <p>
                              <strong>Colleges Covered:&nbsp;</strong>
                            </p>
                            <p className="flex flex-col gap-4">
                              {exam.learnMore.collegesCovered.map(
                                (item, index) => (
                                  <span key={index}>{item}</span>
                                )
                              )}
                            </p>
                          </>
                        )}
                        {exam.learnMore.subjectsInPaper && (
                          <p>
                            <strong>Subjects In Paper:&nbsp;</strong>
                            {exam.learnMore.subjectsInPaper}
                          </p>
                        )}
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
            TOP ENGINEERING COLLEGES
          </p>
          <PageHeaderHeading className="capitalize text-center md:text-left">
            Best Engineering Colleges in India
          </PageHeaderHeading>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
        </PageHeader>
        <Carousel>
          {engineeringAdmission.engineeringColleges.map((college, index) => (
            <Card className="border-2 border-[#0C71C3] w-56" key={index}>
              <CardHeader className="relative h-44 p-0">
                <div className="w-full h-full relative">
                  <img
                    src={college.imageSource}
                    alt="PageHeader Background"
                    className={
                      'w-full h-full object-cover object-center absolute top-0 left-0'
                    }
                  />
                  <div
                    className={
                      'w-full h-full absolute top-0 left-0 bg-blend-screen bg-opacity-50 bg-[#0C71C3]'
                    }
                  ></div>
                </div>
              </CardHeader>
              <CardContent className="p-2">
                <p className="uppercase text-center font-bold text-orange-500">
                  {college.collegeName}
                </p>
              </CardContent>
            </Card>
          ))}
        </Carousel>{' '}
      </section>
    </Page>
  );
}
