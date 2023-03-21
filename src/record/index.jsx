import { Icon } from "components/icon";

import { ButtonGroup, Checkbox, List, ListItem, Page, MetaInfo, Timer } from "./index.styled";
import { BsXLg, BsMicFill, BsPlusLg, BsPauseFill, BsStopFill } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import useRecorder from "hooks/useRecorder";
import { formatTime } from "utils/time";

const Record = () => {
  const { recorderState, startRecording, saveRecording, cancelRecording } = useRecorder();
  const { audio, recordingHours, recordingMinutes, recordingSeconds, initRecording } =
    recorderState;

  return (
    <Page>
      <MetaInfo>
        <Timer>
          {formatTime(recordingHours)}:{formatTime(recordingMinutes)}:{formatTime(recordingSeconds)}
        </Timer>
      </MetaInfo>
      <List>
        <ListItem>
          <Checkbox /> Foo
        </ListItem>
        <ListItem>
          <Checkbox /> Foo
        </ListItem>
        <ListItem>
          <Checkbox /> Foo
        </ListItem>
        <ListItem>
          <Checkbox /> Foo
        </ListItem>
        <ListItem>
          <Checkbox /> Foo
        </ListItem>
        <ListItem>
          <Checkbox /> Foo
        </ListItem>
        <ListItem>
          <Checkbox /> Foo
        </ListItem>
        <ListItem>
          <Checkbox /> Foo
        </ListItem>
      </List>

      <ButtonGroup>
        <Icon onClick={cancelRecording} icon={BsXLg} bgc="dim">
          Discard
        </Icon>

        <Icon
          style={{ marginTop: "-5rem" }}
          icon={recordingSeconds === 0 ? BsMicFill : BsPlusLg}
          onClick={recordingSeconds === 0 ? startRecording : saveRecording}
          size="lg"
          bgc="brand"
        />

        <Icon icon={AiOutlineCheck} bgc="dim">
          Save
        </Icon>
      </ButtonGroup>
    </Page>
  );
};

export default Record;
