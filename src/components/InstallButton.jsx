export default ({ url, hash }) => (
  <button
    class="bg-blurple py-1 px-6"
    onClick={() => {
      let css = document.getElementById(`tempcss_${hash}`);
      css.innerText = `#overlay_${hash} { opacity: 1 !important; }`;
      setTimeout(() => {
        css.innerText = "";
      }, 2000);

      navigator.clipboard.writeText(url);

      let iframe = document.getElementById("teledildonic");
      // this can be literally anything, gets around not reloading due to only difference being #
      iframe.src = "cum";
      iframe.onload = () => {
        iframe.src = `https://send.cumcord.com/#${url}`;
      };
    }}
  >
    INSTALL
    <style id={`tempcss_${hash}`} />
  </button>
);
