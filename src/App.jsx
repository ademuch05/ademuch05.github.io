import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import Technologies from "./components/Technologies";
import Activity from "./components/Activity";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  return (
    <div className="overflow-x-hidden antialiased text-neutral-300">
      {/* BACKGROUND */}
      <div className="fixed top-0 -z-10 w-full h-full bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>

      {/* NAVBAR */}
      <div className="mx-auto">
        <Navbar />
      </div>

      <div className="">
        <Hero />
        {/* <Cursor /> */}
      </div>

      {/* PAGES */}
      <div className="container mx-auto px-8">
        <div className="h-screen w-full"></div>
        <Projects />
        <Profile />
        <Technologies />
        <Activity />
        <Contact />
        <Footer />
      </div>

      {/* MUSIC PLAYER */}
      <div className="mx-auto">
        <MusicPlayer />
      </div>
    </div>
  );
}
