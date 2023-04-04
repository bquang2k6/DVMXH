function showCart(){
    var json = localStorage.getItem('product')
    if(json == null){
        listAr = [];
    }
    else{
        listAr = JSON.parse(json)
    }
    for (let i = 0; i < listAr.length; i++) {
        const element = listAr[i];
        var tbody = document.querySelector("tbody")
        var tr = document.createElement('tr')
        tr.innerHTML = `
                        <th scope="row">${i+1}</th>
                        <td><img src="${element.img}"></td>
                        <td>${element.h5}</td>
                        <td>@mdo</td>
                        `;
        tbody.appendChild(tr);

    }
}
showCart();