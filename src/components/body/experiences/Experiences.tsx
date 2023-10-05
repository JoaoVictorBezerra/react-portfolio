import { Title } from "../../default";
import { Experience } from "./Experience/Experience";
import { ExperienceConstants } from "../../../constants";
import { useState } from "react";
import { AnimationEffect } from "../../animations";

export function Experiences() {
  function handleButtonClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {

    const items = document.querySelectorAll("#company");

    items.forEach((item) => {
      item.classList.remove("bg-background-opacity");
    });

    event.currentTarget.classList.add("bg-background-opacity");

    const experience = ExperienceConstants.find((experience) => experience.company === event.currentTarget.textContent);

    console.log(experience);

    const selected: ExperienceProps = { name: experience!.positionHeld, period: experience!.period, description: experience!.description };

    setCompany(selected);
  }

  const [company, setCompany] = useState<ExperienceProps>({
    name: ExperienceConstants[0].positionHeld,
    period: ExperienceConstants[0].period,
    description: ExperienceConstants[0].description
  });

  return (
    <section id="experience" className="container mx-auto max-w-content pt-20">
      <AnimationEffect
      >
        <Title props="04.Experiências" />
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex md:flex-col items-center text-center md:text-start md:items-start">
            {
              ExperienceConstants.map((company) => {
                return <span className="text-sm cursor-pointer px-[10px] py-[5px] rounded-sm duration-500 mt-2 tracking-label text-primary hover:bg-background-opacity" id="company" onClick={handleButtonClick} key={`data-${company.company.split(" ").join("-").toLowerCase()}`}>{company.company}</span>;
              })
            }
          </div>
          <div id="experiences">
            <Experience key={`data-${company?.name.join().toLowerCase()}`} name={company?.name} period={company.period} description={company.description} />
          </div>
        </div>
      </AnimationEffect>
    </section>
  );
}
