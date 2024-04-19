import ProgressBar from "./progress";

const About = () => {
  return (
    <section className="flex min-h-screen justify-center flex-col items-center lg:flex-row my-16">
      <div className="md:flex-1 h-full flex gap-4 flex-col justify-center">
        <span className="tracking-tight font-semibold from-[#6FEE8D] to-[#17c964] bg-clip-text text-transparent bg-gradient-to-b">
          FLEXORE GROUP LTD
        </span>
        <h1 className="tracking-tight font-bold text-white inline text-[2.5rem] lg:text-5xl">
          How We Became Best Among Others ?
        </h1>
        <p className="w-full my-2 text-md lg:text-lg font-normal text-default-500 block max-w-full">
          Among Others ? Together with our vision and dedication, we have come a
          long way since we started. Flexore Group LTD has built strong
          credibility among a vast clientele with various business needs.
        </p>
        <ProgressBar label={"SUCCESSFUL PROJECTS"} value={100} />
        <ProgressBar label={"CUSTOMER SATISFACTION"} value={100} />
        <ProgressBar label={"ON-TIME DELIVERY"} value={100} />
      </div>
      <div className="md:flex-1 relative flex justify-end">
        <img
          src="/Images/businext-img29.jpg"
         draggable="false"
          className="w-[380px] z-10 h-[400px] rounded-2xl hidden md:block"
        />
        <img
          src="/green-white.svg"
          className="absolute right-[50%] bottom-[0%]"
          draggable="false"
          width={700}
          height={700}
        />
      </div>
    </section>
  );
};

export default About;
