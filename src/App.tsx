import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { ProcessCards } from "./sections/ProcessCards";
import { Process } from "./sections/Process";
import { Reviews } from "./sections/Reviews";
import { AboutMe } from "./sections/AboutME";
import { Services } from "./sections/Services";
import { QuizBlock } from "./quiz/QuizBlock";
import { Faq } from "./sections/Faq";
import { ContactForm } from "./sections/ContactForm";
import { Footer } from "./sections/Footer";
function App() {
  return (
    <div className="min-h-screen bg-[#163060] text-white font-sans antialiased">
      <Header />
      <Hero />
      <AboutMe />
      <Process />
      <ProcessCards />
      <Services />
      <Reviews />
      <QuizBlock />
      <Faq />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;