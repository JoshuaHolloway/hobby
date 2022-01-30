export default function Osc1({ changeFreq }) {
  return (
    <div>
      <input id='frequency' type='range' onChange={changeFreq} max='5000' />
    </div>
  );
}
