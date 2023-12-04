import type { MetaFunction } from '@remix-run/react';
import { Link } from '@remix-run/react';
import { Carousel } from '~/components/carousel';
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
import { buttonVariants } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '~/components/ui/card';
import { cn } from '~/lib/utils';
import { GetInTouch } from '~/pages/index/components/get-in-touch';
import { OurConsultingServices } from '~/pages/index/components/our-consulting-services';

export const meta: MetaFunction = () => {
  return [
    { title: 'Medical Admissions' },
    {
      name: 'description',
      content: 'Get Admission in Medical',
    },
  ];
};

export default function MedicalAdmissions() {
  return (
    <div className=" relative">
      <section className="relative h-[580px]">
        <PageHeader className="pb-8 absolute top-16 left-4 md:left-28 z-40 w-full max-w-lg ">
          <p className="capitalize font-bold">OUR SERVICES</p>
          <PageHeaderHeading className="capitalize">
            Medical ADMISSIONS
          </PageHeaderHeading>
          <PageHeaderDescription className="text-white">
            With over 18 Lakh Candidates registering and appearing for the NEET
            Exam held on July 17, 2022, it is clear that medical courses remain
            one of the most sought-after options in India. These medical
            admissions are highly competitive and serve to demonstrate how
            important a medical career still is in India today.
          </PageHeaderDescription>
          <div className="w-full flex items-center space-x-4 pb-8 pt-4 md:pb-10">
            <Link
              to="/services"
              className={cn(
                buttonVariants({ variant: 'outline', className: 'text-center' })
              )}
            >
              Apply Now
            </Link>
          </div>
        </PageHeader>
        {/* TODO: replace image url with own asset url */}
        <div className="w-full h-full bg-[#03467c] bg-[url('https://catalysteducations.com/wp-content/uploads/2022/12/medical-1-scaled.jpg')] bg-no-repeat bg-cover bg-center bg-fixed bg-blend-screen"></div>
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
          <PageHeaderDescription>
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

      <section className="flex flex-col items-center md:pb-4">
        <PageHeader className="pb-8 items-center">
          <p className="uppercase text-center font-bold text-orange-500">
            COURSES WITHOUT NEET
          </p>
          <PageHeaderHeading className="capitalize text-center md:text-left">
            Top Medical Courses Without NEET
          </PageHeaderHeading>
          <PageHeaderDescription>
            Section Under Development
          </PageHeaderDescription>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
        </PageHeader>
        <Carousel className="max-w-[320px] h-[420px] md:h-[320px]">
          {Array.from({ length: 10 }).map((_, index) => (
            <Card className="border-2 border-[#0C71C3] w-full" key={index}>
              <CardHeader className="relative h-44 p-0">
                <div className="w-full h-full bg-[#0C71C3] bg-[url('https://catalysteducations.com/wp-content/uploads/2022/12/edit-3-1-scaled.jpg')] bg-no-repeat bg-cover bg-center"></div>
              </CardHeader>
              <CardContent className="p-2">
                <p className="uppercase text-center font-bold text-orange-500">
                  Biotechnology {index}
                </p>
                <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-black md:my-4" />
                <p className="leading-8">
                  Technically, a B.Sc in Biotechnology is considered an
                  engineering-level course and hence, doesn’t require NEET
                  scores.
                </p>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </section>

      <section className="flex flex-col items-center pb-4 ">
        <PageHeader className="pb-8 items-center">
          <p className="uppercase text-center font-bold text-orange-500">
            SCOPE
          </p>
          <PageHeaderHeading className="capitalize text-center md:text-left">
            Scope of Medical in India
          </PageHeaderHeading>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
          <PageHeaderDescription className="flex flex-col gap-4 text-center">
            In India, the medical field has a wide scope of opportunities and
            specialisations. From traditional doctors, nurses, and surgeons to
            pharmacists, alternative medicine practitioners, medical
            researchers, and medical educators there is something for everyone.
            The number of careers in the medical sector are too numerous to
            list, but some of the most popular include general practitioners,
            anaesthetists, gynaecologists, pathologists, radiographers and
            epidemiologists.
          </PageHeaderDescription>
        </PageHeader>
        <div className="w-full bg-gradient-to-b from-white via-blue-100 to-blue-500">
          <Carousel className="max-w-[320px] h-[220px] m-auto mb-16">
            {Array.from({ length: 10 }).map((_, index) => (
              <Card
                className="border-2 border-[#0C71C3] w-full rounded-br-none rounded-bl-none"
                key={index}
              >
                <CardHeader className="relative h-44 p-0">
                  <div className="w-full h-full bg-[#0C71C3] bg-[url('https://catalysteducations.com/wp-content/uploads/2022/12/edit-3-1-scaled.jpg')] bg-no-repeat bg-cover bg-center"></div>
                </CardHeader>
                <CardContent className="p-2">
                  <p className="uppercase text-center font-bold text-orange-500">
                    Biotechnology {index}
                  </p>
                </CardContent>
                <CardFooter className="border-t-8 border-blue-500 p-0"></CardFooter>
              </Card>
            ))}
          </Carousel>
        </div>
      </section>

      <section className="flex flex-col items-center pb-8">
        <PageHeader className="pb-8 items-center">
          <p className="uppercase text-center font-bold text-orange-500">
            TOP UNIVERSITIES
          </p>
          <PageHeaderHeading className="capitalize text-center">
            Top Medical Colleges & Universities In India
          </PageHeaderHeading>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
          <PageHeaderDescription className="text-center">
            Section Under Development
            <span className="mt-4 leading-8">
              This is perhaps the endgame that medical candidates have in mind
              when they choose to pursue some or the other medical course. It’s
              not possible to list down the plethora of careers that the medical
              field has to offer. Therefore, this list covers the most important
              ones from the most popular medical disciplines.
            </span>
          </PageHeaderDescription>
        </PageHeader>
        <Carousel className="max-w-[320px] h-[256px] md:h-72">
          {Array.from({ length: 10 }).map((_, index) => (
            <Card className="border-2 border-[#0C71C3] w-full" key={index}>
              <CardHeader className="relative h-44 p-0">
                <div className="w-full h-full bg-[#0C71C3] bg-[url('https://catalysteducations.com/wp-content/uploads/2022/12/edit-3-1-scaled.jpg')] bg-no-repeat bg-cover bg-center"></div>
              </CardHeader>
              <CardContent className="p-2 text-center">
                <p className="uppercase text-center font-bold text-orange-500">
                  Hindu Insititue of Medical Sciences (HIMS) {index}
                </p>
                <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-black md:my-4" />
                <p className="leading-8 text-center">Agra</p>
              </CardContent>
            </Card>
          ))}
        </Carousel>
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
