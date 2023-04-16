import { useAudioRecorder } from "react-audio-voice-recorder";
import { v4 as uuidv4 } from "uuid";

import {
  BsXLg,
  BsMicFill,
  BsPlusLg,
  BsPauseFill,
  BsStopFill,
  BsFillTrash3Fill,
} from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

import { Icon } from "components/icon";
import {
  ButtonGroup,
  _checkbox,
  List,
  ListItem,
  Page,
  MetaInfo,
  Timer,
  Label,
  InputGroup,
  Input,
  IconContainer,
  Checkbox,
  CheckboxContent,
} from "./index.styled";
import { getFormatedTime } from "utils/time";
import { useState } from "react";

const Record = () => {
  const {
    startRecording,
    stopRecording,
    togglePauseResume,
    recordingBlob,
    isRecording,
    isPaused,
    recordingTime,
  } = useAudioRecorder();

  const [timestamps, setTimestamps] = useState([]);
  const [toggleInput, setToggleInput] = useState(false);
  const [value, setValue] = useState("");

  const handleDiscard = () => {};

  const handleSave = () => {
    stopRecording();

    console.log(window.URL.createObjectURL(recordingBlob));
  };
  const handleChange = (e) => {
    console.log(e);
    console.log(e.keyCode);
  };

  const handleAdd = () => {
    setTimestamps((prev) => {
      const time = recordingTime;
      return [...prev, { time }];
    });
  };

  //********************* RECORDING STATES ***********************
  const initState = () => (
    <Icon
      onClick={startRecording}
      style={{ marginTop: "-5rem" }}
      icon={BsMicFill}
      size="lg"
      bgc="brand"
    />
  );
  const recordingState = () => {
    return (
      <>
        <Icon onClick={stopRecording} icon={BsStopFill} bgc="dim" size="md">
          Stop
        </Icon>

        <Icon
          onClick={togglePauseResume}
          style={{ marginTop: "-5rem" }}
          icon={BsPauseFill}
          size="lg"
          bgc="brand"
        />

        <Icon icon={BsPlusLg} bgc="dim" size="md">
          Add
        </Icon>
      </>
    );
  };
  const pausedState = () => {
    return (
      <>
        <Icon onClick={handleDiscard} icon={BsXLg} bgc="dim" size="md">
          Discard
        </Icon>

        <Icon
          onClick={togglePauseResume}
          style={{ marginTop: "-5rem" }}
          icon={BsMicFill}
          size="lg"
          bgc="brand"
        />

        <Icon onClick={handleSave} icon={AiOutlineCheck} bgc="dim" size="md">
          Save
        </Icon>
      </>
    );
  };

  return (
    <Page>
      <MetaInfo>
        <Timer>{getFormatedTime(recordingTime)}</Timer>
      </MetaInfo>
      <List>
        <ListItem
          onClick={
            toggleInput
              ? () => console.log("toggleInput: True")
              : () => setToggleInput((prev) => !prev)
          }
        >
          <IconContainer border="brand" bgc="brand" onClick={handleSave}>
            <BsPlusLg style={{ fill: "rgba(var(--text-color))" }} />
          </IconContainer>
          {toggleInput ? (
            <Input
              onChange={({ target }) => setValue(target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.code === "Enter" || e.keyCode === 13) {
                  setTimestamps((prev) => [
                    { id: uuidv4(), tag: value, time: recordingTime },
                    ...prev,
                  ]);
                  setToggleInput(false);
                }
              }}
              autoFocus
              placeholder="Press enter to add a tag"
            />
          ) : (
            <span>Add a tag</span>
          )}
        </ListItem>

        {timestamps.map(
          (e) =>
            console.log(e) || (
              <ListItem key={e?.id}>
                <Checkbox border="text" onClick={handleSave}></Checkbox>
                <Label style={{ flexGrow: "1" }}>{e?.tag}</Label>

                <BsFillTrash3Fill
                  onClick={() => {
                    setTimestamps((prev) => prev.filter((tag) => tag?.id !== e?.id));
                  }}
                  style={{ width: "2rem", height: "2rem", fill: "rgba(var(--text-color))" }}
                />
              </ListItem>
            )
        )}
      </List>

      <ButtonGroup>
        {!isRecording && initState()}
        {isRecording && !isPaused && recordingState()}
        {isRecording && isPaused && pausedState()}
      </ButtonGroup>
    </Page>
  );
};

export default Record;
