const url = "https://data.covid19india.org/data.json";  
fetch(url)
.then((response) => {
    if (!response.ok) {
        throw new Error(response.error)
    }
    return response.json();
})
.then(data => {
  console.log(data.statewise[0])
      document.getElementById("deaths").innerHTML = data.statewise[0].deaths;
      document.getElementById("deathsnew").innerHTML = data.statewise[0].deltadeaths;
      document.getElementById("total").innerHTML = data.statewise[0].confirmed;
      document.getElementById("newcases").innerHTML = data.statewise[0].deltaconfirmed;
      document.getElementById("activecases").innerHTML = data.statewise[0].active;
      document.getElementById("recovered").innerHTML = data.statewise[0].recovered;
  
})
.catch(function(error) {
  console.log(error);
});
// , {
//   method : "GET",
//   mode: 'no-cors',
//   headers:{
//     "Access-Control-Allow-Origin":"*",
//     "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT",
//     "Access-Control-Allow-Headers": "X-Token"
//   }    
// }