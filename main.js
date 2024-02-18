const whereAmI= function(lat, lng){
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res=>{
        if(!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
        return res.json();

    })
    .then(data=>{
        console.log(data);
        console.log(`you are in ${data.city},${data.country}`);
        return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(response=>{
        if(!response.ok)
        throw new Error(`Country not found(${response.status})`);
        return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err=> console.error(`${err.message}`));
};
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);

const imgContainer= document.querySelector('.images');
const createImage= function(imgPath){
    return new Promise(function(resolve,reject){
        const img= document.createElement('img');
        img.src=imgPath;
        img.addEventListener('load', function(){
            imgContainer.append(img);
            resolve(img);
        });
        img.addEventListener('error', function(){
            reject (new Error('Image not found'));
        });
    });
};
createImage('img/img-1.jpg').then(img =>{
    console.log('image 1 load');
    return Wait(2);
})
.then(()=>{
    currentImg.style.display='none';
    return createImage('img/img-2.jpg');
    
})
.then(img => {
    currentImg=img;
    console.log('image 2 load');
    return Wait(2);

})
.then(()=>{
    currentImg.style.display='none';
})
.catch(err => console.error(err));

const loadPause= async function(){
    try{
        let img = await createImage('img/img-1.jpg');
        console.log('image 1 load');
        await Wait(2);
        img.style.display='none';

         img = await createImage('img/img-2.jpg');
        console.log('image 2 load');
        await Wait(2);
        img.style.display='none';
    }catch(err){
        console.log(err);


    }
};
loadPause();

const loadAll = async function(){
    try{
        const imgs = imgArr.map(async img => await createImage(img));
        console.log(imgs);

        const imgsEl= await Promise.all(imgs);
        console.log(imgsEl);
        imgsEl.forEach(img =>img.classList.add('parallel'));
    }catch(err){
        console.log(err);
    };

};
loadAll(['img/img-1.jpg','img/img-2.jpg','img/img-3.jpg']);