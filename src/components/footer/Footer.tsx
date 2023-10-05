import { Github, Linkedin } from "lucide-react";
import { AnimationEffect } from "../animations";
export function Footer() {
  return (
    <footer className="container max-w-content mx-auto text-center pt-20">
      <AnimationEffect>
        <p className="tracking-label text-sm text-text-secondary">Powered by João Victor</p>
        <div className="flex flex-row justify-center gap-2 mt-2">
          <Linkedin className="text-primary" />
          <Github className="text-primary" />
        </div>
      </AnimationEffect>
    </footer>
  );
}
