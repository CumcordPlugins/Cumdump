const repo = "https://cumcordplugins.github.io/Condom/plugins-large.json";

export default async () => {
  const pluginsRaw = await (await fetch(repo)).json();
  const plugins = Object.keys(pluginsRaw).map((key) => {
    let plugin = pluginsRaw[key];
    plugin.url = new URL(key, repo).href;
    return plugin;
  });
  return plugins;
};
