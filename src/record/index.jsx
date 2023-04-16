import { useAudioRecorder } from "react-audio-voice-recorder";

import { BsXLg, BsMicFill, BsPlusLg, BsPauseFill, BsStopFill } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

import { Icon } from "components/icon";
import {
  ButtonGroup,
  Checkbox,
  List,
  ListItem,
  Page,
  MetaInfo,
  Timer,
  Label,
  InputGroup,
  Input,
  IconContainer,
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

  const [options, setOptions] = useState([]);
  const [timestamps, setTimestamps] = useState([]);

  const handleDiscard = () => {};

  const handleSave = () => {
    stopRecording();

    console.log(window.URL.createObjectURL(recordingBlob));
  };
  const onAddTag = (options) => {
    setOptions(options);
  };

  const handleAdd = () => {
    console.log(options);
    setTimestamps((prev) => {
      const tags = options.map((e) => e.value);
      const time = recordingTime;
      return [...prev, { tags, time }];
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
        <ListItem>
          <IconContainer onClick={handleSave}>
            <BsPlusLg />
          </IconContainer>
          Add tag
        </ListItem>

        {timestamps.map(
          (e) =>
            console.log(e) || (
              <ListItem key={e.time}>
                <Checkbox /> <Label>{e?.tags?.join(",")}</Label>
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
