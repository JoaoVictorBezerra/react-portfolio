import {
  Navbars,
  Presentation,
  About,
  Curiousities,
  Experiences,
  Contact,
  Footer,
} from "../components";
import { Helmet } from "react-helmet";
function App() {
  return (

    <div className="h-auto w-full bg-background text-text-primary font-bodyFont">
      <Helmet>
        <title>Portfolio | João Victor</title>
        <meta name="description" content="Portfolio | João Victor" />
      </Helmet>
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
