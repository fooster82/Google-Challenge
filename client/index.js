

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