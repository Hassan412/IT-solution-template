import { Button, Card, CardBody, Image, Link } from "@nextui-org/react";
import {
  Blocks,
  Expand,
  HandHelping,
  LineChart,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import React from "react";

const Benefit = () => {
  const cards = [
    {
      Icon: <TrendingUp />,
      Label: "Streamlined Efficiency",
    },
    {
      Icon: <ShieldCheck />,
      Label: "Enhanced Security",
    },
    {
      Icon: <Expand />,
      Label: "Scalable Solutions",
    },
    {
      Icon: <Blocks />,
      Label: "Seamless Integration",
    },
    {
      Icon: <LineChart />,
      Label: "Real-time Insights",
    },
    {
      Icon: <HandHelping />,
      Label: "Superior Support",
    },
  ];
  return (
    <section className="text-white flex flex-col lg:flex-row mb-64 gap-8 radient-gradient relative z-10">
      <div className="gap-2 flex-col py-8 items-start justify-center w-full flex flex-1 md:block">
        <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">
          Unlock the Power of
        </h1>
        <div>
          <h1 className="tracking-tight inline font-semibold from-[#FF72E1] to-[#F54C7A] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">
            IT Solution
          </h1>
        </div>
        <p className="text-neutral-400 text-lg">
          Discover the unparalleled advantages of integrating Your IT Solution
          into your business ecosystem. Here's why our solution stands out:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mt-8 w-full">
          {cards.map((card) => (
            <Card
              isBlurred
              className="bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
            >
              <CardBody className="p-5">
                <div className="flex text-white gap-4">
                  {card.Icon}
                  <p className="text-base font-semibold">{card.Label}</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        <Button
          href="#"
          as={Link}
          color="success"
          className="rounded-full mt-6"
          variant="flat"
        >
          Lean more
        </Button>
      </div>
      <div className="flex-1 flex items-end relative z-20">
        <img src="/benefit.svg" className="w-full rounded-3xl fill-black" />
      </div>
    </section>
  );
};

export default Benefit;
