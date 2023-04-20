async function getInfo() {
  const stopId = document.getElementById("stopId").value;
  const stopNameElement = document.getElementById("stopName");
  const timeTable = document.getElementById("buses");
  try {
      timeTable.innerHTML = '';
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error("Stop ID ont found");
    }
    const data = await response.json();

    Object.entries(data.buses)
    .forEach(bus => {
        const liElement = document.createElement("li");
        liElement.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`
        timeTable.appendChild(liElement);

    })

    stopNameElement.textContent = data.name;
  } catch (error) {
    document.getElementById("stopName").textContent = "Error";
  }
}
