let btns=document.getElementsByClassName("btn");

function calculateprice(){
    var unitprice,qty,price,
    getElement=this.parentNode.parentNode,
    unitPriceElement=getElement.getElementsByClassName("actualprice")[0],
    qtyElement=getElement.getElementsByClassName("quantity")[0],
    priceElement=getElement.getElementsByClassName("price")[0];

    unitprice=unitPriceElement.innerText;
    unitprice=unitprice.split(",").join("");
    console.log(unitprice);
    qty=qtyElement.value;
    price=unitprice*qty;

    priceElement.innerText=price;
}

for(var i=0 ; i < btns.length ; i++){
    btns[i].addEventListener("click",calculateprice);
}
