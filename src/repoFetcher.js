const repo = "https://cumcordplugins.github.io/Condom/plugins-large.json";

export default async () => (await (await fetch(repo)).json()).reverse().map(plugin => {
  plugin.url = new URL(plugin.url, repo).href;

  return plugin;
});
