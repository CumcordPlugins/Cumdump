import Fuse from "fuse.js";

export default (set, search) =>
  !search
    ? set
    : new Fuse(set, {
        threshold: 0.5,
        useExtendedSearch: true,
        keys: ["name", "author"],
      })
        .search(search)
        .map((searchResult) => searchResult.item);
