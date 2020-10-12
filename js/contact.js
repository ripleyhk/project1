const submit = document.getElementById('submit');
const mail_to = "hriple@gmail.com"
const mail_from;
const subject;
const name;
const comment;

submit.addEventListener('click', mail());

function sendMail() {
   var link = "mailto:" + mail_to
            + "&subject=" + encodeURIComponent(subject)
            + "&body=" + encodeURIComponent(comment + "\n" + name + "(" + mail_from + ")");
   ;
   
   window.location.href = link;
}

function mail () {
   mail_from = document.getElementById('email').value;
   subject = document.getElementById('subject').value;
   name = document.getElementById('name').value;
   comment = document.getElementById('comment').value;
   if (mail_from && subject && name && comment) {
      sendMail();
   } else {
      alert("One or more message fields is empty!");
   }
}