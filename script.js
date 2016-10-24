addListItem("sophia" + "/notes", "hi there!!!!")

var name;
var nameInput = $("#name-input").val();
var noteInput = $("#note-input")
var noteList = $("#note-list")

nameInput.keydown(function(e) {
  if (e.keyCode == 13) {
getNotesForName(nameInput.val())
$('#name-input').val('nameInput');
  }	
})

var bla = $('#txt_name').val();
$('#txt_name').val('bla');

function getNotesForName(name) {  
  onNewListItem(name + "/notes", function(note) {
    console.log(hi)
  })
}

noteInput.keydown(function(e) {
  if (e.keyCode == 13) {    
    addListItem(name + "/notes", noteInput.val())
  }
})
