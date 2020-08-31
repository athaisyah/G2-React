if (localStorage.listsDepartemen === undefined) {
  localStorage.listsDepartemen = "[]";
}

function tambahDepartemen() {
  let listsDepartemen = JSON.parse(localStorage.listsDepartemen);

  let departemen = [];
  for (let i = 0; i < listsDepartemen.length; i++) {
    departemen.push(listsDepartemen[i].departemen);
  }

  let inputDepartemen = document.getElementById("departemenInput").value;

  if (inputDepartemen == "") {
    alert`Departemen Tidak Boleh Kosong`;
  } else if (!departemen.includes(inputDepartemen)) {
    // push the objects to the lists.
    let tempObjects = {};
    tempObjects.departemen = inputDepartemen;
    tempObjects.kode = document.getElementById("kodeInput").value;
    tempObjects.deskripsi = document.getElementById("deskripsiInput").value;
    tempObjects.ketua = document.getElementById("ketuaInput").value;

    listsDepartemen.push(tempObjects);

    // store the lists to local storage
    localStorage.listsDepartemen = JSON.stringify(listsDepartemen);
    alert`Departemen Berhasil Di Tambahkan!`;
    window.location.reload();
  } else {
    alert`Departemen yang ada Masukkan Sudah Ada!!!`;
  }

  // simpanArrayDepartemen();
}

function simpanArrayDepartemen() {
  // get data departemen from input
  let new_Departemen = document.getElementById("departemenInput").value;

  // if there is nothing saved at the start then save an empty array
  if (localStorage.getItem("array_Departemen") == null) {
    localStorage.setItem("array_Departemen", "[]");
  }

  // get old data and slap it to the new data
  let old_Departemen = JSON.parse(localStorage.getItem("array_Departemen"));
  old_Departemen.push(new_Departemen);

  // save old and new data to local storage
  localStorage.setItem("array_Departemen", JSON.stringify(old_Departemen));
  localStorage.onload;
}
