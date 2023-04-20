//READ
async function getData() {
  const url = `http://localhost:3030/jsonstore/phonebook`;
  const response = await fetch(url);
  const data = await response.json(); // get full record
  return data;
}
//READ
async function getDataById(id) {
  const url = `http://localhost:3030/jsonstore/phonebook/${id}`;
  const response = await fetch(url);
  const data = await response.json(); // get  record on specified id
  return data;
}
//CREATE
async function postData(data) {
  const url = `http://localhost:3030/jsonstore/phonebook`;
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  const response = await fetch(url, options);
  const result = await response.json();
  return result;
}
// UPDATE
async function updateData(id, data) {
    const url = `http://localhost:3030/jsonstore/phonebook/${id}`
    const options = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
}
// DELETE
async function deleteData(id){
    const url = `http://localhost:3030/jsonstore/phonebook/${id}`;
    const options = {
        method: "DELETE"
      };
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    
}