function buySectionData () {

    let tBody = document.getElementById("tBody");

    let myBooks = JSON.parse( localStorage.getItem("my-books"));

    if(myBooks == null){
        infoDiv.innerHTML = "Nothing is added to bookmarks"
        infoDiv.style.color = "gray" 
        infoDiv.style.fontSize = "30px"
        
    }
    else{

    for (const obj of myBooks) {
        const row = document.createElement("tr");
        for (const val of Object.values(obj)) {
          const col = document.createElement("td");
          col.textContent = val;
          col.style.width = "10%"
          col.style.textAlign = "center"
          col.style.border = "1px solid black"
          col.style.background = "green"
          col.style.color = "white"
          col.style.padding = "10px"
        //   if (val == "Buy") {
        //     col.addEventListener("click", () => myFunction(obj));
        //   }
    
          row.appendChild(col);
        }
    
        tBody.appendChild(row);
      }
    console.log(myBooks)
}

}