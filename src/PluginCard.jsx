import InstallButton from "./InstallButton.jsx";

export default ({ plugin }) => (
  <div class="bg-cardbg border-black border shadow-md p-2 min-h-38 flex flex-col">
    <div class="text-lg">{plugin.name}</div>
    <div class="text-sm">{plugin.description}</div>

    <div class="flex-1" />

    <div class="bg-cardbgalt h-12 -m-2 mt-4 text-sm flex items-center p-2">
        {plugin.author}
        <div class="flex-1" />
        <InstallButton url={plugin.url} />
    </div>
  </div>
);
