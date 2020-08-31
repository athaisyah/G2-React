if (localStorage.listsPegawai === undefined) {
  localStorage.listsPegawai = "[]";
}

function tambahPegawai() {
  let listsPegawai = JSON.parse(localStorage.listsPegawai);

  let pegawai = [];
  for (let i = 0; i < listsPegawai.length; i++) {
    pegawai.push(listsPegawai[i].pegawai);
  }

  let inputPegawai = document.getElementById("nikInput").value;

  if (inputPegawai == "") {
    alert`NIK Tidak Boleh Kosong`;
  } else if (!pegawai.includes(inputPegawai)) {
    // push the objects to the lists.
    let tempObjects = {};
    tempObjects.nama = document.getElementById("namaInput").value;
    tempObjects.nik = inputPegawai;
    tempObjects.email = document.getElementById("emailInput").value;
    tempObjects.alamat = document.getElementById("alamatInput").value;
    tempObjects.departemen = document.getElementById("pilih_departemen").value;
    tempObjects.posisi = document.getElementById("posisiInput").value;

    listsPegawai.push(tempObjects);

    // store the lists to local storage
    localStorage.listsPegawai = JSON.stringify(listsPegawai);
    alert`Pegawai Berhasil Di Tambahkan!`;
    window.location.reload();
  } else {
    alert`Pegawai yang ada Masukkan Sudah Ada!!!`;
  }
}
