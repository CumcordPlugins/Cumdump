import { createSignal } from "solid-js";
import CopyButton from "./CopyButton.jsx";
import InstallButton from "./InstallButton.jsx";

export default ({ plugin }) => {
  const [showOverlay, setShowOverlay] = createSignal(false);

  return (
    <div class="bg-cardbg border-black border shadow-md p-2 min-h-38 grid">
      {/* overlay on install click */}
      <div
        class="transition-opacity pointer-events-none row-start-1 col-start-1 z-1 -m-2 bg-gradient-to-t from-gradt to-gradb"
        style={{ opacity: showOverlay() ? 1 : 0 }}
      >
        <h2 class="text-2xl mt-4 text-center">Using Discord Web?</h2>
        <p class="mt-2 text-center">
          I can't send the plugin to web Discord. Please click the copy button
          below to copy the import link.
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
          <CopyButton content={plugin.url} />
          <InstallButton
            url={plugin.url}
            {...{ setShowOverlay }}
          />
        </div>
      </div>
    </div>
  );
};
