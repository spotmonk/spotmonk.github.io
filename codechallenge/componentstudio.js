
const getItems = () => { 
fetch("https://www.thegamecrafter.com/api/crowdsale")
.then(response => response.json())
.then(resp => { 
  index = Math.floor(Math.random() * resp.result.items.length);
  scriptTag = document.getElementById("ad");
  parentDiv = scriptTag.parentNode
  a = document.createElement("a")
  
  a.href = `http://thegamecrafter.com${resp.result.items[index].web_uri}`;
  a.innerHTML = `<img style="width:100%; height:auto;"src="http:${resp.result.items[index].ad_uri}" />`;
  
  parentDiv.insertBefore(a, scriptTag)
}
  )
.catch(error => console.log('error', error));
}
getItems()