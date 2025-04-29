function showDate() {
  var date = new Date();

  var dd = date.getDate() < 10? "0" + date.getDate():
  date.getDate();
  var mm = date.getMonth() + 1;
  var mm = mm < 10? "0" + mm: mm;
  var yyyy = date.getFullYear();
  var hh = date.getHours() < 10 ? "0" + date.getHours():
  date.getHours();
  var ii = date.getMinutes() < 10 ? "0" + date.getMinutes() :
  date.getMinutes();
  var ss = date.getSeconds() < 10 ? "0" + date.getSeconds() :
  date.getSeconds();

  $("#date").html(dd + "/" + mm + "/" + yyyy + " " + hh + ":" + ii + ":" + ss);
}

setInterval(showDate, 1000);