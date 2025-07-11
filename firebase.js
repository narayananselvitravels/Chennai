const firebaseConfig = {
  apiKey: "AIzaSyDNnQtossolWIfqFw9dM2i3TjYZXpMKTrY",
  authDomain: "narayanan-selvi-travels-aafcc.firebaseapp.com",
  databaseURL: "https://narayanan-selvi-travels-aafcc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "narayanan-selvi-travels-aafcc",
  storageBucket: "narayanan-selvi-travels-aafcc.appspot.com",
  messagingSenderId: "439796129397",
  appId: "1:439796129397:web:3dc531e6fc4e7a0be3a23c"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

async function getMasters() {
  const snap = await db.ref("masters").get();
  return snap.val() || {};
}

function saveDrivers(drivers) {
  return db.ref("masters/drivers").set(drivers);
}

function saveVehicles(vehicles) {
  return db.ref("masters/vehicles").set(vehicles);
}

function saveAssignedMap(assignments) {
  return db.ref("masters/assigned-map").set(assignments);
}
