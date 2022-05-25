import cummunicate from "@cumjar/cummunicate";

export default ({ url, setShowOverlay }) => (
  <button
    class="bg-blurple py-1 px-6"
    onClick={() => {
      setShowOverlay(true);
      setTimeout(() => setShowOverlay(false), 2000);

      cummunicate("install_plugin", { url }).then(console.log, console.error);
    }}
  >
    INSTALL
  </button>
);
