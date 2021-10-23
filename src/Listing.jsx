import { createSignal, createResource } from "solid-js";
import PluginCard from "./PluginCard.jsx";

const repo = "https://cumcordplugins.github.io/Condom/plugins-large.json";

async function getPlugins() {
  const pluginsRaw = await (await fetch(repo)).json();
  const plugins = Object.keys(pluginsRaw).map((key) => {
    let plugin = pluginsRaw[key];
    plugin.url = key;
    return plugin;
  });
  return plugins;
}

export default () => {
  const [signal, sigsend] = createSignal();
  const [plugins] = createResource(signal, getPlugins);
  sigsend("");

  return (
    <div class="mx-20">
      <h2 class="text-xl text-text-secondary mb-4">all plugins</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mb-4">
        {plugins.loading && "Loading plugins..."}
        {plugins.error ?? []}
        {plugins()?.map((plugin) => <PluginCard plugin={plugin} />) ?? []}
      </div>

      <iframe class="hidden" id="teledildonic" />
    </div>
  );
};
