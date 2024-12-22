const products =[
    {
        id:1,
        name:"Gömlek",
        cost:45,
        stock:15
    },
    {
        id:2,
        name:"Pantolon",
        cost:55,
        stock:20
    },
    {
        id:3,
        name:"Küpe",
        cost:15,
        stock:10
    },
    {
        id:4,
        name:"Etek",
        cost:65,
        stock:30
    }
    
];

let balance = 500;


function shopBag(){
    const addBag = prompt("Hangi ürünü sepete eklemek istersiniz?").toLocaleLowerCase();
    const addedproduct = products.find((product) => product.name.toLocaleLowerCase()===addBag);
   
        if(addedproduct){
            console.log("Sepete eklendi");
            console.log(addedproduct);
            
        } else{
            console.log("Geçersiz ürün ismi girdiniz");

        }
        
        return addedproduct;
    }

    


function buyProduct(){
    listProducts();
    
    const addedproduct = shopBag();
    const howMuch = Number(prompt("Kaç tane almak istersiniz"));
   
    if(howMuch<= addedproduct.stock && balance>= (howMuch*addedproduct.cost)){
       newStock= (addedproduct.stock) - howMuch;
       balance = balance-(howMuch*addedproduct.cost);
       
       console.log("Bakiye ve stok güncellendi");
    }
    else{
        console.log("Bakiyeniz ya da stok durumu satın almaya uygun değil");
    }
    
    const choice = Number(prompt("bakiyenizi görmek ister misiniz? /1-evet,2-hayır"));
    if(choice===1){
        showBalance();
    }
    else{
        return;
    }
    return {newStock, balance};
}

function addBalance(){
    const addmore = Number(prompt("Bakiyenize ne kadar ekleme yapmak istersiniz"));
      balance = balance + addmore;
    console.log(`Yeni bakiye:${balance}`);
    const choice = Number(prompt("bakiyenizi görmek ister misiniz? /1-evet,2-hayır"));
    if(choice===1){
        showBalance();
    }
    else{
        return;
    }

    return balance;
}

function showBalance(){
    console.log(`Bakiye: ${balance}`);
    return balance;
}

function listProducts(){
    console.log("Product List");
    products.forEach((product,index)=>{
        console.log(`${index+1}. Product:${product.name}, Cost: ${product.cost}, Stok:${product.stock}`);
    });
    const choice = Number(prompt("bakiyenizi görmek ister misiniz? /1-evet,2-hayır"));
    if(choice===1){
        showBalance();
    }
    else{
        return;
    }
   
}


const choice = Number(prompt("Mağazamıza Hoşgeldiniz Yapmak İstediğiniz İşlemi Seçiniz\n 1-Ürünleri Listele\n 2-Sepeti göster\n 3-Ürün Satın al\n 4-Bakiye Ekle\n 5-Bakiye Göster\n 6-Çıkış Yap"));
if(choice===1){
    listProducts();
}
else if(choice===2){
    shopBag();
}
else if(choice===3){
    buyProduct();
}
else if(choice===4){
    addBalance();
}
else if(choice===5){
    showBalance();
}
else {
    

}