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
} from "./index.styled";
import { getFormatedTime } from "utils/time";
import Modal from "components/modal";
import ElasticSearch from "components/elasticSearch";
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

  const [modal, setModal] = useState(false);
  const storedOptions = JSON.parse(localStorage.getItem("tags")) ?? [];
  const [options, setOptions] = useState(storedOptions);
  const [timestamps, setTimestamps] = useState([]);

  const handleDiscard = () => {
    localStorage.setItem("tags", options);
  };

  const handleSave = () => {
    stopRecording();
    localStorage.setItem("tags", options);
    console.log(window.URL.createObjectURL(recordingBlob));
  };
  const onAddTag = (options) => {
    console.log(options);
    setOptions((prev) => [...prev, ...options]);
    setTimestamps((prev) => {
      options.forEach((e) => (e.time = recordingTime));
      return options;
    });
  };
  const initState = () => (
    <Icon
      onClick={startRecording}
      style={{ marginTop: "-5rem" }}
      icon={BsMicFill}
      size="lg"
      bgc="brand"
    />
  );

  const handleAdd = () => {
    setModal(true);
  };

  const recordingState = () => {
    return (
      <>
        <Icon onClick={stopRecording} icon={BsStopFill} bgc="dim">
          Stop
        </Icon>

        <Icon
          onClick={togglePauseResume}
          style={{ marginTop: "-5rem" }}
          icon={BsPauseFill}
          size="lg"
          bgc="brand"
        />

        <Icon onClick={handleAdd} icon={BsPlusLg} bgc="dim">
          Add
        </Icon>
      </>
    );
  };
  const pausedState = () => {
    return (
      <>
        <Icon onClick={handleDiscard} icon={BsXLg} bgc="dim">
          Discard
        </Icon>

        <Icon
          onClick={togglePauseResume}
          style={{ marginTop: "-5rem" }}
          icon={BsMicFill}
          size="lg"
          bgc="brand"
        />

        <Icon onClick={handleSave} icon={AiOutlineCheck} bgc="dim">
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
        {timestamps.map(
          (e) =>
            console.log(e) || (
              <ListItem key={e.label}>
                <Checkbox /> <Label>{e.label}</Label>
              </ListItem>
            )
        )}
      </List>

      <ButtonGroup>
        {!isRecording && initState()}
        {isRecording && !isPaused && recordingState()}
        {isRecording && isPaused && pausedState()}
      </ButtonGroup>

      <Modal centered onHide={() => setModal(false)} show={modal}>
        <ElasticSearch placeholder="Add note" options={storedOptions} onChange={onAddTag} />
      </Modal>
    </Page>
  );
};

export default Record;
