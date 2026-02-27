import React from "react";

function TemperatureControls({ reset, increment, decrement, temp, loading }) {
  return (
    <div>
      <button onClick={increment} disabled={temp >= 40 || loading}>
        + Grado
      </button>
      <button onClick={decrement} disabled={temp <= 0 || loading}>
        - Grado
      </button>
      <button onClick={reset}> Reset</button>
    </div>
  );
}

export default TemperatureControls;
