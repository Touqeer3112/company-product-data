
// const companies = [
//     {
//         name: "Audi",
//         products: [
//             { S,NO : 1, Model: "Audi e-tron", price: 50000000 , unitsSold: 300 },
//             { S,NO : 2, Model: "Audi e-tron GT", price: 80000000 , unitsSold: 150 },
//             { S,NO : 3, Model: "Audi Q2", price: 7200000 , unitsSold: 100},
//         ]
//     },
//     {
//         name: "KIA",
//         products: [
//             { S,NO : 1, Model: "KIA Sorento", price: 90.00000, unitsSold: 200 },
//             { S,NO : 2, Model: "KIA Stonic", price: 55.00000, unitsSold: 400 },
//             { S,NO : 3, Model: "KIA sportage", price: 90.00000 , unitsSold: 180},
//         ]
//     },
//     {
//         name: "Toyota",
//         products: [
//             { S,NO : 1, Model: "Toyota Corolla", price: 75.00000, unitsSold: 100 },
//             { S,NO : 2, Model: "Toyota Aqua", price: 69.00000, unitsSold: 50 },
//             { S,NO : 3, Model: "Toyota Hilux", price: 1.5400000 , unitsSold: 150},
//         ]
//     }
// ];

// function displayName() {
//     let content = '';

    
//     for (let i = 0; i < companies.length; i++) {
//         let company = companies[i];

    
//         content += `<div class="company-title">${company.name}</div>`;
//         content += `<table>
//         <tr>
//             <th>S,No</th>
//             <th>Model</th>
//             <th>Price ($)</th>
//             <th>Units Sold</th>
//         </tr>`;

//         for (let j = 0; j < company.products.length; j++) {
//             let product = company.products[j];

//             content += `
//             <tr>
//                 <td>${product.S,No}</td>
//                 <td>${product.Model}</td>
//                 <td>${product.price}</td>
//                 <td>${product.UnitsSold}</td>
//             </tr>`;
//         }

//         content += `</table>`;
//     }

//     document.getElementById('company').innerHTML = content;
// }
// displayName();





// console.log("testing");

var  Audi = [
    // {
        // name: "Audi",
        // products: [

            { SerialNumber : 1, Model: "Audi e-tron", price: 50000000 , unitsSold: 30 },
            { SerialNumber : 2, Model: "Audi e-tron GT", price: 80000000 , unitsSold: 9 },
            { SerialNumber : 3, Model: "Audi Q2", price: 7200000 , unitsSold: 10},
         

        // ]
    // },
];
var  KIA = [
    // {
    //     name: "KIA",
    //     products: [
            { SerialNumber : 1, Model: "KIA Sorento", price: 9000000, unitsSold: 20 },
            { SerialNumber : 2, Model: "KIA Stonic", price: 5500000, unitsSold: 40 },
            { SerialNumber: 3, Model: "KIA sportage", price: 9000000 , unitsSold: 18},
          
            
    //     ]
    // },
];
var  Toyota = [
    // {
    //     name: "Toyota",
    //     products: [
            { SerialNumber: 1, Model: "Toyota Corolla", price: 7500000, unitsSold: 10 },
            { SerialNumber : 2, Model: "Toyota Aqua", price: 6900000, unitsSold: 50 },
            { SerialNumber : 3, Model: "Toyota Hilux", price: 15400000 , unitsSold: 19},
    //       
    // //     ]
    // }
];
function display(a,target){
    var target = document.getElementById(target);
    for(let i=0; i < a.length; i++){
        // console.log(i);
        target.innerHTML +=
        `
        <tr>
            <td>${a[i].SerialNumber}</td> 
            <td>${a[i].Model}</td> 
            <td>${a[i].price}</td> 
            <td>${a[i].unitsSold}</td> 
            <td>${a[i].price * a [i].unitsSold}</td> 
        </tr>
        `   
    }
};


//Function Run
display(Audi,"Audi");
display(KIA,"KIA");
display(Toyota,"Toyota");

