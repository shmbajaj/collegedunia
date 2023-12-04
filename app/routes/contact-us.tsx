import type { MetaFunction } from "@remix-run/react";
import { MapPinIcon, Clock3Icon, MessageCircleIcon } from "lucide-react";
import { Card, CardContent, CardDescription } from "~/components/ui/card";
import { GetInTouch } from "~/pages/index/components/get-in-touch";

export const meta: MetaFunction = () => {
  return [{ title: "Contact Us" }];
};

export default function ContactUs() {
  return (
    <div className="relative mb-4">
      <div className="w-full h-[400px] bg-gray-300 mb-4">
        <iframe
          title="catalysteducations"
          width="100%"
          height="100%"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Catalyst%20Education%20Consultancy,%20Hinjawadi%20Rd,%20Shankar%20Kalat%20Nagar,%20Wakad,%20Pune,%20Pimpri-Chinchwad,%20Maharashtra%20411057+(Catalyst%20Education%20Consultancy%20)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <div className="flex flex-col lg:flex-row max-w-5xl mx-4 my-auto md:m-auto">
        <GetInTouch className="flex-1" />
        <article className="flex flex-col flex-1 gap-4 max-w-xl m-auto lg:max-w-[auto] lg:m-0 lg:gap-8 p-4 lg:px-8 lg:py-4 ">
          <Card className="border-none shadow-none">
            <CardContent className="flex text-center gap-2 p-0">
              <div className="bg-orange-500 rounded-full p-2 mt-2 w-10 h-10 flex items-center">
                <MapPinIcon className="text-white w-8 h-8" />
              </div>
              <CardDescription className="flex flex-col flex-1 gap-2">
                <span className="uppercase text-sm">Visit Us</span>
                <span className="text-black text-base leading-6">
                  COMMERCIA, HINJAWADI BRIDGE,WAKAD, PUNE, MAHARASHTRA 411057
                </span>
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="border-none shadow-none">
            <CardContent className="flex text-center gap-2 p-0">
              <div className="bg-orange-500 rounded-full p-2 mt-2 w-10 h-10 flex items-center">
                <MessageCircleIcon className="text-white w-8 h-8" />
              </div>
              <CardDescription className="flex flex-col flex-1 gap-2">
                <span className="uppercase text-sm">Contact Us</span>
                <span className="text-black text-base leading-6 flex flex-col gap-1 text-center">
                  <span>+91 77579 20539</span>
                  <span>+91 87673 31852</span>
                  <span>contact@catalysteducations.com</span>
                </span>
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="border-none shadow-none">
            <CardContent className="flex text-center gap-2 p-0">
              <div className="bg-orange-500 rounded-full p-2 mt-2 w-10 h-10 flex items-center">
                <Clock3Icon className="text-white w-8 h-8" />
              </div>
              <CardDescription className="flex flex-col flex-1 gap-2">
                <span className="uppercase text-sm">Open Hours</span>
                <span className="text-black text-base leading-6">
                  Everyday: 9am – 10pm
                </span>
              </CardDescription>
            </CardContent>
          </Card>
        </article>
      </div>
    </div>
  );
}
