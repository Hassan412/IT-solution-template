import React from "react";
import Cards from "./card";
import TestimonialCard from "./testimonial-card";

const Testimonials = () => {
  return (
    <section className="flex flex-col gap-8 my-48">
      <div className="flex flex-col text-white gap-2 justify-center text-center w-full items-center">
        <div>
          <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">
            Customer&nbsp;
          </h1>
          <h1 className="tracking-tight inline font-semibold from-[#FF705B] to-[#FFB457] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">
            Voices
          </h1>
        </div>
        <div>
          <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">
            Speak&nbsp;
          </h1>
          <h1 className="tracking-tight inline font-semibold from-[#FF72E1] to-[#F54C7A] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">
            Volumes.
          </h1>
        </div>
        <p className="text-neutral-400 text-lg my-3">Discover the Stories Behind Satisfaction.</p>
      </div>
      <div className="grid xl:grid-cols-3 gap-6 md:grid-cols-2">
        <TestimonialCard
          heading={"Lorem ipsum dolor sit amet."}
          Info={"Hassan Abdullah"}
          Icon={"https://picsum.photos/200/300"}
          text={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea et ad optio beatae aperiam. Saepe aut dicta beatae reprehenderit ipsa vitae maiores perspiciatis dolore accusantium porro, voluptate nisi dolorem accusamus, eum voluptates doloribus"
          }
        />
        <TestimonialCard
          heading={"Lorem ipsum dolor sit amet."}
          Info={"Hassan Abdullah"}
          Icon={"https://picsum.photos/200/300"}
          text={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea et ad optio beatae aperiam. Saepe aut dicta beatae reprehenderit ipsa vitae maiores perspiciatis dolore accusantium porro, voluptate nisi dolorem accusamus, eum voluptates doloribus consequatur corrupti"
          }
        />
        <TestimonialCard
          heading={"Lorem ipsum dolor sit amet."}
          Info={"Hassan Abdullah"}
          Icon={"https://picsum.photos/200/300"}
          text={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea et ad optio beatae aperiam. Saepe aut dicta beatae reprehenderit ipsa vitae maiores perspiciatis dolore accusantium porro, voluptate nisi dolorem accusamus, eum voluptates doloribus consequatur"
          }
        />
        <TestimonialCard
          heading={"Lorem ipsum dolor sit amet."}
          Info={"Hassan Abdullah"}
          Icon={"https://picsum.photos/200/300"}
          text={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea et ad optio beatae aperiam. Saepe aut dicta beatae reprehenderit ipsa vitae maiores perspiciatis dolore accusantium porro, voluptate nisi dolorem accusamus, eum voluptates doloribus consequatur"
          }
        />
        <TestimonialCard
          heading={"Lorem ipsum dolor sit amet."}
          Info={"Hassan Abdullah"}
          Icon={"https://picsum.photos/200/300"}
          text={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea et ad optio beatae aperiam. Saepe aut dicta beatae reprehenderit ipsa vitae maiores perspiciatis dolore accusantium porro, voluptate nisi dolorem accusamus, eum voluptates doloribus consequatur"
          }
        />
        <TestimonialCard
          heading={"Lorem ipsum dolor sit amet."}
          Info={"Hassan Abdullah"}
          Icon={"https://picsum.photos/200/300"}
          text={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea et ad optio beatae aperiam. Saepe aut dicta beatae reprehenderit ipsa vitae maiores perspiciatis dolore accusantium porro, voluptate nisi dolorem accusamus, eum voluptates doloribus consequatur"
          }
        />
      </div>
    </section>
  );
};

export default Testimonials;
