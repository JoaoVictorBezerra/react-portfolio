import { OpacityBox } from "../../default/opacity box/opacity_box";

import { React, CSS, Flutter, HTML, Sass, Javascript, Tailwind, Typescript, Developer } from "../../../assets";
import { Title } from "../../default";
import { AnimationEffect } from "../../animations";

export function About() {
  return (
    <section id="about" className="container mx-auto max-w-content pt-20">
      <AnimationEffect
      >
        <Title props="02.Sobre" />
        <p className="text-text-secondary text-sm mt-2">Formando em Sistemas de Informação, comecei a carreira de desenvolvedor no começo de 2022, a primeira tecnologia que eu tive contato foi SQL, linguagem para banco de dados.
          Pude contribuir minhas experiências em diversos projetos. Sou um entusiasta de desenvolvimento front-end, apesar também de gostar bastante de desenvolvimento back-end, e deixarei abaixo algumas tecnologias que eu tive contato.</p>
        <div className="flex flex-col items-center gap-12 lg:gap-12 mt-7 lg:flex-row w-full">
          <div className="flex flex-row justify-center gap-2 flex-wrap w-[336px]">
            <OpacityBox Icon={HTML} />
            <OpacityBox Icon={CSS} />
            <OpacityBox Icon={Javascript} />
            <OpacityBox Icon={Typescript} />
            <OpacityBox Icon={React} />
            <OpacityBox Icon={Sass} />
            <OpacityBox Icon={Tailwind} />
            <OpacityBox Icon={Flutter} />
          </div>
          <div className="group/developer w-[300px] h-[317px] lg:w-[160px] lg:h-[172px] bg-black/20 p-2 rounded-md border-2 border-solid border-transparent hover:border-primary duration-500">
            <img className="opacity-70 group-hover/developer:opacity-100 transition-all duration-100 w-full h-full object-contain" src={Developer} alt="React" />
          </div>
        </div>
      </AnimationEffect>
    </section>
  );
}
