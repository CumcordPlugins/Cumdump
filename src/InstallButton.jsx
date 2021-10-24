export default ({ url }) => (
  <button
    class="bg-blurple py-1 px-6"
    onClick={() => {
      let iframe = document.getElementById("teledildonic");
      // this can be literally anything, gets around not reloading due to only difference being #
      iframe.src = "cum";
      iframe.onload = () => {
        iframe.src = `https://send.cumcord.com/#${url}`;
      };
    }}
  >
    INSTALL
  </button>
);
