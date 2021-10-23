import { lazy, Suspense } from "solid-js";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import Listing from "./Listing.jsx";

function App() {
  return (
    <div class="text-card font-mono">
      {/* background gradient */}
      <div class="bg-gradient-to-b from-gradt to-gradb fixed left-0 top-0 h-[120vh] md:h-[100vh] w-[100vw] -z-1"></div>
      <Header />
      <Hero />
      <Listing />
    </div>
  );
}

export default App;
