import { useEffect, useState } from 'react';

import * as Tone from 'tone';

// ==============================================

export default function ToneJS() {
  // --------------------------------------------

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const [loop, setLoop] = useState();

  const [bar, setBar] = useState();
  const [beat, setBeat] = useState();
  const [sixteenth, setSixteenth] = useState();

  const [index, setIndex] = useState();
  const [time, setTime] = useState();

  const [bpm, setBpm] = useState(60);

  const [player_hh, setPlayer_hh] = useState();
  const [player_bass, setPlayer_bass] = useState();
  const [player_snare, setPlayer_snare] = useState();

  const [pattern_hh, setPattern_hh] = useState([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ]);

  const [pattern_bass, setPattern_bass] = useState([
    1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
  ]);

  const [pattern_snare, setPattern_snare] = useState([
    0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
  ]);

  // --------------------------------------------

  // TOOD: -Store the samples in the cloud and do an HTTP request to retreive them.
  // -that way everything is done on the fronend and I don't have to serve the data!

  useEffect(() => {
    if (mounted) {
      setPlayer_hh(
        new Tone.Player('/hh_sample.mp3').toDestination()
        // ).toMaster()
      );

      setPlayer_bass(
        new Tone.Player('/bass_sample.mp3').toDestination()
        // ).toMaster()
      );

      setPlayer_snare(
        new Tone.Player('/clap_sample.mp3').toDestination()
        // ).toMaster()
      );
    }
  }, [mounted]);

  useEffect(() => {
    setIndex(beat * 4 + sixteenth);
  }, [beat]);

  // --------------------------------------------

  const callback = (t) => {
    console.log('JOSH');

    const BarsBeatsSixteenths = Tone.Transport.position;
    const Bars_Beats_Sixteenths = BarsBeatsSixteenths.split(':');
    // .position ↝ BarsBeatsSixteenths #
    // The Transport’s position in Bars:Beats:Sixteenths. Setting the value will jump to that position right away.
    //      BarsBeatsSixteenths
    //      A colon-separated representation of time in the form of Bars:Beats:Sixteenths.

    const _bar = Number(Bars_Beats_Sixteenths[0]);
    setBar(_bar);
    const _beat = Number(Bars_Beats_Sixteenths[1]);
    setBeat(_beat);
    const _sixteenth = Math.round(Number(Bars_Beats_Sixteenths[2]));
    setSixteenth(_sixteenth);

    setTime(t);

    const idx = _beat * 4 + _sixteenth;

    const idx_mod = idx % 16;

    if (pattern_hh[idx_mod]) {
      player_hh.start(time);
      player_hh.stop(time + 0.5);
    }

    if (pattern_bass[idx_mod]) {
      player_bass.start(time);
      player_bass.stop(time + 0.5);
    }

    if (pattern_snare[idx_mod]) {
      player_snare.start(time);
      player_snare.stop(time + 0.5);
    }
  };

  // --------------------------------------------

  const startHandler = async () => {
    // -The await expression causes async function execution to pause until
    //  a Promise is settled (that is, fulfilled or rejected), and to resume
    //  execution of the async function after fulfillment.
    await Tone.start();
    console.log('audio is ready');

    const interval = '16n';
    setLoop(new Tone.Loop(callback, interval).start(0));

    Tone.Transport.start();
  };

  // --------------------------------------------

  const stopHandler = async () => {
    loop.stop();
  };

  // --------------------------------------------

  const bpmHandler = (e) => {
    const _bpm = e.target.value;
    setBpm(_bpm);
    Tone.Transport.bpm.value = _bpm;
  };

  // --------------------------------------------

  return (
    <>
      <button onClick={startHandler}>Start</button>
      <button onClick={stopHandler}>Stop</button>
      <div>
        <span>{bar}</span> : <span>{beat}</span> : <span>{sixteenth}</span>
      </div>
      <div>
        <span>Index: {index}</span>
      </div>

      <div>
        <span>Time: {time}</span>
      </div>

      <input value={bpm} type='range' onChange={bpmHandler} />
      <span>BPM: {bpm}</span>
    </>
  );
}
