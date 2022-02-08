import { useState, useEffect } from 'react';

import Osc1 from '../../comps/Osc1';

// ==============================================

export default function WA() {
  // https://youtu.be/MAvU37pdTME

  const [ctx, setCtx] = useState();
  const [osc, setOsc] = useState();

  useEffect(() => {
    let actx = new AudioContext();
    let out = actx.destination;

    let osc1 = actx.createOscillator();

    let gain1 = actx.createGain();

    osc1.connect(gain1);
    gain1.connect(out);

    setOsc(osc1);

    setCtx(new AudioContext());
  }, []);

  const changeOsc1Freq = (e) => {
    console.log('value: ', e.target.value);
    osc.frequency.value = e.target.value;
  };

  const loadSound = () => {
    fetch('bass_sample.mp3')
      .then((data) => data.arrayBuffer())
      .then((arrayBuffer) => ctx.decodeAudioData(arrayBuffer)) // returns an AudioBuffer object
      .then((decodedAudio) => {
        const audio_buffer_source_node = ctx.createBufferSource();
        audio_buffer_source_node.buffer = decodedAudio;
        audio_buffer_source_node.connect(ctx.destination);
        //audio_buffer_source_node.start(ctx.currentTime);
        audio_buffer_source_node.start();
      });
  };

  return (
    <>
      <h2>Web-Audio</h2>
      <button
        onClick={() => {
          osc.start();
        }}
      >
        Play
      </button>

      <button
        onClick={() => {
          osc.stop();
        }}
      >
        Stop
      </button>

      <button
        onClick={() => {
          loadSound();
        }}
      >
        Load Sound
      </button>

      <Osc1 changeFreq={changeOsc1Freq} />
    </>
  );
}
