let guestArr = [];
let guestObj = {};

function submitData() {
  // membuat key Object untuk di input
  guestObj.nama = document.getElementById("nama").value;
  guestObj.nik = document.getElementById("nik").value;
  guestObj.pic = document.getElementById("pic").value;
  guestObj.kepentingan = document.getElementById("kepentingan").value;

  console.log(guestArr);
  // object punya key sama value
  // nah yang ini ngebaca valuenya!!
  // nge-baca value dari si object => Object.values(guestObj).length
  // The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.

  for (let i = 0; i < guestArr.length; i++) {
    if (guestArr[i].nik == guestObj.nik) {
      alert("Terdapat Kesamaan NIK!");
      return;
    }
  }
  guestArr.push(guestObj);

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
