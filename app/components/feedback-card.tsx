import { Card, CardContent, CardHeader } from "./ui/card";

interface FeedbackCardProps {
  name: string;
  title: string;
  content: string;
  img: string;
}

// INFO[source-for-css]: https://medium.com/@ryaddev/building-a-testimonials-carousel-with-react-nuka-carousel-and-tailwind-css-b34686d61880
export function FeedbackCard({ name, title, content, img }: FeedbackCardProps) {
  return (
    <Card className="p-4 shadow-md hover:shadow-inner">
      <img
        src={"https://i.imgur.com/rx3eOUo.png"}
        alt="double_quotes"
        className="w-[42.6px] h-[27.6px] object-contain"
      />
      <CardHeader className="font-normal text-[18px] leading-[32.4px]my-10">
        <blockquote>{content}</blockquote>
      </CardHeader>
      <CardContent className="flex items-center flex-wrap sm:flex-nowrap">
        <img src={img} alt="User" className="w-10 h-10 rounded-full mr-4" />
        <span>
          <span className="font-semibold text-[20px] leading-[32px]">
            {name}
          </span>
          &nbsp;|&nbsp;
          <span className="font-normal text-[16px] leading-[24px] text-accent-foreground">
            {title}
          </span>
        </span>
      </CardContent>
    </Card>
  );
}
