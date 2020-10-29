function onClick(element) {
	
  document.getElementById("thumbs").src = element.src;
  
  document.getElementById("original-image").style.display = "block";
  
}

function loadPicture(widget){
	
	document.getElementById("teste").style.backgroundImage="URL(Images/"+widget+")";	
	
}

function startSlide(){
	
	max = 2;
	min = 1;
	pic = min;
	t = true;
		
	loadPicture("Poke1.png");
	
	
	
}

function endT(){
	
	t = true;
	
}

function next(){
		
		pic++;
	
		if(pic > max){
		
			pic = min;
		
		}
	
		loadPicture("Poke"+pic+".png");
		

	
	
}

function prev(){
	
	
		
			
		pic--;
	
		if(pic <min){
		
			pic = max;
		
		}
	
		loadPicture("Poke"+pic+".png");
	
}
