import clipboard from "../assets/clipboard.png";

export default ({ content }) => (
  <button
    class="bg-blurple p-1.5 mr-2"
    onClick={() => navigator.clipboard.writeText(content)}
  >
    <img src={clipboard} alt="copy" class="h-4 filter invert" />
  </button>
);
