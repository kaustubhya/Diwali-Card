const receiverName = document.querySelector("#receiver");
const senderName = document.querySelector("#sender");

receiverName.innerText = new URLSearchParams(location.search).get("receiver");
senderName.innerText =
  new URLSearchParams(location.search).get("sender") || "Kaustubhya Shukla";

//   http://127.0.0.1:5500/?receiver=mom%20and%20dad&sender=saksham