function getDok(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let subject = document.getElementById('subject').value;
    let msg = document.getElementById('msg').value;

    if(name == ""){
        alert('Tolong bagian nama segera diisi');
    } else if (email == ""){
        alert('Tolong bagian email segera diisi');
    } else if (phone == ""){
        alert('Tolong bagian nomor telepon segera diisi');
    } else if (subject == ""){
        alert('Tolong dipilih');
    } else if (msg == "") {
        alert ('Tolong tinggalkan pesan');
    } else {
        alert('Segera dikirimkan melalui email');
    }

    const defaultEmail = "hanseenn01@gmail.com";

    let mailTo = document.createElement('a');
    mailTo.href = `mailto:${defaultEmail}?subject=${subject}&body=Halo nama saya ${name}. Saya ingin ${msg}. Berikut nomor yang bisa dihubungi : ${phone}`
    mailTo.click();

    let audience = {
        name,
        email,
        phone,
        subject,
        msg
    }
    console.log(audience);
}