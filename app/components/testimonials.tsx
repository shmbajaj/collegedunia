import { FeedbackCard } from "./feedback-card";
import { Carousel } from "./carousel";

export function Testimonials() {
  return (
    <section
      id="clients"
      className={`sm:py-16 py-6 flex justify-center items-center flex-col relative `}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2
          className={`font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full`}
        >
          What People are <br className="sm:block hidden" /> saying about us
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p
            className={`font-normal text-dimWhite text-[18px] leading-[30.8px] text-left max-w-[450px]`}
          >
            Your go-to destination for comprehensive information on colleges,
            universities, courses, and educational programs in India, helping
            students make well-informed decisions about their academic journey.
          </p>
        </div>
      </div>
      <Carousel>
        <FeedbackCard
          name="Shubham Bajaj"
          title="Developer"
          content="[1] I can't believe it took us this long to make a change. So happy that we did. Numbers don't lie."
          img="https://avatars.githubusercontent.com/u/29247011?v=4"
        />
        <FeedbackCard
          name="Shubham Bajaj"
          title="Developer"
          content="[2] I can't believe it took us this long to make a change. So happy that we did. Numbers don't lie."
          img="https://avatars.githubusercontent.com/u/29247011?v=4"
        />
        <FeedbackCard
          name="Shubham Bajaj"
          title="Developer"
          content="[3] I can't believe it took us this long to make a change. So happy that we did. Numbers don't lie."
          img="https://avatars.githubusercontent.com/u/29247011?v=4"
        />
      </Carousel>
    </section>
  );
}
