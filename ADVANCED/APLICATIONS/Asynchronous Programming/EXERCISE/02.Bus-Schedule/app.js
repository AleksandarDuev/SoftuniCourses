function solve() {
  const label = document.querySelector("#info span");
  const departBtn = document.getElementById("depart");
  const arriveBtn = document.getElementById("arrive");
  let stop = {
    next: "depot",
  };
  try {
    async function depart() {
      const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;

      const response = await fetch(url);
      if (response.status !== 200) {
        throw new Error("Error");
        departBtn.disabled = true;
        arriveBtn.disabled = true;
      }
      stop = await response.json();
      // prezapisvame rezultata ot data v object stop!!!
      label.textContent = `Next stop ${stop.name}`;
      departBtn.disabled = true;
      arriveBtn.disabled = false;
    }

    function arrive() {
      label.textContent = `Arriving at ${stop.name}`;

      departBtn.disabled = false;
      arriveBtn.disabled = true;
    }

    return {
      depart,
      arrive,
    };
  } catch (error) {
    label.textContent = error.message;
  }
}

let result = solve();
