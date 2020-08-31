<!-- User Edit Modal Start -->
  <div id="show_user_info">
    <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="editModal">Edit Vehicle Information</h4>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="edit_reg_no">Registration no
                  <span class="required-field">*</span>
                </label>
                <input type="text" class="form-control" id="edit_reg_no" value="" required />
              </div>
              <div class="form-group">
                <label for="edit_owner_name">Owner name
                  <span class="required-field">*</span>
                </label>
                <input type="text" class="form-control" id="edit_owner_name" value="" required />
              </div>
              <div class="form-group">
                <label for="edit_email">Email
                  <span class="required-field">*</span>
                </label>
                <input type="email" class="form-control" id="edit_email" value="" required />
              </div>
              <div class="form-group">
                <label for="edit_d_o_a">Date of allocation
                  <span class="required-field">*</span>
                </label>
                <input type="text" class="form-control" id="edit_d_o_a" value="" required onkeypress="return false;" />
              </div>
              <div class="form-group">
                <label for="edit_slot">Slot number
                  <span class="required-field">*</span>
                </label>
                <input type="number" class="form-control" id="edit_slot" value="" required />
              </div>
              <div class="form-group">
                <input type="hidden" class="form-control" id="member_id">
              </div>
              <div class="modal-footer-extended">
                <button type="button" class="btn btn-success" onclick="updateMemberData();">Update</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- User Edit Modal End --></div>



function getMembers() {
  const memberRecord = localStorage.getItem("members");
  let members = [];
  if (!memberRecord) {
    return members;
  } else {
    members = JSON.parse(memberRecord);
    return members;
  }
}

/**
 * Show Edit Modal of a single member
 *
 * @param {string} id
 */
function showEditModal(id) {
  const allMembers = getMembers();
  const member = allMembers.find((item) => item.id == id);
  $("#edit_reg_no").val(member.reg_no);
  $("#edit_owner_name").val(member.owner_name);
  $("#edit_email").val(member.email);
  $("#edit_d_o_a").val(member.d_o_a);
  $("#edit_slot").val(member.slot);
  $("#member_id").val(id);
  $("#editModal").modal();
}

/**
 * Store Updated Member Data into the storage
 */
function updateMemberData() {
  if (
    $("#edit_reg_no").val() == "" ||
    $("#edit_owner_name").val() == "" ||
    $("#edit_email").val() == "" ||
    $("#edit_d_o_a").val() == "" ||
    $("#edit_slot").val() == ""
  ) {
    alert("All fields are required");
    window.location.reload();
    this.preventDefault();
    return false;
  }
  var members = getMembers();
  members.forEach((item) => {
    if ($("#edit_slot").val() === item.slot) {
      if ($("#edit_d_o_a").val() === item.d_o_a) {
        alert("Can't allocate slot. Slot is not availabe on the selected day.");
        window.location.reload();
        this.preventDefault();
        return false;
      }
    }
  });
  const allMembers = getMembers();
  const memberId = $("#member_id").val();
  const member = allMembers.find(({ id }) => id == memberId);
  member.reg_no = $("#edit_reg_no").val();
  member.owner_name = $("#edit_owner_name").val();
  member.email = $("#edit_email").val();
  member.d_o_a = $("#edit_d_o_a").val();
  member.slot = $("#edit_slot").val();
  const data = JSON.stringify(allMembers);
  localStorage.setItem("members", data);
  $("#member_table").find("tr:not(:first)").remove();
  getTableData();
  $("#editModal").modal("hide");
}
