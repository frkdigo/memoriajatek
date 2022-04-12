window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}

const kepekTomb = ["kepek/kep1.jpg", "kepek/kep1.jpg", "kepek/kep2.jpg", "kepek/kep2.jpg", "kepek/kep3.jpg", "kepek/kep3.jpg", "kepek/kep4.jpg", "kepek/kep4.jpg", "kepek/kep5.jpg", "kepek/kep5.jpg"]
kepekTomb.sort(function(a, b){return 0.5 - Math.random()});
const hatter = "kepek/hatter.jpg";
const kivalasztottTomb = [];

function init() {
    const tarolo = ID("kepek");
    let kepek = "";
    kepekTomb.forEach(function (elem, index) {
        kepek += "<img src='" + hatter + "'  alt='szörnyek' id = '" + index + "'>";
    })
    tarolo.innerHTML = kepek;

    const kepElemTomb = document.querySelectorAll("#kepek img");
    console.log(kepElemTomb);
    kepElemTomb.forEach(function (kepElem) {
        kepElem.addEventListener("click", megfordit)
    });
}
function megfordit() {
    var aktIndex = (event.target.id)
    console.log(aktIndex);
    if (kepekTomb[aktIndex]) {
        ID(aktIndex).src = kepekTomb[aktIndex];
        kivalasztottTomb.push(aktIndex);
    } else {
        ID(aktIndex).src = "kepek/hatter.jpg";
    }
    ID(aktIndex).removeEventListener("click", megfordit)

    if(kivalasztottTomb.length == 2){
        let feltetel = kepekTomb[kivalasztottTomb[0]] === kepekTomb[kivalasztottTomb[1]]
        const kepElemTomb = document.querySelectorAll("#kepek img");
        console.log(kepElemTomb);
        kepElemTomb.forEach(function (kepElem) {
            kepElem.addEventListener("click", megfordit)
        });

        if(!feltetel){
            setTimeout(function(){
            kivalasztottTomb.forEach(function(elem){
                document.getElementById(elem).src = hatter;
            });
            kivalasztottTomb.splice(0); /*kiüríti a tömböt*/
            ID(aktIndex).removeEventListener("click", megfordit)
        }, 1000);

        } else{
            setTimeout(function(){
            kivalasztottTomb.forEach(function(elem){
                console.log(elem);
                document.getElementById(elem).style.opacity = 0;
            });
            kivalasztottTomb.splice(0);
            ID(aktIndex).removeEventListener("click", megfordit)
        }, 1000);
        }
    }
}