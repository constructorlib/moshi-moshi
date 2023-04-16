import { AudioRecorder } from "react-audio-voice-recorder";

const addAudioElement = (blob) => {
  const url = URL.createObjectURL(blob);
  const audio = document.createElement("audio");
  audio.src = url;
  audio.controls = true;
  document.body.appendChild(audio);
};

const Foo = () => {
  return <AudioRecorder onRecordingComplete={addAudioElement} />;
};

export default Foo;
