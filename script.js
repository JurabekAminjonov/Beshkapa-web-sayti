let API = 'https://randomuser.me/api/?results=12';
let API1 = 'https://randomuser.me/api/?results=6';
let API2 = 'https://randomuser.me/api/?results=6'
// https://diller-uz.onrender.com
let menuIcon = document.querySelector('#menuIcon');
let navMenu = document.querySelector('#nav-menu');
let navMenuUl = document.querySelector('#nav-menu-ul');
let closeMenu = document.querySelector('#boshMenuClose');
let boshMenuLorem = document.querySelector('.bosh-sahifa-lorm-more');
let leremMoreBtn = document.querySelector('.lorem-mere-btn');
let mahallaAzolar = document.querySelector('#mahallaAzolar');
let yangilaklarItem = document.querySelector('.yangilaklar-item')
let galleri = document.querySelector('.galleri')
 
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('menuEks');
    let icon = menuIcon.classList.contains('menuEks')
    console.log(icon)
    if(icon){
        navMenu.style.display = 'block';
        navMenuUl.style.transform = ` translateX(0%)`}

    else if(!icon){
        navMenu.style.display = 'none';
    navMenuUl.style.transform = ` translateX(100%)`;
    }
});


closeMenu.addEventListener('click', ()=>{
    boshMenuLorem.style.display = 'none';
});
leremMoreBtn.addEventListener('click', ()=>{
    boshMenuLorem.style.display = 'block';
});


// <--------------------------Mahalla azolari----------------->
 
let getData = async(resurse) =>{
    const request = await fetch(resurse);
    const data = await request.json();
    let User = (data.results);
    User.forEach((e) => {

        mahallaAzolar.innerHTML += `
        <div class="col-10 col-md-4 col-lg-3 xodim">
        <div class="xodim-img"><img src="${e.picture.large}"></div>
        <h4>${e.phone}</h4>
        <h4>${e.name.first} ${e.name.last}</h4>
        <p>${e.registered.age}, ${e.registered.date} </p>
        </div>
        `

    });

}
getData(API)

// <!-- ----------------yangiliklar------------------- -->

let getData1 = async(resurse) =>{
    const request = await fetch(resurse);
    const data = await request.json();
    let User = (data.results);
    console.log(User)

    User.forEach((e) => {
        yangilaklarItem.innerHTML += `
            <div class="col-10 col-md-4 col-lg-3 y-item">
                <div class="y-item-page"><img src='${e.picture.large}'/></div>
                <h5 class="y-item-title">${e.login.uuid}</h3>
            </div>
        `
    });

}

getData1(API1)
// <!-- ----------------GALLERIA------------------- -->

let getData2 = async(resurse) =>{
    const request = await fetch(resurse);
    const data = await request.json();
    let User = (data.results);
    console.log(User)

        galleri.innerHTML += `
        <div class="rasimlar mt-5">
        <div class="row rasimlar-row">
            <div class="col-12 col-md-7 y-item1"><img src="${User[5].picture.large}" alt=""></div>
            <div class="col-12 col-md-4 y-img" >
                <div class="row">
                    <div class="col-12 y-item"><img  src="${User[4].picture.large}" alt=""></div>
                </div>
                <div class="row">
                    <div class="col-12 y-item"><img src="${User[2].picture.large}" alt=""></div>
                </div>
            </div>
        </div>
    </div>

    <div class="rasimlar mt-5">
        <div class="row rasimlar-row">
            <div class="col-12 col-md-4 y-img" >
                <div class="row">
                    <div class="col-12 y-item"><img  src="${User[5].picture.large}" alt=""></div>
                </div>
                <div class="row">
                    <div class="col-12 y-item"><img src="${User[2].picture.large}" alt=""></div>
                </div>
            </div>
            <div class="col-12 col-md-7 y-item1 "><img src="${User[3].picture.large}" alt=""></div>
        </div>
    </div>
        `

}
{/* <img src='${e.picture.large}'/> */}

getData2(API2)