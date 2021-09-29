
// const key = "AIzaSyDGxjb37qHVXzvLRNCqe3ibebG6kgt_Xcg";
// const engineId = "3a3f3266232d4c34b"
// // let searchterm = "dog";




const homeform = document.querySelector('#Homesearch');
homeform.addEventListener('submit', (e) => {
    e.preventDefault();
    searchterm = e.target.query.value;  

    fetch('http://localhost:3000/', {
            method:"POST",
            body: JSON.stringify({searchterm: searchterm}),
            headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res => res.json())
            .then(data => buildResults(data))
                     
})


const searchform = document.querySelector('#Searchsearch');
searchform.addEventListener('submit', (e) => {
    e.preventDefault();
    searchterm = e.target.query.value;  
    let searchResults = document.querySelector('.searchresults');
    searchResults.innerHTML = "";
    fetch('http://localhost:3000/', {
            method:"POST",
            body: JSON.stringify({searchterm: searchterm}),
            headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res => res.json())
            .then(data => buildResults(data))
})

function buildResults(data){
    document.querySelector('#homePage').style.display = 'none';
    document.querySelector('#searchPage').style.display = 'block';
    let searchResults = document.querySelector('.searchresults');
    searchResults.innerHTML = "";
    console.log(data)
    for (let a= 0; a < (data.length); a++){
        title = data[a]['title'];
        link = data[a]['link'];


        let para = document.createElement('p');
        para.innerHTML = `<a href="${link}">${title}</a>`;
        searchResults.append(para);
    }

}
        
        
       // "Below is non-functional code to try to implement the google search api"  
// function search(searchTerm){
//         url =`https://www.googleapis.com/customsearch/v1?q=${searchTerm}&cx=${engineId}&key=${key}`;
//         console.log(url);
//         fetch(url)
//         .then(res => res.json())
//         .then(data => console.log(data))
// //         .then(data => processData(data))
//         .catch(err => console.warn(err));
// }
// function processData(data){
//     fetch("http://localhost:3000/",{
//         method: "POST",
//         body: JSON.stringify({data: data}),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })
//     .then(res => res.json())


        
        
        
        




















// https://www.googleapis.com/customsearch/v1?q=cat&cx=3a3f3266232d4c34b&key=AIzaSyDGxjb37qHVXzvLRNCqe3ibebG6kgt_Xcg