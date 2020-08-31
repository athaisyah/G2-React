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
  }
}

const updateSel = (plat, admin, cb = () => {}) => {
  listsParkir = listsParkir.map((value) => {
    if (value.plat == plat) {
      return {
        plat,
        // tipe: value.tipe,
        // jenis: value.jenis,
        // waktu: value.waktu,
        // slot: value.slot,
        admin: admin,
      };
    } else {
      return {
        tipe: value.tipe,
        jenis: value.jenis,
        waktu: value.waktu,
        slot: value.slot,
      };
    }
  });
  localStorage.listsParkir = JSON.stringify(listsParkir);

  cb();
};
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

                <td><select id="adminInput">
                  <option value="">Pilih Admin</option>
                  <option value="Admin1">Admin1</option>
                  <option value="Admin2">Admin2</option>
                  <option value="Admin3">Admin3</option>
                </select></td>

                <td><button type="button" class="btn btn-danger" >Keluar</button></td>    
              </tr>`;
  }
  list.innerHTML = rows;
};

function optionSel() {
  let sel = document.getElementById("adminInput").value;
  listsParkir = listsParkir.map({});
}

// ARRAY OF OBJECT RECORD
// if (localStorage.record === undefined) {
//   localStorage.record = "[]";
// }

const updateLS = (plat, waktu_keluar, menitR, total, cb = () => {}) => {
  listsParkir = listsParkir.map((value) => {
    if (value.plat == plat) {
      return {
        plat,
        tipe: value.tipe,
        jenis: value.jenis,
        waktu: value.waktu,
        slot: value.slot,

        waktuKeluar: waktu_keluar,
        menit: menitR,
        // admin: admin,
        total: total,
      };
    } else return value;
  });

  localStorage.listsParkir = JSON.stringify(listsParkir);

  cb();
};

function keluar() {
  // console.log(waktu_keluar);
  // let waktu_masuk;
  // let jenisKendaraan = "";
  let waktu_keluar = Date.now();
  let fee;
  let fee_jamMobil = 3000;
  let fee_jamMotor = 1000;
  let menitR;
  let admin = document.getElementById("adminInput").value;

  for (let i = 0; i < listsParkir.length; i++) {
    let parkir = listsParkir[i];
    let date = new Date(`${listsParkir[i].waktu}`);
    let waktu_masuk = date.getTime();
    let menit = (waktu_keluar - waktu_masuk) / 60 / 1000;
    menitR = Math.round(menit);

    let jenisKendaraan = listsParkir[i].jenis;
    // alert(jenisKendaraan);

    if (jenisKendaraan == "Mobil") {
      fee = (menitR - 1) * fee_jamMobil + 5000;
    } else if (jenisKendaraan == "Motor") {
      fee = (menitR - 1) * fee_jamMotor + 3000;
    }
    // console.log(menitR);
    // alert(fee);

    // updateLS(`${parkir.plat}`, waktu_keluar, menitR, admin, fee);
  }
  document.getElementById("myTable").deleteRow(1);
}

// FUNCTION PENCARIAN INPUT
const searchFun = () => {
  let filter = document.getElementById("search_input").value.toUpperCase();

  let myTable = document.getElementById("myTable");

  let tr = myTable.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[2];

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
