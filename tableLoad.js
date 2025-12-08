function loadData(){
    //2D array
    let arrProblems = [
        ["crowdstrike",2024,"$5.4B"],
        ["FaceBook",2020,"$90M"],
        ["Citibank",2020,"$900M"],
        ["Mars Climate Orbiter",1999,"327M"]
    ];
    //nested for loops to display te data
    for (let i=0; i < arrProblems.length; i++){
        //create table row
        let tr = document.createElement("tr");
        //loop through each nested array
        for(let j=0; j < arrProblems[i].length; j++){
            let td = document.createElement("td");
            //put the data in the td
            td.textContent = arrProblems[i][j];
            //append the new data to existing row
            tr.appendChild(td);
        }
        //add the new row to the existing table
        document.getElementById("tbleData").appendChild(tr);
    }
    
}
loadData();