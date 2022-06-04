let call = new XMLHttpRequest();
call.open("Get","text.json",true);
call.send();


call.onreadystatechange=function() {
    if(this.readyState===4 && this.status===200) {
        // console.log(`Data Loaded`);
      let mainData = JSON.parse(this.responseText);
      mainData.forEach((o,index)=> {
          delete o.body;
          o.all = `Article Number ${index+1}`;
    })
    let updatedData = JSON.stringify(mainData);
    // console.log(updatedData)

    for(let i=0; i<mainData.length;i++) {
        displayInfo(mainData[i].title,mainData[i].all,mainData[i].author,mainData[i].category)
    }
    
}
}

function displayInfo (title,artNum,author,category) {
   document.write( `<div id="data">
    <div>
        <h2>${title}</h2>
        <p>${artNum}</p>
        <p>${author}</p>
        <p>${category}</p>
    </div>
    </div>`)
}


