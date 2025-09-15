import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Subtitles } from "lucide-react";
import React from "react";
export default function AboutUsPage() {
  const aboutData = {
    sections: [
      {
        id: 1,
        type: "intro",
        title: <>Source Code <span className="text-[#a2c95c]">Academia</span> is mission of Source Code company.</>,
        content:
          "Source Code Academia is mission of Source Code company. Source Code is a company aiming to trigger the source code of all creation to reach its ultimate purpose. We believe that all the source of knowledge and wisdom to know as well as to achieve the final goal of human beings is engrained within the code of the creation of human beings.",
        media: "/images/img-1.jpg",
      },
      {
        id: 2,
        type: "logo",
        title:
          "Our logo represents the double helix DNA model which carries the code of all we need to know.",
        subTitle:
          "The basis of all our knowledge the requirement of the skills required to set off on the journey, and to complete it is within this code. The attributes that we organically require to set the values are innate and need to be understood deeply. And that’s the basis of setting all our programs, and teachings.",
        content:
          "Our courses and programs, our campaigns and sessions are merely an attempt to make people aware and equipped with the arsenal of getting closer to deciphering this very source code of our existence.",
        media: "/images/Sourcecode-Academia-BE.svg",
      },
      {
        id: 3,
        type: "why",
        title: <>Why <span className="text-[#a2c95c]">Source Code?</span> </>,
        subTitle:
          "The plight of the knowledge, the skills and the attributes of muslims today are the reason why we have decided to reset the clock on all of what the central definitions of these parameters are. The worst thing that can ever happen for a doctrine is the lack of attractiveness of its adherents based on the natural order that every human being demands innately. We call it the original word order. Once the followers of the philosophy start achieving the attributes and speak of the knowledge and deliver it in the required eloquence that is most naturally and organically speaking to the innate questions of every human being, the philosophy takes over the specie without the requirement of any external influence.",
        content:
          "Our contention is that the way islam is described by the last few generations do not carry enough natural attraction that it used to have for every human being to fit the equations of their internal and external sufferings.The very demand of meaning in life is not fulfilled by the description of purpose and meaning by the philosophers of islam today.And the philosophers of islam who did convery the right meanings are made to become irrelevant by the current doctors of philosophy.Its not a fluke that the muslim today even doesn’t find it its his natural self to go towards islam.The problem is not in islam, but the way islam is being defined to him.",
        media: "/images/img-2.jpg"
      },
      {
        id: 4,
        type: "project",
        title:
          <>Source Code <span className="text-[#a2c95c]">Academia</span> is our project to raise the speed of efficiency of achieving this purpose.</>,
        subTitle:
          "The set of courses, the nature of courses, the length and quality of the courses are designed by the academia to ensure the seriousness of our belief in this vision.",
        content:
          "This is the reason we chose training instead of just teaching the concepts so we can hone the knowledge into skills and harness it to evolve the right attributes required for everyone to come together under the same purpose.",
        media: "/images/img-3.jpg",
      },
    ],
  };

  const renderSection = (section) => {
    if (section.type === "intro") {
      return (
        <div className="relative flex gap-10 mx-18 py-16" key={section.id}>
          <img src={section.media} alt="" />
          <div>
            <h1 className="text-[#212529] text-5xl font-semibold">{section.title}</h1>
            <p className="text-[#212529] text-[18px] font-normal mt-8">{section.content}</p>
          </div>
        </div>
      );
    }

    if (section.type === "logo") {
      return (
        <div className="mx-18 pb-16" key={section.id}>
          <div className="absolute top-106 left-15 mx-12">
            <div className="flex gap-9 items-center">
              <img className="h-[190px] w-[189px] shadow-[8px_8px_0px_0px_rgba(50,50,50,1)]" src={section.media} alt="" />
              <h1 className="text-[#212529] text-4xl font-semibold mt-10 ml-4">{section.title}</h1>
            </div>
          </div>
          <div className="mt-30">
            <h2 className="text-[#212529] text-[28px] leading-9 mt-10 mb-5">{section.subTitle}</h2>
            <p className="text-[#212529] text-[18px] font-normal">{section.content}</p>
          </div>
        </div>
      );
    }

    if (section.type === "why") {
      return (
        <div className="" key={section.id}>
          <div className="flex justify-between items-center w-full bg-[#101010]">
            <h1 className="text-white text-[44px] font-bold pl-18">{section.title}</h1>
            <img className="h-72" src={section.media} alt="" />
          </div>
          <div className="mx-18 pb-16">
            <h2 className="text-[#212529] text-[28px] leading-9 mt-10 mb-5">{section.subTitle}</h2>
            <p className="text-[#212529] text-[18px] font-normal">{section.content}</p>
          </div>
        </div>
      );
    }

    if (section.type === "project") {
      return (
        <div className="bg-[#f8f8f8] py-16 px-20" key={section.id}>
          <h1 className="text-[#212529] text-[44px] font-bold mt-8 mb-[30px] leading-[45px]">{section.title}</h1>
          <div className="flex gap-10 items-center">
            <div>
              <h2 className="text-[#212529] text-[28px] leading-8 mb-5">{section.subTitle}</h2>
              <p className="text-[#212529] text-[18px] font-normal">{section.content}</p>
            </div>
            <img className="w-[482px] h-[321px]" src={section.media} alt="" />
          </div>
        </div>

      );
    }
  };

  return (
    <>
      <Header/>
      <div className="pt-[120px]">
        {aboutData.sections.map((section) => renderSection(section))}
      </div>
      <Footer/>
    </>

  );
}
