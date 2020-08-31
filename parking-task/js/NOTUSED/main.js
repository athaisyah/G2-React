if (localStorage.listsParkir === undefined) {
  localStorage.listsParkir = "[]";
}

function tambahKendaraan() {
  let listsParkir = JSON.parse(localStorage.listsParkir);

  let parkir = [];
  for (let i = 0; i < listsParkir.length; i++) {
    parkir.push(listsParkir[i].plat);
  }

  let inputParkir = document.getElementById("platInput").value;

  if (inputParkir == "") {
    alert`PLAT NOMOR Tidak Boleh Kosong`;
  } else if (!parkir.includes(inputParkir)) {
    // push the objects to the lists.
    let tempObjects = {};
    tempObjects.plat = inputParkir;
    tempObjects.tipe = document.getElementById("tipeInput").value;
    tempObjects.jenis = document.getElementById("jenisInput").value;
    tempObjects.waktu = document.getElementById("waktuInput").value;
    tempObjects.slot = document.getElementById("slotInput").value;

    listsParkir.push(tempObjects);

    // store the lists to local storage
    localStorage.listsParkir = JSON.stringify(listsParkir);
    alert`Kendaraan Berhasil Di Tambahkan!`;
    window.location.reload();
  } else {
    alert`PLAT NOMOR yang ada Masukkan Sudah Ada!!!`;
  }
}

