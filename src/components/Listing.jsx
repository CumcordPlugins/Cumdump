import { createSignal, createResource, For, Show } from "solid-js";
import PluginCard from "./PluginCard.jsx";
import fuzzy from "../fuzzy.js";
import getPlugins from "../repoFetcher.js";

export default () => {
  const [search, setSearch] = createSignal("");
  const [plugins] = createResource(getPlugins);

  const searchResults = () => fuzzy(plugins() ?? [], search());

  return (
    <>
      <div class="flex justify-center">
        <input
          class="h-16 mb-10 mx-4 p-4 w-120 flex-1 md:flex-none bg-cardbg border border-black shadow-md"
          placeholder="Search Plugins..."
          type="text"
          value={search()}
          onInput={(e) => setSearch(e.currentTarget.value)}
        />
      </div>

      <div class="grid grid-cols-1 md:(grid-cols-2 mx-20) lg:grid-cols-3 2xl:grid-cols-4 gap-4 mx-4">
        <Show
          when={plugins()}
          fallback={
            <>
              {plugins.loading && "Loading plugins..."}
              {plugins.error ?? []}
            </>
          }
        >
          <For each={searchResults()} fallback="Nothing matched your search">
            {(p) => <PluginCard plugin={p} />}
          </For>
        </Show>
      </div>
    </>
  );
};
