const LIST=['kepek/kep10.jpg', 'kepek/kep11.jpg', 
'kepek/kep13.jpg', 'kepek/kep14.jpg', 
'kepek/kep12.jpg', 'kepek/kep16.jpg',
'kepek/kep10.jpg', 'kepek/kep11.jpg', 
'kepek/kep13.jpg', 'kepek/kep14.jpg', 
'kepek/kep12.jpg', 'kepek/kep16.jpg'];
const KIVALASZTOTTKEPEK=[];
let db=0;
$(function(){
    //ide jön a kód
    const FELSOELEM=$("#felso");
    let tartalom =osszeAllit();
    FELSOELEM.append(tartalom);
    
    const FELSOKEPEK=$("felso img");
    FELSOKEPEK.on("click", kepreKattintas);
  });

  

function kepreKattintas(){
    const aktKep=event.target;
    console.log(aktKep.id);
    console.log($(aktKep.id).attr("id"));
    aktKep.src=LIST[aktKep.id];
    KIVALASZTOTTKEPEK.push($(aktKep.id).attr("id"));
    db++
    if (db==2) {
        db=0
        visszafordit()
        
    }
  }
function visszafordit(){
/***vissza allitjukaz srct a hattere amelyikre kattintottunk */
    console.log(KIVALASZTOTTKEPEK);
    const FELSOKEPEK=$("felso img");

    setTimeout(function(){
        let aktKep = FELSOKEPEK.eq(KIVALASZTOTTKEPEK[0]);
    console.log(aktKep)
    $(aktKep).attr("src", "kepek/hatter.jpg")
    let aktKep = FELSOKEPEK.eq(KIVALASZTOTTKEPEK[1]);
    console.log(aktKep)
    $(aktKep).attr("src", "kepek/hatter.jpg")
    KIVALASZTOTTKEPEK.pop();
    KIVALASZTOTTKEPEK.pop();
    }, 1000)

    

}

function osszeAllit(){
    let txt= "";
    for(let index = 0; index< LIST.length; index++){
        txt+= `<div><img src="kepek/hatter.jpg" alt="" id="${index}"></div>`;
  }
  console.log(txt);
  return txt;
}