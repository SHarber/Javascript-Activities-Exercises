function createTable() 
{
	// Gets the Body Element
	var body = document.getElementsByTagName("body")[0];
	//Creates New Table
    var tbl = document.createElement("table");
    //Create Table Head
    var tblHead = document.createElement("thead");
    //Creates Table Body Element
    var tblBody = document.createElement("tbody");
 	//Creates a new Row & sets id to h1
    var row = document.createElement("tr");
    row.id = "h1"
    //Creates 4 Cells and associated Text
    for (var j=0; j < 4; j++)
    {
    	//Creates new header Cell
    	var cell = document.createElement("th");
        cell.id = "h1";
        //Adds Heading text
        var cellText = document.createTextNode("Heading " + (j+1));
        //Append Children so text shows and row shows
        cell.appendChild(cellText);
        cell.style.border = "1px solid black";
        row.appendChild(cell);
       	tblHead.appendChild(row);
    }
    //Create rest of table
    for (var j=0; j < 3; j++)
    {	
    	//Creates new row and gives id b1
    	var row = document.createElement("tr");
    	row.setAttribute("id", "b1");
        
		for (var i=0; i < 4; i++)
    	{
            //Creates new header Cell
            var cell = document.createElement("td");
             cell.setAttribute("id", "c1");
            //Adds Heading text
            var cellText = document.createTextNode((j+1) + ", " + (i+1));
            cell.style.border = "1px solid black";
            //Append Children so text shows and row shows 
            cell.appendChild(cellText);
         
            row.appendChild(cell);
            tblBody.appendChild(row);
        }
    }
     tbl.appendChild(tblBody);
    tbl.appendChild(tblHead);
	body.appendChild(tbl);
    
    document.getElementsByTagName("tbody");
    tblBody.rows[0].cells[0].style.border = "4px solid black";
    var rowIndex=0;
    var cellIndex=0;
   

    //Create Div for buttons
    var div = document.createElement("div");
    div.style.padding = "25px";
    div.id = "d1";
    body.appendChild(div);
  
    //Create up Button
    var upButton = document.createElement("button");
    upButton.id = "up";
    var upButtonText = document.createTextNode("Up");
    upButton.appendChild(upButtonText);
    upButton.addEventListener("click", function(){
    	if (rowIndex > 0)
        {
        	tblBody.rows[rowIndex].cells[cellIndex].style.border = "1px solid black";
            rowIndex = rowIndex -1;
            tblBody.rows[rowIndex].cells[cellIndex].style.border = "4px solid black";
 	    }
    });
    div.appendChild(upButton);
    body.appendChild(div);
    
    //Create down Button
    var downButton = document.createElement("button");
    downButton.id = "down";
    var downButtonText = document.createTextNode("Down");
    downButton.appendChild(downButtonText);
    downButton.addEventListener("click", function(){
    	if(rowIndex < 2)
        {
        	tblBody.rows[rowIndex].cells[cellIndex].style.border = "1px solid black";
            rowIndex = rowIndex + 1;
            tblBody.rows[rowIndex].cells[cellIndex].style.border = "4px solid black";
        }
     });
    div.appendChild(downButton);
    body.appendChild(div);

	//Create left Button
    var leftButton = document.createElement("button");
    leftButton.id = "left";
    var leftButtonText = document.createTextNode("Left");
    leftButton.appendChild(leftButtonText);
    leftButton.addEventListener("click", function(){
    	if(cellIndex > 0)
        {
        	tblBody.rows[rowIndex].cells[cellIndex].style.border = "1px solid black";
            cellIndex = cellIndex - 1;
            tblBody.rows[rowIndex].cells[cellIndex].style.border = "4px solid black";
        }
     });
    div.appendChild(leftButton);
    body.appendChild(div);

	//Create right Button
    var rightButton = document.createElement("button");
    rightButton.id = "right";
    var rightButtonText = document.createTextNode("Right");
    rightButton.appendChild(rightButtonText);
    rightButton.addEventListener("click", function(){
    	if(cellIndex < 3)
        {
        	tblBody.rows[rowIndex].cells[cellIndex].style.border = "1px solid black";
            cellIndex = cellIndex + 1;
            tblBody.rows[rowIndex].cells[cellIndex].style.border = "4px solid black";
        }
     });
    div.appendChild(rightButton);
    body.appendChild(div);

	//Create mark Button
    var markButton = document.createElement("button");
    markButton.id = "mark";
    var markButtonText = document.createTextNode("Mark Cell");
    markButton.appendChild(markButtonText);
    markButton.addEventListener("click", function(){
    	   	tblBody.rows[rowIndex].cells[cellIndex].style.backgroundColor = "yellow";
     });
    div.appendChild(markButton);
    body.appendChild(div)
    
  
    
    
}
createTable();