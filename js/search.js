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

// FUNGSI PENCARIAN DROPDOWN
function searchOption() {
  let myOption = document.getElementById("pilih_departemen"),
    filter = myOption.value.toUpperCase(),
    myTable = document.getElementById("myTable"),
    tr = myTable.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];

    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
