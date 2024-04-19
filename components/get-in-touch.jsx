import { Button, Card, CardBody } from "@nextui-org/react";
import React from "react";

const GetInTouch = () => {
  return (
    <section className="w-full mb-20">
      <Card
        isBlurred
        className="bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
      >
        <CardBody>
          <div className="flex justify-center text-center items-center">
            <div className="flex gap-2 flex-col text-white">
              <h1 className="tracking-tight font-semibold text-[2.5rem] lg:text-5xl">
                Need a successful
              </h1>

              <h1 className="tracking-tight font-semibold text-[2.5rem] lg:text-5xl from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b ">
                Project?
              </h1>
              <p className="text-neutral-400 text-lg">
                Where Innovation Meets Business Growth!
              </p>
              <Button
                color="secondary"
                className="px-8 mt-4 py-6 self-center rounded-full font-medium text-md"
              >
                Get in touch
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </section>
  );
};

export default GetInTouch;
