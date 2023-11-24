import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Carousel } from "~/components/carousel";

export function CarouselExample() {
  return (
    <div className="w-full max-w-md m-auto p-4 relative">
      <Carousel
        visibleSlides={1}
        totalSlides={5}
        step={1}
        naturalSlideWidth={400}
        naturalSlideHeight={500}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <Card className="w-full border-2 rounded" key={index}>
            <CardHeader className="w-full h-52 bg-blue-300 bg-[url('https://catalysteducations.com/wp-content/uploads/2022/12/13-1.jpg')] bg-repeat bg-contain bg-center"></CardHeader>
            <CardContent className="pt-6">
              <p className="uppercase text-center font-bold text-orange-500">
                Information Technology {index}
              </p>
              <hr className="mx-auto my-1 h-1 bg-black rounded border-0 md:my-4" />
              <p className="leading-8">
                Information technology (IT) engineering is a field of study
                focused on the design, implementation, and maintenance of
                computer systems. It is distinct from computer engineering in
                that it focuses more on the use of existing systems rather than
                the creation and designing of new ones. IT engineering also
                involves working with applications, networks, databases, and
                other software programs.
              </p>
            </CardContent>
          </Card>
        ))}
      </Carousel>
    </div>
  );
}
