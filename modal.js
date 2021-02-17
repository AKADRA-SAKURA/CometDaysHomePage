$(function () {
    $('#openModal').click(function(){
        $('#modalArea').fadeIn();
    });
    $('#closeModal , #modalBg').click(function(){
      $('#modalArea').fadeOut();
    });
  });

$(function() {
    $.getJSON("json/gallery.json" , function(data) {
      var
        ulObj = $("#modalContents"),
        len = data.length;
  
      for(var i = 0; i < len; i++) {
        ulObj.append($("<li>").attr({"id":data[i].id}).text(data[i].name));
      }
    });
});