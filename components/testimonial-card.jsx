import {
  Card,
  CardHeader,
  CardBody,
  Image,
  //Link,
} from "@nextui-org/react";

const TestimonialCard = ({ heading, text, Icon, Info }) => {
  return (
    <Card
      isBlurred
      className="bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
    >
      <CardHeader className="flex gap-3 pb-0">
        <div className="rounded-full bg-secondary-400/20 p-1 justify-center items-center flex">
          <img src={Icon} className="w-12 h-12 rounded-full" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold text-white">{heading}</h2>
          <span className="text-neutral-400 text-lg">{Info}</span>
        </div>
      </CardHeader>

      <CardBody>
        <p className="text-neutral-200 font-light text-sm">{`"${text}"`}</p>
      </CardBody>
    </Card>
  );
};

export default TestimonialCard;
