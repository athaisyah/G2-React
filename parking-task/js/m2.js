let listsParkir = localStorage.listsParkir
  ? JSON.parse(localStorage.listsParkir)
  : [];

const saveLS = (obj, itemId = "listsParkir", cb = () => location.reload()) => {
  let lastData = localStorage.getItem(itemId)
    ? JSON.parse(localStorage.getItem(itemId))
    : []; // admin
  lastData.push(obj); // admin1
  localStorage.setItem(itemId, JSON.stringify(lastData)); // admin, admin1

  cb();
};

const saveListsParkir = () => {
  const myForm = document.inputKendaraan;
  const tipe = myForm.tipeInput.value;
  const plat = myForm.platInput.value;
  const jenis = myForm.jenisInput.value;
  const waktuMasuk = myForm.waktuInput.value;
  const slot = myForm.slotInput.value;

  // let isExist = false
  // for (let i = 0; i < employees.length; i++) {
  //     const employee = employees[i];
  //     if (employee.name == name)
  //         isExist = true
  // }
  const isExist = listsParkir.some((parkir) => parkir.plat == plat);

  if (isExist) {
    alert("Data exist!!");
    return;
  }

  saveLS(
    {
      tipe,
      plat,
      jenis,
      waktuMasuk,
      slot,
    },
    "listsParkir",
    () => location.reload()
  );
  alert`berhasil`;
};

const showListsParkir = () => {
  const list = document.querySelector("#listParkirTabel tbody");
  let rows = "";

  for (let i = 0; i < listsParkir.length; i++) {
    const parkir = listsParkir[i];
    rows += `<tr>
                <td>${i + 1}</td>
                <td>${parkir.tipe}</td>
                <td>${parkir.plat}</td>
                <td>${parkir.jenis}</td>
                <td>${parkir.waktuMasuk}</td>
                <td>${parkir.slot}</td>
                <td><a href="" class="btn btn-primary">Detail</a></td>
            </tr>`;
  }

  list.innerHTML = rows;
};

/* SAVE RECORD */
let record = localStorage.record
  ? (record = JSON.parse(localStorage.record))
  : [];

const saveRecord = (
  tipe,
  plat,
  jenis,
  waktuMasuk,
  waktuKeluar,
  lama,
  tarif,
  admin
) => {
  const tipe1 = tipe.value;
  const plat1 = plat.value;
  const jenis1 = jenis.value;
  const waktuMasuk1 = waktuMasuk.value;
  const waktuKeluar1 = waktuKeluar.value;
  const lama1 = lama.value;
  const tarif1 = tarif.value;
  const admin1 = admin.value;

  saveLS(
    {
      tipe1,
      plat1,
      jenis1,
      waktuMasuk1,
      waktuKeluar1,
      lama1,
      tarif1,
      admin1,
    },
    "record",
    () => location.reload()
  );
};
/* END SAVE RECORD */

/* UPDATE */
const updateLS = (plat, admin, cb = () => {}) => {
  listsParkir = listsParkir.map((value) => {
    if (value.plat == plat) {
      return {
        plat,
        tipe: value.tipe,
        jenis: value.jenis,
        waktuMasuk: value.waktu,
        slot: value.slot,

        admin: admin,
      };
    } else return value;
  });

  localStorage.listsParkir = JSON.stringify(listsParkir);

  cb();
};

/* PARKIR KELUAR */
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
                  <td>${parkir.waktuMasuk}</td>
  
                  <td><select id="adminInput" onchange="updateLS('${
                    parkir.plat
                  }', this.value)">
                    <option value="">Pilih Admin</option>
                    <option value="Admin1">Admin1</option>
                    <option value="Admin2">Admin2</option>
                    <option value="Admin3">Admin3</option>
                  </select></td>
  
                  <td><button type="button" class="btn btn-danger" onclick="keluar()">Keluar</button></td>    
                </tr>`;
  }
  list.innerHTML = rows;
};
/* END PARKIR KELUAR */

/* UPDATE TARIF */
const updateTarif = (
  plat,
  waktu_keluar_convert,
  menitR,
  tarif,
  cb = () => {}
) => {
  listsParkir = listsParkir.map((value) => {
    if (value.plat == plat) {
      return {
        plat,
        tipe: value.tipe,
        jenis: value.jenis,
        waktuMasuk: value.waktuMasuk,
        slot: value.slot,
        admin: value.admin,

        waktuKeluar: waktu_keluar_convert,
        menit: menitR,
        tarif: tarif,
      };
    } else return value;
  });

  localStorage.listsParkir = JSON.stringify(listsParkir);

  cb();
};
/* END UPDATE TARIF */

/* KELUAR */
function keluar() {
  // console.log(waktu_keluar);
  // let waktu_masuk;
  let waktu_keluar = Date.now();
  let waktu_keluar_convert = new Date(waktu_keluar);
  // alert(waktu_keluar_convert);

  let fee_jamMobil = 3000;
  let fee_jamMotor = 1000;

  let menitR;
  let fee;
  let admin;
  // UNTUK LOCAL STORAGE RECORD
  let tipe, plat, jenis;

  for (let i = 0; i < listsParkir.length; i++) {
    let parkir = listsParkir[i];
    let date = new Date(`${listsParkir[i].waktuMasuk}`);
    let waktu_masuk = date.getTime();
    let menit = (waktu_keluar - waktu_masuk) / 60 / 1000;
    menitR = Math.round(menit);
    admin = parkir.admin;

    /* */
    // tipe = parkir.tipe;
    // plat = parkir.plat;
    // jenis = parkir.jenis;
    let waktuMasuk = parkir.waktuMasuk;
    /* */

    let jenisKendaraan = listsParkir[i].jenis;
    // alert(jenisKendaraan);

    if (jenisKendaraan == "Mobil") {
      fee = (menitR - 1) * fee_jamMobil + 5000;
    } else if (jenisKendaraan == "Motor") {
      fee = (menitR - 1) * fee_jamMotor + 3000;
    }
    // console.log(menitR);
    // alert(fee);
    updateTarif(`${parkir.plat}`, waktu_keluar_convert, menitR, fee);
  }
  alert`Lama Parkir ${menitR}
  Tarif = ${fee}`;
  document.getElementById("myTable").deleteRow(1);
  // saveRecord(
  //   tipe,
  //   plat,
  //   jenis,
  //   waktuMasuk,
  //   waktu_keluar_convert,
  //   menitR,
  //   fee,
  //   admin
  // );
}
/* END KELUAR */

/* lOCAL STOAGE BARU SAAT KELUAR */
// let record = localStorage.record ? record = JSON.parse(localStorage.record) : [];
// const saveRecord = () => {
//   const list = document.querySelector("#myTable tbody");

//   let myTable = document.getElementById("myTable");
//   let tr = myTable.getElementsByTagName("tr");

//   for (let i = 0; i < tr.length; i++) {
//     let tdTipe = tr[i].getElementsByTagName("td")[1];
//     let tipe = tdTipe.innerHTML;
//     console.log(tipe);
//   }
// };
// saveRecord();
/* END lOCAL STOAGE BARU SAAT KELUAR */

/* FUNCTION PENCARIAN INPUT */
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
/* END FUNCTION PENCARIAN INPUT */
