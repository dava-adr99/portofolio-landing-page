
// === Logo D vector ====
let canvasKita = document.getElementById('myCanvas');
canvasKita.width = 400;
canvasKita.height = 300;
canvasKita.style.backgroundColor = 'transparent';
const ctx = myCanvas.getContext('2d');

let fixedX = myCanvas.width/2;
let fixedY = myCanvas.height/2;

var primaryColor1 = "#E26A2C";

function drawLogo(){
    // lingkarang pembuat D
    ctx.beginPath();
    ctx.arc(fixedX, fixedY, 100, 0, Math.PI*2, false);
    ctx.fillStyle = primaryColor1;
    ctx.fill();

    // persegi pembuat D
    ctx.fillStyle = primaryColor1;
    ctx.fillRect(fixedX-100, fixedY+60, 100, 40);

    // persegi pelubang D
    ctx.fillStyle = "white";
    ctx.fillRect(fixedX-60, fixedY, 60, 60);

    // lingkaran pelubang D
    ctx.beginPath();
    ctx.arc(fixedX, fixedY, 60, 0, Math.PI*2, false);
    ctx.fillStyle = 'white';
    ctx.fill();

    // setengah lingakan pemotong garis mendatar D
    ctx.beginPath();
    ctx.arc(fixedX-100, fixedY, 100, 0, Math.PI, false);
    ctx.fillStyle = 'white';
    ctx.fill();

    // persegi kecil di garis tegak D
    ctx.fillStyle = primaryColor1;
    ctx.fillRect(fixedX-100, fixedY, 40, 40);

    // lingkaran kecil full digaris tegak D
    ctx.beginPath();
    ctx.arc(fixedX-80, fixedY+40, 20, 0, Math.PI*2, false);
    ctx.fillStyle = primaryColor1;
    ctx.fill();

}

var raf;

class persegi {
    constructor(x, y, vx, vy, panjang, lebar, warna) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.lebar = lebar;
        this.panjang = panjang;
        this.warna = warna;
    }

    draw(){
        ctx.fillStyle = this.warna;
        ctx.fillRect(this.x, this.y, this.panjang, this.lebar);
    }

}


function clear(){
    ctx.fillStyle = 'rgba(255,255,255, 1)';
    ctx.fillRect(0,0,myCanvas.width, myCanvas.height);
}




let persegi1 = new persegi(0,fixedY+60,2,0,-100,40,primaryColor1);
let persegi2 = new persegi(fixedX-100,myCanvas.height,0,-2,40,100,primaryColor1);

function animateRectangle(){
    clear();
    if(persegi1.x > fixedX){
        drawLogo();
    }
    persegi1.draw();
    persegi2.draw();   
    ctx.fillStyle = 'rgba(255,255,255, 1)';
    ctx.fillRect(fixedX,0,myCanvas.width, myCanvas.height);
    ctx.fillRect(0,0,myCanvas.width, fixedY);
     
    
    persegi1.x += persegi1.vx;
    persegi2.y += persegi2.vy;

    if(persegi2.y + persegi2.vy < 0|| persegi1.x + persegi1.vx > myCanvas.width){
        window.cancelAnimationFrame(raf);
        clear();
        drawLogo();
        ctx.font = '24px Poppins semibold';
        ctx.fillText('D Vector Arts', fixedX-80, fixedY+140);
    } else{
        raf = window.requestAnimationFrame(animateRectangle);
    }
    console.log(persegi2.y)
}
 
animateRectangle();


// ===== 3D Script =====
// const renderer = new THREE.WebGL1Renderer();
// const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
// const scene = new THREE.Scene();

// let object3d;
// let light;

// function init() {
//     scene.background = new THREE.Color('white');
//     camera.position.set(0, 10, 28);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);
// }

// function setLight(){
//     light = new THREE.AmbientLight(0xffffff);
//     scene.add(light);
// }

// function loadGLTF() {
//     let object3dLoader = new THREE.GLTFLoader();
    
//     object3dLoader.load('Assets/3dObject/Object3D-website.gltf', (gltf) => {
//         object3d = gltf.scene;
//         scene.add(object3d);
//         object3d.position.x = 0;
//         object3d.position.y = 10;
//         object3d.position.z = 15;
//     });
// }

// init();
// setLight();
// loadGLTF();

// ===== SCROLLREVEAL =====
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
    reset: false,
});

scrollReveal.reveal(`
    .h1-nama, 
    .h3-describe, 
    .h3-link, 
    .lead, 
    .box-bg    
    `, 
    {interval: 100,}
);

scrollReveal.reveal(`
    .konten-about-me,
    #about-me,
    #skills,
    .box-skills,
    #works
    `, 
    {interval: 300,}
);

// === nav link when active === (manipulasi element menggunakan DOM)
const menu = document.querySelector(".navbar");

// 2. jika element dengan class navbar diklik
menu.addEventListener('click', function(e) {
    // 3. maka ambil element apa yang diklik oleh user
    const targetMenu = e.target;

    // 4. lalu cek, jika element itu adalah link dengan class nav-link
    if(targetMenu.classList.contains('nav-link')) {
            
        // 5. maka ambil menu link yang aktif
        const menuLinkActive = document.querySelector(".nav-link.active");

        // 6. lalu cek, Jika menu link active ada dan menu yang di klik user adalah menu yang tidak sama dengan menu yang aktif, (cara cek-nya yaitu dengan membandingkan value attribute href-nya)
        if(menuLinkActive !== null && targetMenu.getAttribute('href') !== menuLinkActive.getAttribute('href')) {

            // 7. maka hapus class active pada menu yang sedang aktif
            menuLinkActive.classList.remove('active');
        }

        // 8. terakhir tambahkan class active pada menu yang di klik oleh user
        targetMenu.classList.add('active');
    }
});

