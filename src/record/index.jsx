import { useAudioRecorder } from "react-audio-voice-recorder";

import { BsXLg, BsMicFill, BsPlusLg, BsPauseFill, BsStopFill } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { VscDiscard } from "react-icons/vsc";

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
  ModalContent,
  InputGroup,
  Input,
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

  const [options, setOptions] = useState([]);
  const [timestamps, setTimestamps] = useState([]);

  const handleDiscard = () => {};

  const handleSave = () => {
    stopRecording();

    console.log(window.URL.createObjectURL(recordingBlob));
  };
  const onAddTag = (options) => {
    console.log(options);
    setOptions(options);
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
    console.log(options);
    setTimestamps((prev) => {
      const tags = options.map((e) => e.value);
      const time = recordingTime;
      return [...prev, { tags, time }];
    });
    setModal(false);
  };

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

        <Icon onClick={() => setModal(true)} icon={BsPlusLg} bgc="dim" size="md">
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
        <ListItem onClick={() => setModal(true)}>
          <Icon
            container={
              "flex-direction: row; justify-content: start; font-size: 16px; margin-right: 20px"
            }
            icon={BsPlusLg}
            bgc="dim"
            size="sm"
          >
            Add a tag
          </Icon>
        </ListItem>
        {timestamps.map(
          (e) =>
            console.log(e) || (
              <ListItem key={e.time}>
                <Checkbox /> <Label>{e?.tags?.join(",")}</Label> --- {e.time}
              </ListItem>
            )
        )}
      </List>

      <ButtonGroup>
        {!isRecording && initState()}
        {isRecording && !isPaused && recordingState()}
        {isRecording && isPaused && pausedState()}
      </ButtonGroup>

      <Modal centered onHide={() => console.log("e") || setModal(false)} show={modal}>
        <ModalContent>
          <InputGroup>
            <Input type="number" defaultValue={12} /> -
            <Input type="number" defaultValue={12 + 4} />
          </InputGroup>
          <InputGroup>
            <ElasticSearch autoFocus placeholder="Add note" onChange={onAddTag} />
          </InputGroup>
          <ButtonGroup>
            <Icon onClick={stopRecording} icon={VscDiscard} bgc="dim">
              Discard
            </Icon>
            <Icon onClick={handleAdd} icon={BsPlusLg} bgc="dim">
              Add tags
            </Icon>
          </ButtonGroup>
        </ModalContent>
      </Modal>
    </Page>
  );
};

export default Record;
