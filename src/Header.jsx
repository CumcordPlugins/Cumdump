import Github from "./Github.jsx";

export default () => (
  <div class="flex bg-header w-full px-24 py-4 shadow-md mb-4">
    <p class="text-accent">cumdump</p>
    {/* spacer */}
    <div class="flex-1" />
    <Github class="h-6 fill-accent" />
  </div>
);
