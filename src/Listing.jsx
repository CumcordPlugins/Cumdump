import { createSignal, createResource } from "solid-js";
import PluginCard from "./PluginCard.jsx";
import fuzzy from "./fuzzy.js";

const repo = "https://cumcordplugins.github.io/Condom/plugins-large.json";

async function getPlugins() {
  const pluginsRaw = await (await fetch(repo)).json();
  const plugins = Object.keys(pluginsRaw).map((key) => {
    let plugin = pluginsRaw[key];
    plugin.url = new URL(key, repo).href;
    return plugin;
  });
  return plugins;
}

export default () => {
  const [search, setSearch] = createSignal("");
  const [signal, sigsend] = createSignal();
  const [plugins] = createResource(signal, getPlugins);
  sigsend("");

  return (
    <div>
      <div class="flex justify-center">
        <input
          class="h-16 mb-10 mx-2 p-4 w-120 flex-1 md:flex-none bg-cardbg border border-black shadow-md"
          placeholder="Search Plugins..."
          type="text"
          value={search()}
          onInput={(e) => {
            setSearch(e.currentTarget.value);
          }}
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mb-4 md:mx-20 mx-2">
        {plugins.loading && "Loading plugins..."}
        {plugins.error ?? []}
        {fuzzy(plugins(), ["name", "author"], search())?.map((plugin) => (
          <PluginCard plugin={plugin} />
        )) ?? []}
      </div>

      <iframe class="h-0" id="teledildonic" />
    </div>
  );
};
