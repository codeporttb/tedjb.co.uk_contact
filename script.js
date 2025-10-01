function sendmail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

emailjs.send("service_5cqu3kf","template_jsnyxe4",parms).then(alert("Email Sent"))

}