var cards = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var colors = ["#2B8EAD", "#333333", "#6F98A8","#FFFFFF", "#BFBFBF", "#EFEFEF", "#2F454E", "#72C3DC"];
var pane = new Array();

/* This function will return pane with all number cards.*/
function getPane() 
{
    var pane = new Array();

    // Generate card. 
    for (let x = 0; x < cards.length; x++) {
        let card = { Value: cards[x], Color: pickColor(x) };
        pane.push(card);
    }

    return pane;
}

/* This function will pick color from an given array.*/
function pickColor(id)
{    
    let colorIndex = id;
    // Generate random index up to legth of the color array 
    // when color index is more than length.
    if (id >= colors.length)
    {
       colorIndex = Math.floor(Math.random() * colors.length); 
    }
    return colors[colorIndex];
}

/* This function is to shuffle the number cards.*/
function shuffle()
{
    // Do random shuffles
	for (let i = 0; i < 100; i++)
	{
		let cardIndex1 = Math.floor((Math.random() * pane.length));
		let cardIndex2 = Math.floor((Math.random() * pane.length));
		let tmp = pane[cardIndex1];

		pane[cardIndex1] = pane[cardIndex2];
		pane[cardIndex2] = tmp;
	}

	loadNumberCards();
}

/* This function is used for both sort and initial load. */
function sort()
{
    pane = getPane();
	loadNumberCards();
}

/* This function is render the cards inside a pane after the Sort and Shuffle.*/
function loadNumberCards()
{
	document.getElementById('pane').innerHTML = '';
	for(let i = 0; i < pane.length; i++)
	{
		let card = document.createElement("div");
		let number = document.createElement("div");
		card.className = "card";
        number.className = "number";
        card.style.background = pane[i].Color;

		number.innerHTML = pane[i].Value;
		card.appendChild(number);

		document.getElementById("pane").appendChild(card);
	}
}

window.onload = sort;