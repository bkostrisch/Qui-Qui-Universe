function onClick(element) {
	
  document.getElementById("thumbs").src = element.src;
  
  
  document.getElementById("original-image").style.display = "block";
  
  
}

function onClickPoke(){
	
	document.getElementById("original-image-poke").style.display = "block";
	
}

//Start Slide

function startSlide(){
	
	max = 2;
	min = 1;
	pic = min;
		
	loadPokePicture("Poke1.png");
	loadPurplePicture("Purple1.png");
	
}

//Pokemon Widgets Slide

function loadPokePicture(widget){
	
	document.getElementById("poke-widgets").style.backgroundImage="URL(Images/"+widget+")";	
	
}

function pokeNext(){
		
		pic++;
	
		if(pic > max){
		
			pic = min;
		
		}
	
		loadPokePicture("Poke"+pic+".png");	
 event.stopPropagation();		
	
}

function pokePrev(){		
			
		pic--;
	
		if(pic <min){
		
			pic = max;
		
		}
	
		loadPokePicture("Poke"+pic+".png");
		 event.stopPropagation();
	
}


function disabledEventPropagation(event)
{
   if (event.stopPropagation){
      
   }

  // explorer
   else if(window.event){
      window.event.cancelBubble=true;
   }
}


//Purple Widgets Slide

function loadPurplePicture(widget){
	
	document.getElementById("purple-widgets").style.backgroundImage="URL(Images/"+widget+")";	
	
}

function purpleNext(){
		
		pic++;
	
		if(pic > max){
		
			pic = min;
		
		}
	
		loadPurplePicture("Purple"+pic+".png");			
	
}

function purplePrev(){		
			
		pic--;
	
		if(pic <min){
		
			pic = max;
		
		}
	
		loadPurplePicture("Purple"+pic+".png");
	
}