import { Icon } from "components/icon";

import { ButtonGroup, Checkbox, List, ListItem, Page, MetaInfo, Timer } from "./index.styled";
import { BsXLg, BsMicFill, BsPlusLg } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

const Record = () => {
  return (
    <Page>
      <MetaInfo>
        <Timer>00:10:30</Timer>
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
        <Icon icon={BsXLg} bgc="dim">
          Discard
        </Icon>

        <Icon
          style={{ marginTop: "-5rem" }}
          icon={true ? BsPlusLg : BsMicFill}
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
