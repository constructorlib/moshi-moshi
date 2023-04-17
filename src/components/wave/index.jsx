import React, { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";

import WaveSurfer from "wavesurfer.js";
import RegionsPlugin from "wavesurfer.js/dist/plugin/wavesurfer.regions.min.js";
import TimelinePlugin from "wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js";

import { Container, Controls, Forward10, Pause, Play, Replay10 } from "./index.styled";

const getRegions = (timestamps) => {
  const regions = timestamps?.map((item) => ({
    start: item?.time,
    end: item?.time + 60,
    loop: false,
    color: "hsla(200, 50%, 70%, 0.4)",
    id: item?.id,
    data: item?.tag,
  }));

  return RegionsPlugin.create({
    regionsMinLength: 2,
    regions: regions,
  });
};

const getOptions = (ref, plugins = []) => {
  const color = "#faefdd";
  return {
    container: ref,
    waveColor: color,
    progressColor: color,
    cursorColor: color,
    barWidth: 3,
    barRadius: 3,
    responsive: true,
    interact: true,
    height: 50,
    // If true, normalize by the maximum peak instead of 1.0.
    normalize: true,
    // Use the PeakCache to improve rendering speed of large waveforms.
    partialRender: true,
    plugins: plugins,
  };
};

export default function Waveform({ blob, timestamps, setTimestamps }) {
  console.log(timestamps);
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const timelineRef = useRef(null);

  const [play, setPlay] = useState(false);

  // create new WaveSurfer instance
  // On component mount and when url changes
  useEffect(() => {
    const regions = getRegions(timestamps);
    const timeline = TimelinePlugin.create({ container: timelineRef.current });
    const options = getOptions(waveformRef.current, [regions, timeline]);
    wavesurfer.current = WaveSurfer.create(options);

    //* FIXME: load from firebase
    wavesurfer.current.loadBlob(blob);

    wavesurfer.current.on("ready", () => {
      console.log("READY");
      setPlay(false);
      wavesurfer.current.setVolume(1);
    });
    // Removes events, elements and disconnects Web Audio nodes.
    // when component unmount
    return () => wavesurfer.current.destroy();
  }, [blob, timestamps]);

  const handlePlayPause = () => {
    if (!play) {
      wavesurfer.current.playPause();
      setPlay(true);
    } else {
      setPlay(false);
      wavesurfer.current.playPause();
    }
    console.log(wavesurfer.current.regions.list);
    // setTimestamps((prev) => {
    //   const regs = wavesurfer.current.regions.list;

    //   for (const key in regs) {
    //     const reg = regs[key];
    //     prev[reg.id].time = [reg.start, reg.end];
    //   }

    //   return [...prev];
    // });
    console.log(timestamps);
  };
  return (
    <Container>
      <div>Session audio recording</div>
      <div id="waveform" ref={waveformRef} />
      <div id="timeline" ref={timelineRef}></div>
      <Controls>
        <Replay10 onClick={() => wavesurfer.current.skip(-10)} />
        {play ? <Pause onClick={handlePlayPause} /> : <Play onClick={handlePlayPause} />}
        <Forward10 onClick={() => wavesurfer.current.skip(10)} />
      </Controls>
    </Container>
  );
}
