// function a(a){
//     return function(b){
//         return function(c){
//             return function (d){
//                 return function(e){
//                     return a+b+c+d+e
//                 }
//             }
//         }
//     }
// }
// console.log (a(1)(2)(3)(4)(5))


const tBody = document.getElementById("tbody")
axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>{
   
   
    let html = ""
    for (let i = 0; i < res.data.length; i++) {
        const {userId, id, title, body}=res.data[i]
       html+=`
       <tr>
       <th scope="row">${userId}</th>
       <td>${id}</td>
       <td>${title}</td>
       <td>${body}</td>
     </tr>
    
       `
        
    }
    tBody.innerHTML = html 
})