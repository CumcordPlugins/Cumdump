import PluginCard from "./PluginCard.jsx";

const repo = "https://cumcordplugins.github.io/Condom/plugins-large.json";

export default () => {
  // ik that xmlhttprequest, especially non-async, is awful,
  // but i just cant deal with async solid components today
  const xhr = new XMLHttpRequest();
  xhr.open("GET", repo, false);
  xhr.send();
  const pluginsRaw = JSON.parse(xhr.responseText);
  const plugins = Object.keys(pluginsRaw).map((key) => {
    let plugin = pluginsRaw[key];
    plugin.url = key;
    return plugin;
  });

  console.log(plugins);

  return (
      <div class="mx-20">
        <h2 class="text-xl text-text-secondary mb-4">all plugins</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mb-4">
          {plugins.map((plugin) => (
            <PluginCard plugin={plugin} />
          ))}
        </div>

        <iframe class="hidden" id="teledildonic" />
      </div>
  );
};
