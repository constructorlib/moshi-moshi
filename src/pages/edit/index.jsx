import { useState } from "react";
import { useLocation } from "react-router";

import { Page } from "./index.styled";
import Wave from "../../components/wave";

export const Edit = () => {
  const { state } = useLocation();
  const { blob, data } = state;

  const [timestamps, setTimestamps] = useState(data);
  return (
    <Page>
      <Wave {...{ blob, timestamps, setTimestamps }} />
    </Page>
  );
};

export default Edit;
