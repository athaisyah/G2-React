function getList() {
  const listRecord = localStorage.getItem("listsParkir");
  let parkir = [];
  if (!listRecord) {
    return parkir;
  } else {
    parkir = JSON.parse(listRecord);
    return parkir;
  }
}

/**
 * Show Edit Modal of a single member
 *
 * @param {string} id
 */
function showExitModal(id) {
  const allList = getList();
  const parkir = allList.find((item) => item.id == id);
  $(edit_tipe).val(parkir.tipeInput);
}
