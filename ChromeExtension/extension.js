


let myLeads = []
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteEl= document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn");


tabBtn.addEventListener("click", function(){
  chrome.tabs.query({active: true, currentWindow:true}, function(tabs){
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  })
})

if(leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads)); //because localStorage stores strings,JSON.stringify does that, JSON.parse does opp
    render(myLeads);
})

deleteEl.addEventListener("dblclick", function (){
  localStorage.clear();
  myLeads = []
  render(myLeads);
})

function render(arr){
    let listItems = ""
    for(let i = 0;i < arr.length;i++){
    //ulEl.innerHTML += "<li>" + myLeads[i]  + "</li>"; //correct but ineffient as DOM is costly
    if(arr[i] != ""){
      //listItems += '<li><a href="myLeads[i]" target="_blank" title="open link">' + myLeads[i]  + '</a></li>';
        //using template string
        listItems += `<li>
                            <a href='${arr[i]}' target="_blank"  title="open link">${arr[i]}</a>
                     </li>`
    }
    }
    ulEl.innerHTML = listItems;
}