function tampilKendaraan() {
  // let storedParkir = localStorage.getItem("listsParkir");
  // alert(storedParkir);
  document.getElementById("tabelListKendaraan").innerHTML = "";

  for (let i = 0; i < JSON.parse(localStorage.listsParkir).length; i++) {
    document.getElementById("tabelListKendaraan").innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${JSON.parse(localStorage.listsParkir)[i].tipe}</td>
        <td>${JSON.parse(localStorage.listsParkir)[i].plat}</td>
        <td>${JSON.parse(localStorage.listsParkir)[i].jenis}</td>
        <td>${JSON.parse(localStorage.listsParkir)[i].waktu}</td>
        <td>${JSON.parse(localStorage.listsParkir)[i].slot}</td>
        <td><a href="" class="btn btn-primary">Detail</a></td>
      </tr>`;
  }
}

// function parkirKeluar() {
//   // MENAMPILKAN TABEL
//   document.getElementById("tabelListKendaraan").innerHTML = "";

//   for (let i = 0; i < JSON.parse(localStorage.listsParkir).length; i++) {
//     document.getElementById("tabelListKendaraan").innerHTML += `
//       <tr>
//         <td>${i + 1}</td>
//         <td>${JSON.parse(localStorage.listsParkir)[i].tipe}</td>
//         <td>${JSON.parse(localStorage.listsParkir)[i].plat}</td>
//         <td>${JSON.parse(localStorage.listsParkir)[i].jenis}</td>
//         <td>${JSON.parse(localStorage.listsParkir)[i].waktu}</td>
//         <td>${JSON.parse(localStorage.listsParkir)[i].slot}</td>
//         <td><button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal"
//   data-whatever="" onclick="showExitModal(id)">Keluar</button></td>
//       </tr>`;
//   }
// }

function parkirKeluar() {
  // MENAMPILKAN TABEL
  document.getElementById("tabelListKendaraan").innerHTML = "";

  for (let i = 0; i < JSON.parse(localStorage.listsParkir).length; i++) {
    document.getElementById("tabelListKendaraan").innerHTML += `
        <tr>
          <td>${i + 1}</td>
          <td>${JSON.parse(localStorage.listsParkir)[i].tipe}</td>
          <td>${JSON.parse(localStorage.listsParkir)[i].plat}</td>
          <td>${JSON.parse(localStorage.listsParkir)[i].jenis}</td>
          <td>${JSON.parse(localStorage.listsParkir)[i].waktu}</td>

          <td><input class="form-control keluar_waktu" type="time" value="" id="waktu_keluar required></td>

          <td class="isi_total"></td>

          <td><select>
          <option value="">Pilih Admin</option>
          <option value="Admin1">Admin1</option>
          <option value="Admin2">Admin2</option>
          <option value="Admin3">Admin3</option>
          </select></td>

          <td><button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal"
    data-whatever="" onclick="showExitModal(id)">Keluar</button></td>
        </tr>`;

    // let masuk = ${JSON.parse(localStorage.listsParkir)[i].waktu};
    // console.log(masuk);
  }
}

// function disInput() {
//   let keluar = document.getElementById("waktu_keluar").value;
//   document.getElementById("isi_total").innerHTML = keluar;
// }

function displayInput() {
  for (let i = 0; i < JSON.parse(localStorage.listsParkir).length; i++) {
    let masuk = JSON.parse(localStorage.listsParkir)[i].waktu;
    let jenis = JSON.parse(localStorage.listsParkir)[i].jenis;

    console.log(masuk);

    // for (let j = 0; j < JSON.parse(localStorage.listsParkir)[i].length; j++) {
    //     console.log(keluar);
    // }
    let keluar = document.getElementById("waktu_keluar").value;
    document.getElementsByClassName("isi_total").innerHTML = keluar;
  }

  let feeMobil = 5000,
    fee_jamMobil = 3000;
  let feeMotor = 3000,
    fee_jamMotor = 1000;

  let d = new Date();
  d.getHours();
  d.getMinutes();
  d.getSeconds();

  let hours = d.getHours(),
    minutes = d.getMinutes();
  seconds = d.getSeconds();

  //   console.log(
  //     (document.getElementById("waktu_keluar").value =
  //       hours + ":" + minutes + ":" + seconds)
  //   );

  //   let durasi = parseInt(keluar) - parseInt(masuk);
  //   console.log(durasi);
}

function solution(E, L) {
  var HOUR_COST = 4;
  var cost = 5; //entrance fee + first hour;

  //leave - enter.  convert to DateTime and get time span
  var duration =
    (new Date("1/1/2015 " + L) - new Date("1/1/2015 " + E)) / 60000; // convert to minutes
  //   console.log(duration + " ini durasi ");

  if (duration > 60) {
    duration -= 60;
    cost += Math.floor(duration / 60) * HOUR_COST;
    if (duration % 60) {
      cost += HOUR_COST;
    }
  }
  return cost;
}

//////////////////////////////////////////////
let listsParkir = localStorage.listsParkir
  ? JSON.parse(localStorage.listsParkir)
  : [];

const showEmployee = () => {
  const list = document.querySelector("#myTable tbody");
  let rows = "";

  for (let i = 0; i < listsParkir.length; i++) {
    const parkir = listsParkir[i];
    rows += `
              <tr>
                <td>${i + 1}</td>
                <td>${parkir.tipe}</td>
                <td>${parkir.plat}</td>
                <td>${parkir.jenis}</td>
                <td>${parkir.waktu}</td>

                <td><input class="form-control keluar_waktu" type="time" name="time" value="Date.now();" id="time" onclick="Date.now();" required></td>

                <td class="isi_total"><input type="text" class="form-control" id="${
                  parkir.plat
                }" placeholder="" onclick="clickTime()" value="">
                </td>

                <td><select>
                <option value="">Pilih Admin</option>
                <option value="Admin1">Admin1</option>
                <option value="Admin2">Admin2</option>
                <option value="Admin3">Admin3</option>
                </select></td>

                <td><button type="button" class="btn btn-danger">Keluar</button></td>    
              </tr>`;
  }
  list.innerHTML = rows;

  for (let i = 0; i < listsParkir.length; i++) {
    const parkir = listsParkir[i];

    let waktuMasuk = parkir.waktu;
    console.log(waktuMasuk);

    // let keluar = document.querySelectorAll("keluar_Waktu")[i].value;
    // console.log(keluar);

    // document.getElementById("isi_total").innerHTML = keluar;
    // var timeControl = document.querySelector('${input[type="time"]}').value;
    // console.log(timeControl);

    //   parkir.addEventListener('click', function() {
    //       let keluar = this.parentNode.value();

    //       // var parent = this.parentNode;

    //       // let keluar = document.querySelector("keluar_waktu").this.value;
    //       // document.querySelector("isi_total").innerHTML = keluar;
    //       console.log(keluar);
    //   }
  }

  // function try() {
  // var highlightedItems = document.querySelectorAll(".keluar_waktu");

  // highlightedItems.forEach(function (userItem) {
  //   // deleteUser(userItem);
  //   var x = userItem.value;
  //   console.log(x);
  // });

  // let waktu = document.getElementsByName("time");
  // for (let i = 0; i < waktu.length; i++) {
  //   var ambilWak = waktu[i].value;
  // }
  // console.log(ambilWak);

  // }
};

function calTime() {
  let myTable = document.getElementById("myTable");
  let tr = myTable.getElementsByTagName("tr");
  let plat = "";
  let jenis = "";
  let waktuMasuk = "";
  for (let i = 0; i < tr.length; i++) {
    plat = tr[i].getElementsByTagName("td")[2];
    jenis = tr[i].getElementsByTagName("td")[3];
    waktuMasuk = tr[i].getElementsByTagName("td")[4];
    alert(plat);

    // if (plat) {
    //   let textval = plat.textContent || plat.innerHTML;
    //   alert`${textval}`;
    // }
  }
  let timeMasuk = new Date("25/08/2020 " + waktuMasuk);
  let timeKeluar = new Date("25/08/2020 " + waktuMasuk);
  let beda = timeKeluar - timeMasuk;
}
calTime();

function clickTime() {
  let myTable = document.getElementById("myTable");
  let tr = myTable.getElementsByTagName("tr");
  let plat = "";
  for (let i = 0; i < tr.length; i++) {
    plat = tr[i].getElementsByTagName("td")[2].textContent;
    alert(plat);

    // if (plat) {
    //   let textval = plat.textContent || plat.innerHTML;
    //   alert`${textval}`;
    // }
  }
}
clickTime();

// let myTable = document.getElementById("myTable");
// let tr = myTable.getElementsByTagName("tr");

// for (let i = 0; i < tr.length; i++) {
//   let td = tr[i].getElementsByTagName("tr")[2];

//   var date_input = document.getElementById(`${td}`);
//   console.log(date_input);
//   // date_input.valueAsDate = new Date();

//   date_input.onclick = function () {
//     console.log(this.value);
//   };
// }

function coba() {
  let myTable = document.getElementById("myTable");
  let tr = myTable.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[5].value;

    let textval = td.value;
    console.log(td);
  }

  var x = document.getElementById("myInput").value;
  document.getElementById("demo").innerHTML = "You wrote: " + x;
}

function ambilWaktu() {
  let time = this.value;
  console.log(time);
}

const inputWaktu = document.querySelectorAll(".keluar_waktu");
inputWaktu.forEach(function (e) {
  e.addEventListener("click", function (ev) {
    ev.target.parentElement.style.backgroundcolor = "lightblue";
  });
});

const updateLS = (plat, dp, cb = () => {}) => {
  listsParkir = listsParkir.map((value) => {
    if (value.plat == plat) {
      return {
        plat,
        //   address: value.address,
        //   department: dp,
      };
    } else return value;
  });

  localStorage.listsParkir = JSON.stringify(listsParkir);

  cb();
};

// FUNCTION PENCARIAN INPUT
const searchFun = () => {
  let filter = document.getElementById("search_input").value.toUpperCase();
  let myTable = document.getElementById("myTable");
  let tr = myTable.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[1];

    if (td) {
      let textval = td.textContent || td.innerHTML;

      if (textval.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};
