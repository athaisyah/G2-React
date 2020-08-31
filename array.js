// Buat Array
// let tableList = [123456, 45678];
let tableList = [];

// Masukkan data dari table ke array Table List
let nikClass = document.getElementsByClassName("nik-class");
for (let n = 0; n <= nikClass.length; n++) {
  var htmlNIK = nikClass[n].innerHTML;
  tableList.push(htmlNIK);
}

function submitData() {
  // Check NIK yang sama dengan table
  const nik = document.getElementById("nik").value;
  for (let i = 0; i < tableList.length; i++) {
    if (nik == tableList[i]) {
      alert("NIK yang Anda masukkan Sudah Terdaftar!");
      return;
    }
  }

  tableList.push(nik);

  // Menampilkan data di Table
  let table = document.getElementById("table"),
    row = table.insertRow(table.length),
    cell1 = row.insertCell(0),
    cell2 = row.insertCell(1),
    cell3 = row.insertCell(2),
    cell4 = row.insertCell(3);

  nama = document.getElementById("nama").value;
  nikk = document.getElementById("nik").value;
  pic = document.getElementById("pic").value;
  kepentingan = document.getElementById("kepentingan").value;

  cell1.innerHTML = nama;
  cell2.innerHTML = nikk;
  cell3.innerHTML = pic;
  cell4.innerHTML = kepentingan;
}
