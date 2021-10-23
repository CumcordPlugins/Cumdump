export default ({ url }) => (
  <button
    class="bg-blurple py-1 px-6"
    onClick={() => {
      let iframe = document.getElementById("teledildonic");
      iframe.src = `https://send.cumcord.com/#${url}`;
    }}
  >
    INSTALL
  </button>
);
