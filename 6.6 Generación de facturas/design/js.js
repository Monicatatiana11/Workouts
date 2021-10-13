const res = await fetch("./JSONmoneda.json");
const data = await res.json();

const acceso = await fetch("./Filtrar.json");
const dataAcceso = await  acceso.json();


