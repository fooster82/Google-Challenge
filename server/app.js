
const express = require('express')
const cors = require('cors')
const bodyParser =require('body-parser')
const fetch = require('node-fetch')
const search = require('./search.json')
const app = express();
const key = "AIzaSyDGxjb37qHVXzvLRNCqe3ibebG6kgt_Xcg";
const engineId = "3a3f3266232d4c34b"
app.use(express.json());
app.use(cors());


async function googleAPI(searchTerm){
    let url =`https://www.googleapis.com/customsearch/v1?q=${searchTerm}&cx=${engineId}&key=${key}`;
    console.log(url);


    try {
        let resp = await fetch(url);
        let data = await resp.json();
        let searches = await processData(data);
        return searches

    } catch(err){
        console.warn(err);
    }

}




app.post('/', async (req,res) => {
    let choice = req.body.searchterm;
    console.log(choice);
    console.log(typeof(choice))
    // res.json({message: "working"})
 
    // // comment the section below out when enabling the hard-coded results:
    toSend = await googleAPI(choice);
    console.log(toSend);
    res.json(toSend);



    // // Uncomment this code to enable the hard-coded results stored in search.js
    // // Needed when googleAPI has reached its daily query limit.
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
    
    return searchResults;
}


module.exports = app;


