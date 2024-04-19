import Hero from "../components/hero";
import Cards from "../components/cards";
import About from "../components/about";
import Navbar from "../components/navbar";
import "./App.css";
import GetInTouch from "../components/get-in-touch";
import Testimonials from "../components/testimonials";
import Benefit from "../components/benefit";
import MessageBox from "../components/message-box";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { Divider } from "@nextui-org/react";


function App() {
  return (
    <main className="xl:px-40 max-w-screen-2xl relative dark text-foreground lg:px-20 sm:px-10 px-6">
      <MessageBox/>
      <Navbar />
      <Hero />
      <Cards />
      <About />
      <GetInTouch/>
      <Testimonials/>
      <Benefit/>
      <Contact/>
      <Divider/>
      <Footer/>
    </main>
  );
}

export default App;
