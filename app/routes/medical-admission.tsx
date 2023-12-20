import type { MetaFunction } from '@remix-run/react';
import { type ActionFunctionArgs } from '@remix-run/node';
import { Carousel } from '~/components/carousel-old';
import { Page } from '~/components/page';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '~/components/page-header';
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
import { medicalAdmission } from '~/data/pages.data';
import { contactUsAction } from '~/lib/common.action';
import { StyledHeading2 } from '~/components/typography';

export const meta: MetaFunction = () => {
  return [
    { title: 'Medical Admissions' },
    {
      name: 'description',
      content: 'Get Admission in Medical',
    },
  ];
};

export const action = async (args: ActionFunctionArgs) => contactUsAction(args);

export default function MedicalAdmissions() {
  return (
    <Page {...medicalAdmission}>
      <section className="flex flex-col items-center text-center">
        <PageHeader className="pb-8 items-center">
          <PageHeaderHeading className="capitalize  md:text-left  text-center font-bold text-orange-500">
            What Sets Us Apart?
          </PageHeaderHeading>
          <PageHeaderDescription className="flex flex-col gap-2">
            <span>14+ Experience</span>
            <span>Connected With 100+ Top Colleges</span>
            <span>5000+ Success Stories</span>
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
            Embark on a transformative journey to medical success by decoding
            the intricacies of <strong>MBBS admissions</strong> with our expert
            guidance. Visualize having seasoned{' '}
            <strong>medical consultants</strong> as your trusted allies,
            lighting the way through the competitive world of medical
            admissions.
          </span>
          <span>
            In this nuanced landscape, our guidance becomes the empowering key,
            allowing you to navigate the process with confidence. Beyond
            academic excellence, our consultants offer personalized advice,
            tailored to your unique strengths and aspirations, from selecting
            the ideal path to meticulously crafting your application. With a
            commitment to your success, our dedicated team provides
            comprehensive support throughout the admission journey, offering
            insights and unwavering assistance to make you stand out.
          </span>
          <span>
            Benefit from the extensive experience of our consultants, rooted in
            industry knowledge, and join the ranks of successful medical
            enthusiasts who've entrusted us to guide them to their dream paths.
            Explore the gateway to your medical dreams today and open the door
            to your entry into the realm of healing!
          </span>
        </PageHeaderDescription>
      </section>

      <section className="flex flex-col items-center pb-8">
        <PageHeader className="pb-8 items-center">
          <p className="uppercase text-center font-bold text-orange-500">
            COURSES
          </p>
          <PageHeaderHeading className="capitalize text-center md:text-left">
            Types of Medical Courses
          </PageHeaderHeading>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
          <PageHeaderDescription className="text-center">
            If you’re looking to pursue a career in the medical field, then
            you’ll need to know about the four most popular and useful courses.
            These are the ones that will give you the best chance at having a
            successful career and learning what is needed to become successful
            in the medical industry.
          </PageHeaderDescription>
        </PageHeader>

        <div className="mb-4">
          <h2 className="text-xl font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1] mb-8 text-center">
            <span className="text-orange-500">Undergraduate&nbsp;</span>
            <span>Medical&nbsp;Courses</span>
          </h2>
          <div className="container grid md:gap-4 md:grid-cols-2 max-w-5xl">
            <div>
              <Card className="flex-col text-base mb-4">
                <CardContent className="flex gap-4 bg-gray-100/50 text-center p-4 font-semibold">
                  <Avatar className="md:h-20 md:w-20 lg:h-36 lg:w-36 md:rounded-none">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-orange-500 capitalize">
                      MBBS
                    </div>
                    <div className="text-gray-500 leading-8">
                      MBBS is often considered the primary medical degree course
                      in India. MBBS stands for Bachelor of Medicine and
                      Bachelor of Surgery and is a professional medical degree
                      awarded by universities and medical institutes around
                      India.
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-white w-full px-6 py-0">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full border-b-0"
                  >
                    <AccordionItem value={'MBBS'} className="border-b-0">
                      <AccordionTrigger>Learn More</AccordionTrigger>
                      <AccordionContent className="grid gap-4 text-base text-gray-500">
                        <p>
                          MBBS (Bachelor of Medicine, Bachelor of Surgery) is a
                          five to six year undergraduate medical course that
                          focuses on training candidates to become efficient
                          medical professionals in the future.
                        </p>
                        <p>What you will achieve by getting MBBS Admission?</p>
                        <p>
                          The programme entails learning about the diagnosis and
                          treatment of various illnesses, as well as staying
                          up-to-date with all National and International health
                          standards and policies. It also includes developing
                          research skills for newly mutating diseases and being
                          aware of medical ethics for research work, patient
                          care and day-to-day service.
                        </p>
                        <p>
                          Additionally, students learn good oral and written
                          communication skills which are vital for successful
                          medical practice in the future. Overall, with this
                          programme candidates gain basic knowledge that will
                          help them choose their specialization once completing
                          their studies.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardFooter>
              </Card>
            </div>
            <div>
              <Card className="flex-col text-base mb-4">
                <CardContent className="flex gap-4 bg-gray-100/50 text-center p-4 font-semibold">
                  <Avatar className="md:h-20 md:w-20 lg:h-36 lg:w-36 md:rounded-none">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-orange-500 capitalize">
                      BDS
                    </div>
                    <div className="text-gray-500 leading-8">
                      MBBS is often considered the primary medical degree course
                      in India. MBBS stands for Bachelor of Medicine and
                      Bachelor of Surgery and is a professional medical degree
                      awarded by universities and medical institutes around
                      India.
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-white w-full px-6 py-0">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full border-b-0"
                  >
                    <AccordionItem value={'BDS'} className="border-b-0">
                      <AccordionTrigger>Learn More</AccordionTrigger>
                      <AccordionContent className="grid gap-4 text-base text-gray-500">
                        <p>
                          MBBS (Bachelor of Medicine, Bachelor of Surgery) is a
                          five to six year undergraduate medical course that
                          focuses on training candidates to become efficient
                          medical professionals in the future.
                        </p>
                        <p>What you will achieve by getting MBBS Admission?</p>
                        <p>
                          The programme entails learning about the diagnosis and
                          treatment of various illnesses, as well as staying
                          up-to-date with all National and International health
                          standards and policies. It also includes developing
                          research skills for newly mutating diseases and being
                          aware of medical ethics for research work, patient
                          care and day-to-day service.
                        </p>
                        <p>
                          Additionally, students learn good oral and written
                          communication skills which are vital for successful
                          medical practice in the future. Overall, with this
                          programme candidates gain basic knowledge that will
                          help them choose their specialization once completing
                          their studies.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1] mb-8 text-center">
            <span className="text-orange-500">Postgraduate&nbsp;</span>
            <span>Medical&nbsp;Courses</span>
          </h2>
          <div className="container grid md:gap-4 md:grid-cols-2 max-w-5xl">
            <div>
              <Card className="flex-col text-base mb-4">
                <CardContent className="flex gap-4 bg-gray-100/50 text-center p-4 font-semibold">
                  <Avatar className="md:h-20 md:w-20 lg:h-36 lg:w-36 md:rounded-none">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-orange-500 capitalize">
                      MBBS
                    </div>
                    <div className="text-gray-500 leading-8">
                      MBBS is often considered the primary medical degree course
                      in India. MBBS stands for Bachelor of Medicine and
                      Bachelor of Surgery and is a professional medical degree
                      awarded by universities and medical institutes around
                      India.
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-white w-full px-6 py-0">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full border-b-0"
                  >
                    <AccordionItem value={'MBBS'} className="border-b-0">
                      <AccordionTrigger>Learn More</AccordionTrigger>
                      <AccordionContent className="grid gap-4 text-base text-gray-500">
                        <p>
                          MBBS (Bachelor of Medicine, Bachelor of Surgery) is a
                          five to six year undergraduate medical course that
                          focuses on training candidates to become efficient
                          medical professionals in the future.
                        </p>
                        <p>What you will achieve by getting MBBS Admission?</p>
                        <p>
                          The programme entails learning about the diagnosis and
                          treatment of various illnesses, as well as staying
                          up-to-date with all National and International health
                          standards and policies. It also includes developing
                          research skills for newly mutating diseases and being
                          aware of medical ethics for research work, patient
                          care and day-to-day service.
                        </p>
                        <p>
                          Additionally, students learn good oral and written
                          communication skills which are vital for successful
                          medical practice in the future. Overall, with this
                          programme candidates gain basic knowledge that will
                          help them choose their specialization once completing
                          their studies.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardFooter>
              </Card>
            </div>
            <div>
              <Card className="flex-col text-base mb-4">
                <CardContent className="flex gap-4 bg-gray-100/50 text-center p-4 font-semibold">
                  <Avatar className="md:h-20 md:w-20 lg:h-36 lg:w-36 md:rounded-none">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-orange-500 capitalize">
                      BDS
                    </div>
                    <div className="text-gray-500 leading-8">
                      MBBS is often considered the primary medical degree course
                      in India. MBBS stands for Bachelor of Medicine and
                      Bachelor of Surgery and is a professional medical degree
                      awarded by universities and medical institutes around
                      India.
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-white w-full px-6 py-0">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full border-b-0"
                  >
                    <AccordionItem value={'BDS'} className="border-b-0">
                      <AccordionTrigger>Learn More</AccordionTrigger>
                      <AccordionContent className="grid gap-4 text-base text-gray-500">
                        <p>
                          MBBS (Bachelor of Medicine, Bachelor of Surgery) is a
                          five to six year undergraduate medical course that
                          focuses on training candidates to become efficient
                          medical professionals in the future.
                        </p>
                        <p>What you will achieve by getting MBBS Admission?</p>
                        <p>
                          The programme entails learning about the diagnosis and
                          treatment of various illnesses, as well as staying
                          up-to-date with all National and International health
                          standards and policies. It also includes developing
                          research skills for newly mutating diseases and being
                          aware of medical ethics for research work, patient
                          care and day-to-day service.
                        </p>
                        <p>
                          Additionally, students learn good oral and written
                          communication skills which are vital for successful
                          medical practice in the future. Overall, with this
                          programme candidates gain basic knowledge that will
                          help them choose their specialization once completing
                          their studies.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center pb-4 ">
        <PageHeader className="pb-8 items-center">
          <p className="uppercase text-center font-bold text-orange-500">
            EXAMS
          </p>
          <PageHeaderHeading className="capitalize text-center md:text-left">
            Medical Entrance Exams
          </PageHeaderHeading>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
        </PageHeader>
        <div className="w-full bg-gradient-to-b from-white via-blue-100 to-blue-500 flex items-center">
          <div className="max-w-lg m-auto">
            <Carousel>
              {medicalAdmission.medicalEntrances.map((entrance, index) => (
                <Card
                  className="border-2 border-[#0C71C3] w-56 rounded-br-none rounded-bl-none"
                  key={index}
                >
                  <CardHeader className="relative h-44 p-0">
                    <div className="w-full h-full bg-[#0C71C3] bg-[url('https://catalysteducations.com/wp-content/uploads/2022/12/edit-3-1-scaled.jpg')] bg-no-repeat bg-cover bg-center"></div>
                  </CardHeader>
                  <CardContent className="p-2">
                    <p className="uppercase text-center font-bold text-orange-500">
                      {entrance.examName}
                    </p>
                  </CardContent>
                  <CardFooter className="border-t-8 border-blue-500 p-0"></CardFooter>
                </Card>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center pb-8">
        <PageHeader className="pb-8 items-center">
          <p className="uppercase text-center font-bold text-orange-500">
            We are Connected With
          </p>
          <PageHeaderHeading className="capitalize text-center">
            Top Medical Colleges & Universities In India
          </PageHeaderHeading>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
          <PageHeaderDescription className="text-center">
            <span className="mt-4 leading-8">
              This is perhaps the endgame that medical candidates have in mind
              when they choose to pursue some or the other medical course. It’s
              not possible to list down the plethora of careers that the medical
              field has to offer. Therefore, this list covers the most important
              ones from the most popular medical disciplines.
            </span>
          </PageHeaderDescription>
        </PageHeader>
        <Carousel>
          {medicalAdmission.medicalColleges.map((college, index) => (
            <Card
              className="border-2 border-[#0C71C3] w-full  min-w-[220px]"
              key={index}
            >
              <CardHeader className="relative h-44 p-0">
                <div className="w-full h-full bg-[#0C71C3] bg-[url('https://catalysteducations.com/wp-content/uploads/2022/12/edit-3-1-scaled.jpg')] bg-no-repeat bg-cover bg-center"></div>
              </CardHeader>
              <CardContent className="p-2 text-center">
                <p className="uppercase text-center font-bold text-orange-500">
                  {college.collegeName}
                </p>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </section>
    </Page>
  );
}
