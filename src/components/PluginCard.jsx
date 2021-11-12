import InstallButton from "./InstallButton.jsx";

export default ({ plugin }) => (
  <div class="bg-cardbg border-black border shadow-md p-2 min-h-38 grid">
    {/* card to show over the top when installed */}
    <div id={`overlay_${plugin.hash}`} class="transition-all opacity-0 pointer-events-none row-start-1 col-start-1 z-1 -m-2 bg-gradient-to-t from-gradt to-gradb">
      <h2 class="text-2xl mt-4 text-center">Using Discord Web?</h2>
      <p class="mt-2 text-center">
        I've copied the link to your clipboard. Paste it into the Cumcord
        Plugins panel in settings.
      </p>
    </div>

    {/* card contents */}
    <div class="flex flex-col row-start-1 col-start-1">
      <div class="text-lg">{plugin.name}</div>
      <div class="text-sm">{plugin.description}</div>

      <div class="flex-1" />

      <div class="bg-cardbgalt h-12 -m-2 mt-4 text-sm flex items-center p-2">
        {plugin.author}
        <div class="flex-1" />
        <InstallButton url={plugin.url} hash={plugin.hash} />
      </div>
    </div>
  </div>
);
