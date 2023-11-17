import { GetInTouchForm } from "./get-in-touch-form";
import { PageHeaderHeading } from "../../../components/page-header";

export function GetInTouch() {
  return (
    <section className="border shadow-lg px-8 py-8 mb-4 max-w-5xl m-auto">
      <PageHeaderHeading className="uppercase mb-2">
        GET IN TOUCH
      </PageHeaderHeading>
      <div className="flex flex-col md:flex-row gap-4">
        <GetInTouchForm />
        <div className="p-4 lg:p-12 bg-blue-500 border-t-8 border-orange-500 text-white flex flex-col gap-2 text-center font-semibold h-max">
          <span>
            COMMERCIA, HINJAWADI BRIDGE,WAKAD, PUNE, MAHARASHTRA 411057
          </span>
          <span>CONTACT:</span>
          <span>+91 77579 20539</span>
          <span>+91 87673 31852</span>
        </div>
      </div>
    </section>
  );
}
