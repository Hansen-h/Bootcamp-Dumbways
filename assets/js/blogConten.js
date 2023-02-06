let blogs = [];

function getDat(e) {
    e.preventDefault()

    // delaclaration variable dom selection
    let namaProjek = document.getElementById('nama-projek').value;
    let dateAwal = document.getElementById('tgl-awal').value;
    let dateAkhir = document.getElementById('tgl-akhir').value;
    let deskrip = document.getElementById('description').value;

    let nodeJS = document.getElementById('node-js').checked ? document.getElementById('node-js').value : false;
    let reactJS = document.getElementById('react-js').checked ? document.getElementById('react-js').value : false;
    let nextJS = document.getElementById("next-js").checked ? document.getElementById('next-js').value : false;
    let golang = document.getElementById('golang').checked ? document.getElementById('golang').value : false;
    let upImg = document.getElementById('take-file').files;

    if (namaProjek == "") {
        alert ('Tolong isi bagian nama projek anda')
    } else if (dateAwal == ""){
        alert ('Tolong masukkan tanggal yang sesuai')
    } else if (dateAkhir == ""){
        alert ('Tolong masukkan tanggal yang sesuai')
    } else if (deskrip == ""){
        alert('Tolong masukkan deskripsi dengan benar')
    } else if (nodeJS == false && reactJS == false && nextJS == false && golang == false){
    }

    // Convert spesific image to blob object
    upImg = URL.createObjectURL(upImg[0])

    let dataBlog = {
        namaProjek,
        dateAwal,
        dateAkhir,
        deskrip,
        nodeJS,
        reactJS,
        nextJS,
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
        <div class="blog-detail">
            <div class="blog-detail-container">
                <img src="${blogs[i].upImg}" alt="" />
            </div>
            <div class="blog-project">
            <div>
                <button >Edit Post</button>
                <button >Post Blog</button>
            </div>
            <h1>
                <a href="blog-detail.html" target="_blank">${blogs[i].namaProjek}</a>
            </h1>
            <div class="detail-blog-content">
                ${blogs[i].postedAt} | ${blogs[i].author}
            </div>
            <p>${blogs[i].deskrip}</p>
            <div style="float:right; margin: 10px">
                <p style="font-size: 15px; color:grey">1 minutes ago</p>
            </div>
            <div style="width="100px" height="50px">
            ${blogs[i].nodeJS&&reactJS&&nextJS&&golang}
            </div>
            </div>
        </div>
        `
    }
}
 