
const express = require('express')
const cors = require('cors')
const bodyParser =require('body-parser')
const fetch = require('node-fetch')
const search = require('./search.json')
const { checkPrimeSync } = require('crypto')
const app = express();
const key = "AIzaSyDGxjb37qHVXzvLRNCqe3ibebG6kgt_Xcg";
const engineId = "3a3f3266232d4c34b"
app.use(express.json());
app.use(cors());


async function googleAPI(searchTerm){
    let url =`https://www.googleapis.com/customsearch/v1?q=${searchTerm}&cx=${engineId}&key=${key}`;
    console.log(url);
//     fetch(url).then(response=> response.json()).then(data=> {console.log(data);
//     }).catch(error=>{
//    //handle error here
// });
    // fetch(url)
    // .then(response => response.json())
    // // .then(data => console.log(data))
    // .then(data => processData(data))
    // .then(searchResults => return(searchResults))
    // .catch(err => console.warn(err))

    try {
        let resp = await fetch(url);
        let data = await resp.json();
        let searches = await processData(data);
        // console.log(searches)
        return searches

    } catch(err){
        console.warn(err);
    }

    
    // console.log(data)
//         .then(data => processData(data))

}



app.post('/', async (req,res) => {
    let choice = req.body.searchterm;
    console.log(choice);
    console.log(typeof(choice))
    // res.json({message: "working"})
    // search(choice);
    toSend = await googleAPI(choice);
    console.log(toSend);
    res.json(toSend);
    // switch(choice){
    //     case"cat":
    //         res.json(search.cat)
    //         break;
    //     case"dog":
    //         res.json(search.dog)
    //         break;
    //     case"coffee":
    //         res.json(search.coffee)
    //         break;
    //     case'hello':
    //         res.json(search.hello)
    //         break;
    //     case"chicken":
    //         res.json(search.chicken)
    //         break;

    //     default:
    //         break;
    // }
        
    
})

function processData(data){
    searchResults = [];
    console.log(data.items.length)
    for (let a = 0; a < data.items.length; a++){
        let title = data.items[a]['title'];
        let link = data.items[a]['link'];
        searchResults[a] = {"title": title, "link": link}
    }
    // console.log(searchResults)
    return searchResults;
}

// async function decode(req) {
//     let decoded = await (req => req.json())
//     console.log(req);
// }
module.exports = app;
