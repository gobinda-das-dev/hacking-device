import { Howl } from "howler";

const downAudio = new Howl({ src: '/audio/backspace/press.mp3' });
const upAudio = new Howl({ src: '/audio/backspace/up.mp3' });

export { downAudio, upAudio };