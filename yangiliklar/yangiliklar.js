let APIY = 'https://randomuser.me/api/?results=100';
let yangilaklarItemYangi = document.querySelector('.yangilaklar-item-yangi')

let getData5 = async(resurse) =>{
    const request = await fetch(resurse);
    const data = await request.json();
    let UserY = (data.results);
    console.log(UserY)

    UserY.forEach((e) => {
        yangilaklarItemYangi.innerHTML += `
            <div class="col-10 col-md-4 col-lg-3 y-item">
                <div class="y-item-page"><img src='${e.picture.large}'/></div>
                <h5 class="y-item-title">${e.login.uuid}</h3>
            </div>
        `
    });

}
getData5(APIY)