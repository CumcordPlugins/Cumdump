import Github from "./Github.jsx";
import condomimg from "./assets/condom.png";
import cumcordimg from "./assets/cumcord.png";

export default () => (
  <div class="flex <md:justify-center justify-between bg-navbg text-navfg w-full px-24 py-4 shadow-md mb-4">
    <div>
      <img src={condomimg} class="inline h-6 mr-2 rounded" />
      <p class="inline">cumdump</p>
    </div>

    <a class="<md:hidden group flex items-center pr-2" href="https://cumcord.com">
      <img
        src={cumcordimg}
        /* sorry so much about this class mess */
        class="rounded transition-all duration-250 opacity-0 -mr-6 w-0 h-0 group-hover:(opacity-100 mr-2 w-6 h-6) group-focus:(opacity-100 mr-2 w-6 h-6)"
      />
      Back to cumcord
    </a>

    <a href="https://github.com/Cumcord" target="_blank">
      <Github class="h-6 fill-navfg <md:hidden" />
    </a>
  </div>
);
