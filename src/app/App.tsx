import {
  Navbars,
  Presentation,
  About,
  Curiousities,
  Experiences,
  Contact,
  Footer,
} from "../components";
function App() {
  return (

    <div className="h-auto w-full bg-background text-text-primary font-bodyFont">
      <Navbars />
      <div className="mx-auto w-full flex flex-col px-5 py-7">
        <Presentation />
        <About />
        <Curiousities />
        <Experiences />
        <Contact />
        <Footer />
      </div>
    </div>

  );
}

export default App;
