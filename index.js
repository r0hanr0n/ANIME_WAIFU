// Uncomment the whole section at once.

/* THIS IS A BASIC WAIFU GENERATOR */

let url = "https://api.waifu.im/search";
// let tagsUrl = "https://api.waifu.im/tags";

// let tagProm1 = fetch(tagsUrl).then((res)=>res.json());
// let tagProm2 = tagProm1.then((r)=>{return r.nsfw[0]});
// tagProm2.then((rs)=>{
//     const finalUrl = `${url}?included_tags=${rs}`;
//     // console.log(finalUrl);
//     document.querySelector("img").setAttribute("src", finalUrl);
// });
// let finalUrl = `${url}?included_tags=${tagProm2}`;

// let tagProm = fetch(tagsUrl);
// tagProm.then((res)=>{
//     return res.json();
// }).then((r)=>{
//     // console.log(r.nsfw[0]);
//     document.querySelector("img").setAttribute("src", finalUrl);
// });

/* FOR SINGLE IMAGE GENERATION */

// function waifu() {
//     let prom = fetch(url);
//     console.log(prom);
//     prom.then((res)=>{
//         // Uncomment for Developer purpose only:
//         // console.log(res);
//         // Don't execute console.log(res.json()); if you want to return it.
//         // console.log(res.json());
//         return res.json();
//     }).then((r)=>{
//         // Uncomment for Developer Purpose only:
//         // If you open url generated below in chrome tab,
//         // you will see the same image.
//         // console.log(r.images[0].url);
//         document.querySelector("img").setAttribute("src", r.images[0].url);
//     });
// }

/* FOR CONTINUOUS IMAGE GENERATION */

// setInterval(()=>{
//     let prom2 = fetch(url);
//     prom2.
//     then((res)=>res.json()).
//     then((r)=>document.querySelector("img").
//     setAttribute("src", r.images[0].url));
// }, 2000);

/* =========================================== */

/* THIS IS AN ADVANCED WAIFU GENERATOR */

// DECLARING PARAMETERS:

let category = "decent";
function categoryCheck () {
    if (category == "decent") {
        const params = {
            // included_tags: 'waifu',
            included_tags: 'uniform',
        }
        return params;
    } else if (category == "horny"){
        const params = {
            included_tags: 'waifu',
            // included_tags: 'hentai',
            // included_tags: 'oral',
            // included_tags: 'ass',
            // included_tags: 'milf',
            // included_tags: 'paizuri',
            // included_tags: 'ecchi',
            // gif: true
        }
        return params;
    }    
}

function categoryChange(cat) {
    if (cat == "decent") {
        category = "decent";
    } else if (cat == "horny") {
        category = "horny";
    }
}

// console.log(requrl);

/* FOR SINGLE IMAGE GENERATION */

function waifu() {
    let param =categoryCheck();
    let qp = new URLSearchParams(param);
    let requrl = `${url}?${qp}`;
    document.querySelector("img").classList.remove("disp");
    let prom = fetch(requrl);
    console.log(prom);
    prom.then((res)=>{
        console.log(res);
        // console.log(res.json());
        return res.json();
    }).then((r)=>{
        console.log(r.images[0].url);
        document.querySelector("img").setAttribute("src", r.images[0].url)
    });
}

/* FOR CONTINUOUS IMAGE GENERATION */

// setInterval(()=>{
//     let prom2 = fetch(requrl);
//     console.log(prom2);
//     prom2.then((res)=>res.json())
//     .then((r)=>document.querySelector("img")
//     .setAttribute("src", r.images[0].url));
//     }, 3000);
