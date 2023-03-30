$(document).ready(function () {
  $("#inputBox").keypress(function (e) {
    var key = window.event ? e.keyCode : e.which;
    if (key == 13) $("#btnSend").click();
  });
  $("#btnSend").on("click", function () {
    let txt = $("#inputBox").val();
    $("#inputBox").val("");
    ws.send(txt);
  });
});
//使用 WebSocket 的網址向 Server 開啟連結

var ws = new WebSocket("ws://localhost:3001");

ws.onopen = () => {
  console.log("open connection");
};

ws.onclose = () => {
  console.log("close connection");
};

//接收 Server 發送的訊息
ws.onmessage = (event) => {
  //   console.log(event);
  if (!$("#chatBox").val()) $("#chatBox").val(event.data);
  else $("#chatBox").val($("#chatBox").val() + "\n" + event.data);
};
