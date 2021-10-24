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

      <div class="text-right text-subtitle italic m-4">
        <p class="inline">Made with &lt;3 by the Cumcord Team</p>
        <p class="inline-block ml-2"> // Design by Tropical</p>
      </div>
    </div>
  );
}

export default App;
