import { WritterEffect } from "../../default";
import { AnimationEffect } from "../../animations";

export function Presentation() {
  return (
    <section id="home" className="container mx-auto text-center max-w-content pt-20">
      <AnimationEffect>

        <h1 className="font-medium text-3xl">Olá, sou o <span className="text-primary">João Victor</span>.</h1>
        <div className="flex items-center justify-center font-medium text-lg lg:text-2xl gap-2">
          <p>Um</p>
          <span className='text-primary'>
            <WritterEffect texts={["desenvolvedor front-end", "desenvolvedor mobile", "estudante de tecnologia"]} />
          </span>

        </div>
        <p className="text-text-secondary text-sm mt-5">Estudante de tecnologia desde 2021, tive o privilégio de participar de projetos incríveis e somar minhas experiências que venho adquirindo ao longo desses anos de estudo. Minha maior afinidade engloba o desenvolvimento <span className="text-primary">front-end</span> e o desenvolvimento <span className="text-primary">mobile</span>. Atualmente estou bem focado em desenvolver soluções para web e para dispositivos móveis.</p>
        {/* </motion.div > */}
      </AnimationEffect>
    </section>
  );
}