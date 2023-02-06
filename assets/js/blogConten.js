let blogs = [];

function getDat(e) {
    e.preventDefault()

    // delaclaration variable dom selection
    let namaProjek = document.getElementById('nama-projek').value;
    let dateAwal = document.getElementById('tgl-awal').value;
    let dateAkhir = document.getElementById('tgl-akhir').value;
    let deskrip = document.getElementById('description').value;

    let nodeJS = document.getElementById('node-js').checked ? '<i class="fa-brands fa-node"></i>' : false;
    let reactJS = document.getElementById('react-js').checked ? '<i class="fa-brands fa-react fa"></i>' : false;
    let python = document.getElementById("python").checked ? '<i class="fa-brands fa-python"></i>' : false;
    let golang = document.getElementById('golang').checked ? '<i class="fa-brands fa-golang"></i>' : false;
    let upImg = document.getElementById('take-file').files;

    if (namaProjek == "") {
        alert ('Tolong isi bagian nama projek anda')
    } else if (dateAwal == ""){
        alert ('Tolong masukkan tanggal yang sesuai')
    } else if (dateAkhir == ""){
        alert ('Tolong masukkan tanggal yang sesuai')
    } else if (deskrip == ""){
        alert('Tolong masukkan deskripsi dengan benar')
    } else if (nodeJS == false && reactJS == false && python == false && golang == false){
        alert('Tolong pilih salah satu')
    } 
    
    // Convert spesific image to blob object
    upImg = URL.createObjectURL(upImg[0])

    dateAwal = new Date(dateAwal);
    dateAkhir = new Date(dateAkhir);
    let duration = Math.floor((dateAkhir - dateAwal)/ (30*24*60*60*1000));
    if (duration > 0) 
        duration = `${duration} month${duration > 1 ? "s" : ""}`;
    else {
      duration = Math.floor((dateAkhir - dateAwal)/ (7*24*60*60*1000));
      if (duration > 0) 
        duration = `${duration} week${duration > 1 ? "s" : ""}`;
      else {
        duration = Math.floor((dateAkhir - dateAwal)/ (24*60*60*1000));
        if (duration > 0) 
            duration = `${duration} day${duration > 1 ? "s" : ""}`;
        else {
          duration = Math.floor((dateAkhir - dateAwal)/ (60*60*1000));
          if (duration > 0) 
            duration = `${duration} hour${duration > 1 ? "s" : ""}`;
          else {
            duration = Math.floor((dateAkhir - dateAwal)/ (60*1000));
            if (duration > 0) 
                duration = `${duration} minute${duration > 1 ? "s" : ""}`;
            else {
              duration = Math.floor((dateAkhir - dateAwal)/ (1000));
              if (duration > 0) 
                duration = `${duration} second${duration > 1 ? "s" : ""}`;
              else duration = "";
            }
          }
        }
      }
    }

    let dataBlog = {
        namaProjek,
        dateAwal,
        dateAkhir,
        duration,
        deskrip,
        nodeJS,
        reactJS,
        python,
        golang,
        upImg,
        author: "Hansen",
        postedAt: new Date()
    }
    blogs.push(dataBlog)
    console.log(blogs)
    showData()
}

// declaration function show list preview data blog
function showData(){
    document.getElementById('conten').innerHTML = ""
    for(let i=0; i<= blogs.length; i++){
        document.getElementById('conten').innerHTML += `
        <div class="blog-container">
            <div class="blog-project">
                <img src="${blogs[i].upImg}" alt="" />
                <a href="blog-detail.html" target="_blank"><h3>${blogs[i].namaProjek}</h3></a>
                <div class="comment" style="display="flex"; float:left; margin: 5px; ">
                <p style="font-size: 15px; color:grey">durasi : ${blogs[i].duration}</p>
                </div>
                <p>${blogs[i].deskrip}</p>

                <div class="icon">
                ${blogs[i].nodeJS != false ? blogs[i].nodeJS : ""}
                ${blogs[i].reactJS != false ? blogs[i].reactJS : ""}
                ${blogs[i].python != false ? blogs[i].python : ""}
                ${blogs[i].golang != false ? blogs[i].golang : ""}
                </div>

                <div class="btn">
                    <button> Edit Post </button>
                    <button> Delete Post </button>  
                </div>
                </div>
                <div style="width="100px" height="50px">
                </div>
            </div>
        </div>
        `
    }
}