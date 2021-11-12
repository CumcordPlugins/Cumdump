import "virtual:windi.css";
import "virtual:windi-devtools";

import { render } from "solid-js/web";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Listing from "./components/Listing.jsx";

const App = () => (
  <div class="text-card font-mono flex flex-col min-h-screen">
    {/* background gradient */}
    <div class="bg-gradient-to-b from-gradt to-gradb fixed left-0 top-0 h-[120vh] md:h-[100vh] w-[100vw] -z-1"></div>
    <Header />
    <Hero />
    <Listing />

    <div class="flex-1" />

    <div class="text-right text-subtitle italic m-4">
      <p class="inline">Made with &lt;3 by the Cumcord Team</p>
      <p class="inline-block ml-2"> // Design by Tropical</p>
    </div>
  </div>
);

render(App, document.getElementById("root"));
