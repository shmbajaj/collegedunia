import { type MetaFunction } from '@remix-run/react';
import { GetInTouch } from '~/pages/index/components/get-in-touch';
import { OurConsultingServices } from '~/pages/index/components/our-consulting-services';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '~/components/page-header';

export const meta: MetaFunction = () => {
  return [{ title: 'About Us' }];
};

export default function AboutUs() {
  return (
    <div className="relative">
      <section className="relative h-[580px]">
        <PageHeader className="pb-8 absolute top-16 left-4 md:left-28 z-40 w-full max-w-lg ">
          <p className="capitalize font-bold">About</p>
          <PageHeaderHeading className="capitalize">About us</PageHeaderHeading>
          <PageHeaderDescription className="text-white">
            Your go-to source for secure admissions in universities in India and
            abroad. Catalyst Education helps you with the most genuine
            educational guidance, learning, and mentorship.
          </PageHeaderDescription>
        </PageHeader>
        {/* TODO: replace image url with own asset url */}
        <div className="w-full h-full bg-[#0C71C3] bg-[url('https://catalysteducations.com/wp-content/uploads/2022/12/edit-3-1-scaled.jpg')] bg-no-repeat bg-cover bg-center bg-fixed bg-blend-screen"></div>
      </section>

      <div className="bg-white m-4 flex flex-col md:flex-row gap-4 md:gap-0 md:m-8 border-2 shadow-xl md:absolute md:top-[24rem] md:left-4 md:z-40">
        <div className="p-4 md:p-8 border-r-2 border-r-gray-200">
          <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1] mb-2">
            <span className="text-orange-500">01.</span>
            &nbsp;
            <span>STRATEGIC</span>
          </h2>
          <p className="max-w-[750px] text-lg  sm:text-xl leading-8 text-muted-foreground">
            We at Catalyst Educations use strategic methods to train our
            students to get into their dream colleges.
          </p>
        </div>

        <div className="p-4 md:p-8 border-r-2 border-r-gray-200">
          <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1] mb-2">
            <span className="text-orange-500">02.</span>
            &nbsp;
            <span>PROFESSIONAL</span>
          </h2>
          <p className="max-w-[750px] text-lg  sm:text-xl leading-8 text-muted-foreground">
            Our team is highly professional in terms of trainings. We give
            unbiased guidance to the students and make sure that they get what
            they want from us.
          </p>
        </div>

        <div className="p-4 md:p-8">
          <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1] mb-2">
            <span className="text-orange-500">02.</span>
            &nbsp;
            <span>LOYAL</span>
          </h2>
          <p className="max-w-[750px] text-lg  sm:text-xl leading-8 text-muted-foreground">
            We are 100% loyal to our customers. If we are unable to get you your
            dream college, your money will be refunded.
          </p>
        </div>
      </div>

      <section className="md:mt-[8rem] lg:mt-[4rem] flex flex-col items-center pb-8">
        <PageHeader className="pb-8 items-center">
          <p className="uppercase text-center text-orange-500">
            PROVEN SUCCESS
          </p>
          <PageHeaderHeading className="capitalize text-center md:text-left">
            Who We Are ?
          </PageHeaderHeading>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
          <PageHeaderDescription className="leading-8 text-center flex flex-col gap-4">
            <span>
              {' '}
              Catalyst Educations understands the value of your dream of what
              you want to be. We are the leading educational recruiters in
              India, and happy to share that we have traveled the journey to be
              a professional with 5000+ students. We understand the importance
              of high-quality education for the students.
            </span>
            <span>
              Studying abroad is the new trend in town and getting popular among
              Indian aspirants for the last few years. Affordable Fees,
              experienced faculties, and international working opportunities are
              key features of choosing education in abroad in the top
              universities of the world.
            </span>
          </PageHeaderDescription>
        </PageHeader>
        <article className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="w-44 h-44 flex items-center justify-center border-orange-500 border-4 rounded-full">
              <p className="text-xl font-bold text-blue-500">1234</p>
            </div>
            <p className="text-xl font-bold text-blue-500">
              MANAGEMENT STUDENTS
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <div className="w-44 h-44 md:w-32 md:h-32 flex items-center justify-center border-orange-500 border-4 rounded-full">
              <p className="text-xl font-bold text-blue-500">1203</p>
            </div>
            <p className="text-xl font-bold text-blue-500">MEDICAL STUDENTS </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <div className="w-44 h-44 flex items-center justify-center border-orange-500 border-4 rounded-full">
              <p className="text-xl font-bold text-blue-500">1203</p>
            </div>
            <p className="text-xl font-bold text-blue-500">
              ENGINEERING STUDENTS{' '}
            </p>
          </div>
        </article>
      </section>

      <section className="hidden md:flex flex-col items-center pb-8">
        <PageHeader className="pb-8 items-center">
          <p className="uppercase text-center text-orange-500">JOURNEY</p>
          <PageHeaderHeading className="capitalize text-center md:text-left">
            Success Journey
          </PageHeaderHeading>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
        </PageHeader>
        <div className="w-full m-auto max-w-2xl md:h-72 bg-transparent bg-[url('https://catalysteducations.com/wp-content/uploads/2022/12/Beige-Bar-Chart-Social-Media-Followers-Tier-Infographic-Instagram-Post-1.jpg')] bg-no-repeat bg-contain bg-center"></div>
      </section>

      <section className="bg-blue-500 flex flex-col items-center pb-8">
        <PageHeader className="pb-8 items-center">
          <p className="uppercase text-center font-bold text-orange-500">OUR</p>
          <PageHeaderHeading className="capitalize text-center md:text-left text-white">
            Vision & Mission
          </PageHeaderHeading>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
        </PageHeader>

        <div className="bg-white m-4 flex flex-col md:flex-row gap-12 md:gap-0 md:m-8">
          <div className="p-8 border-r-2 border-r-gray-200">
            <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1] mb-2">
              <span className="text-orange-500">01.</span>
              &nbsp;
              <span>VISION</span>
            </h2>
            <p className="max-w-[750px] text-lg  sm:text-xl leading-8 text-muted-foreground">
              To offer end-to-end services to help students to get admissions in
              their dream college.
            </p>
          </div>

          <div className="p-8">
            <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1] mb-2">
              <span className="text-orange-500">02.</span>
              &nbsp;
              <span>MISSION</span>
            </h2>
            <p className="max-w-[750px] text-lg  sm:text-xl leading-8 text-muted-foreground">
              To provide support to help you find the right
              college/institute/university in the right country that offers
              topical courses to provide the best opportunity for success.
            </p>
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
