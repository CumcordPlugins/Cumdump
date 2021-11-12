import { createSignal, createResource } from "solid-js";
import PluginCard from "./PluginCard.jsx";
import fuzzy from "../fuzzy.js";
import getPlugins from "../repoFetcher.js";

export default () => {
  const [search, setSearch] = createSignal("");
  const [signal, sigsend] = createSignal();
  const [plugins] = createResource(signal, getPlugins);
  sigsend("");

  return (
    <div>
      <div class="flex justify-center">
        <input
          class="h-16 mb-10 mx-4 p-4 w-120 flex-1 md:flex-none bg-cardbg border border-black shadow-md"
          placeholder="Search Plugins..."
          type="text"
          value={search()}
          onInput={(e) => {
            setSearch(e.currentTarget.value);
          }}
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:mx-20 mx-4">
        {plugins.loading && "Loading plugins..."}
        {plugins.error ?? []}
        {fuzzy(plugins(), search())?.map((plugin) => (
          <PluginCard plugin={plugin} />
        )) ?? []}
      </div>

      <iframe class="h-0" id="teledildonic" />
    </div>
  );
};
