import { Card, CardBody, Image, Link } from "@nextui-org/react";
import { X } from "lucide-react";
import React, { useEffect, useState } from "react";

const MessageBox = () => {
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    if (isClosed) {
      setTimeout(() => {
        setIsClosed(false);
      }, 5000000);
    }
  }, [isClosed]);
  if (isClosed) {
    return null;
  }
  return (
    <Card
      isBlurred
      className="fixed z-50 rounded-xl bg-[#FF72E1] text-white bottom-4 right-4 left-4 md:left-auto md:bottom-8 md:right-8 dark:bg-default-400/40 backdrop-blur-lg backdrop-saturate-[1.8]"
    >
      <CardBody className="flex flex-col gap-4 justify-center p-4 lg:p-8 items-center text-center">
        <X
          onClick={() => setIsClosed(true)}
          className="absolute cursor-pointer z-50 top-5 right-5"
          size={40}
        />
        <Link href="https://flexorevps.com/">
          <Image src="/Images/logo-two.png" className="w-[200px]" />
        </Link>

        <h1 className="tracking-tight inline font-semibold text-[2.5rem] lg:text-4xl">
          Visit our new{" "}
          <span className=" from-[#FF705B] to-[#FFB457] bg-clip-text text-transparent bg-gradient-to-b">
            service
          </span>
        </h1>
      </CardBody>
    </Card>
  );
};

export default MessageBox;
