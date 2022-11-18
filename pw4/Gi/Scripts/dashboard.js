function dashboard() {
    event.preventDefault();
  
    let tBody = document.getElementById("tBody");
    let infoDiv = document.getElementById('info')
    let booksCount = document.getElementById("book-count");
  
  
    // here we are adding the selected buy option to mybooks section and modifying our local storage;
    function myFunction(objData) {
      dashBoardBooks = dashBoardBooks.filter(
        (obj) => obj.inputName !== objData.inputName
      );
  
      booksCount.innerHTML = dashBoardBooks.length;
  
      let buySectionData = {
          inputName : objData.inputName,
          inputAuthor : objData.inputAuthor,
          inputDesc : objData.inputDesc,
          inputAdded : objData.inputDate,
          category :objData.category,
          price : objData.price
      
      }
  
      localStorage.setItem(
        "my-books",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("my-books") || "[]"),
          buySectionData,
        ])
      );
  
      localStorage.removeItem("book-list");
      localStorage.setItem("book-list", JSON.stringify(dashBoardBooks));
  
      console.log(buySectionData)
      cleanupCode();
      filteredData();
    }
  
  // here we are transfering the data to bookmark section 
  
  function myBookmark(objData) {
      dashBoardBooks = dashBoardBooks.filter(
        (obj) => obj.inputName !== objData.inputName
      );
  
      booksCount.innerHTML = dashBoardBooks.length;
  
      let bookMarkData = {
          inputName : objData.inputName,
          inputAuthor : objData.inputAuthor,
          inputDesc : objData.inputDesc,
          inputAdded : objData.inputDate,
          category :objData.category,
          price : objData.price
      
      }
  
      localStorage.setItem(
        "my-bookMarks",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("my-bookMarks") || "[]"),
          bookMarkData,
        ])
      );
  
      localStorage.removeItem("book-list");
      localStorage.setItem("book-list", JSON.stringify(dashBoardBooks));
  
      cleanupCode();
      filteredData();
    }
  
    let dashBoardBooks = JSON.parse(localStorage.getItem("book-list"));
    booksCount.innerHTML = dashBoardBooks.length;
  
  
  
    // here we are deleting particular element from data after buying or bookmarking;
  
    function filteredData() {
      for (const obj of dashBoardBooks) {
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
          if (val == "Buy") {
          col.style.background = "red"
            col.addEventListener("click", () => myFunction(obj));
          }
          else if(val == "BookMark"){
              col.style.background = "#ffba01"
              col.addEventListener("click", () => myBookmark(obj));
      
            }
          
  
          row.appendChild(col);
        }
  
        tBody.appendChild(row);
      }
    }
  
    function cleanupCode() {
      tBody.innerHTML = "";
    }
  
    console.log(dashBoardBooks)
    if(dashBoardBooks.length == 0){
      infoDiv.innerHTML = "No Books are added to the storage";
      infoDiv.style.color = "gray" 
      infoDiv.style.fontSize = "30px"
    }
  
    else{
  
   
    // this code will be a default code to load the already added books in the local storage;
  
    for (const obj of dashBoardBooks) {
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
        if (val == "Buy") {
          col.style.background = "red"
  
          col.addEventListener("click", () => myFunction(obj));
        }
  
        else if(val == "BookMark"){
          col.style.background = "#ffba01"
          col.addEventListener("click", () => myBookmark(obj));
  
        }
  
        row.appendChild(col);
      }
  
      tBody.appendChild(row);
    }
  }
  
  }