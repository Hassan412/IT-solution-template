import {
  Button,
  Card,
  CardBody,
  Input,
  Radio,
  RadioGroup,
  Textarea,
} from "@nextui-org/react";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import SocialIcons from "./social-icons";

const Contact = () => {
  const ContactInfo = [
    {
      Icon: Phone,
      Info: "+35799010241",
    },
    {
      Icon: Mail,
      Info: "info@flexoregroup.com",
    },
    {
      Icon: MapPin,
      Info: "Nikolaou Nikolaidi, 10 PITTAKEIO MEGARO, 3rd floor, Flat/Office 305 8010, Paphos, Cyprus",
    },
  ];
  return (
    <section className="flex flex-col gap-4 justify-center items-center my-32">
      <h1 className="tracking-tight font-semibold inline text-[2.5rem] lg:text-5xl text-white">
        Contact Us
      </h1>
      <p className="text-lg text-neutral-400 text-center">
        Any question or remarks? Just write us a message!
      </p>
      <div className="flex flex-col lg:flex-row w-full mt-16 lg:mt-32 gap-12">
        <div className="flex basis-[40%] flex-col gap-4 items-start">
          <h2 className="lg:text-3xl text-2xl font-medium text-white">
            Contact Information
          </h2>
          <p className="text-lg text-neutral-400">
            Fill up the form and our Team will get back to you within 24 hours
          </p>
          <div className="flex flex-col gap-6 mt-10">
            {ContactInfo.map((data) => (
              <Card
                isBlurred
                className="bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
              >
                <CardBody className="p-5">
                  <div className="text-white gap-4">
                    <data.Icon size={20} className="inline mr-4" />
                    <p className="text-base font-semibold inline">
                      {data.Info}
                    </p>
                  </div>
                </CardBody>
              </Card>
            ))}
            <div className="flex gap-6 mt-16">
              <SocialIcons />
            </div>
          </div>
        </div>
        <form
          className="basis-[60%] flex flex-col gap-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid w-full sm:grid-cols-2 mb-6 md:mb-0 gap-12">
            <Input
              type="text"
              isClearable
              required
              color="secondary"
              placeholder="John"
              variant={"underlined"}
              label="First Name"
            />
            <Input
              type="text"
              isClearable
              required
              color="secondary"
              variant={"underlined"}
              placeholder="Doe"
              label="Last Name"
            />
            <Input
              type="email"
              color="secondary"
              isClearable
              required
              variant={"underlined"}
              placeholder="Your Email"
              label="Mail"
            />
            <Input
              required
              type="number"
              color="secondary"
              placeholder="Phone Number"
              isClearable
              variant={"underlined"}
              label="Phone"
            />
          </div>

          <RadioGroup
            label="What services may we assist you with?"
            className={"gap-6 text-lg"}
            orientation="horizontal"
            color="secondary"
            isRequired
          >
            <Radio value="Consultation" className={"mr-4"}>
              Consultation
            </Radio>
            <Radio value="Development" className={"mr-4"}>
              Development
            </Radio>
            <Radio value="Design" className={"mr-4"}>
              Design
            </Radio>
            <Radio value="Support" className={"mr-4"}>
              Support
            </Radio>
            <Radio value="other">Other</Radio>
          </RadioGroup>
          <Textarea
            variant={"underlined"}
            label="Message"
            labelPlacement="outside"
            placeholder="Write your message.."
            required
          />
          <Button
            type="submit"
            className="self-end py-7 px-12 text-base rounded-md bg-[#FF705B]"
            variant={"solid"}
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
