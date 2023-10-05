import { CopyCheck } from "lucide-react";
import { WritterEffect } from "../../../default";

export function Experience({ name, period, description }: ExperienceProps) {
  return (
    <div>
      <span className="text-2xl">
        <WritterEffect texts={name} />
      </span>
      <p className="text-sm text-text-secondary tracking-label">{period}</p>
      <div id="experience__information" className="flex flex-col gap-2 mt-5">
        {description.map((item, index) => {
          return <div key={index} id="experience__description" className="flex items-center gap-2">
            <CopyCheck className="text-primary w-[18px] h-[18px]" />
            <p className="text-sm text-text-secondary">{item}</p>
          </div>;
        })}
      </div>
    </div>
  );
}
