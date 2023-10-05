import { Button, Title } from "../../default";
import { AnimationEffect } from "../../animations";


export function Contact() {
  return (
    <section id="contact" className="container max-w-content mx-auto pt-20">
      <AnimationEffect>
        <Title props="05.Contato" />
        <p className="text-sm text-text-secondary mt-2">Deixarei meu currículo e o meu <a className="text-primary" href="mailto:dev.joaovictor@hotmail.com" target="_blank">email</a> abaixo caso você queira entrar em contato comigo. Sinta-se a vontade!</p>
        <p className="text-sm text-text-secondary">Também deixarei o meu <a className="text-primary" href="https://www.linkedin.com/in/jo%C3%A3o-victor-bezerra-a62b62204/" target="_blank">Linkedin</a> para você fazer uma conexão.</p>
        <Button>Download CV</Button>
      </AnimationEffect>
    </section>
  );
}
