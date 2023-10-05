import { Gi, Mind, Workout } from "../../../assets";
import { Title } from "../../default";
import { OpacityBox } from "../../default/opacity box/opacity_box";
import { AnimationEffect } from "../../animations";

export function Curiousities() {
  return (
    <section id="curiousities" className="container mx-auto max-w-content pt-20">
      <AnimationEffect
      >
        <Title props="03.Curiosidades" />
        <p className="text-sm mt-2 text-text-secondary">Sou uma pessoa que gosta bastante de praticar esportes, atualmente eu pratico musculação e também pratico Jiu Jitsu.
          Estudar acabou virando também uma paixão para mim, sou bem interessado em estudar e principalmente quando o assunto é tecnologia.</p>
        <div className="flex items-center justify-center lg:justify-start gap-2 mt-7 w-full">
          <OpacityBox Icon={Gi} />
          <OpacityBox Icon={Workout} />
          <OpacityBox Icon={Mind} />
        </div>
      </AnimationEffect>
    </section>
  );
}
