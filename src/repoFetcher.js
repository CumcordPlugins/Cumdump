const repo = "https://cumcordplugins.github.io/Condom/plugins-large.json";

export default () =>
  fetch(repo)
    .then((r) => r.json())
    .then((plugins) =>
      plugins
        .reverse()
        .map((p) => ({ ...p, url: new URL(p.url, repo).href }))
    );
