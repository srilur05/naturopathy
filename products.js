var checkboxes = document.querySelectorAll('input[type=checkbox]');
checkboxes.forEach(function(chkbx) {
  chkbx.onchange = function() {
    document.getElementById("button").value = getCheckedCheckboxesFor(chkbx.name);
  }
})

// Simplified a little this:
function getCheckedCheckboxesFor(name) {
  var checkeds = document.querySelectorAll('input[name="' + name + '"]:checked'),
    values = [];
  checkeds.forEach(function(chkd) {
    values.push(chkd.value);
  });
  return values;
}