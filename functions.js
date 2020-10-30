//Show a biggest image


//Profile Picturo - Home
function onClick(element) {
	
  document.getElementById("thumbs").src = element.src;
  
  
  document.getElementById("original-image").style.display = "block";
  
  
}

//Pokemon Widgets View - Widgets
function onClickPoke(){
	
	document.getElementById("original-image-poke").style.display = "block";
	
}

//Purple Widgets View - Widgets
function onClickPurple(){
	
	document.getElementById("original-image-purple").style.display = "block";
	
}

//Neon Widgets View - Widgets
function onClickNeon(){
	
	document.getElementById("original-image-neon").style.display = "block";
	
}

//Flamingo Widgets View - Widgets
function onClickFlamingo(){
	
	document.getElementById("original-image-flamingo").style.display = "block";
	
}

//Pokémon Classic Widgets View - Widgets
function onClickPokec(){
	
	document.getElementById("original-image-pokec").style.display = "block";
	
}

//Sunset Widgets View - Widgets
function onClickSunset(){
	
	document.getElementById("original-image-sunset").style.display = "block";
	
}

//Start Slide
function startSlide(){
	
	max = 2;
	min = 1;
	pic = min;
		
	loadPokePicture("Poke1.png");
	loadPurplePicture("Purple1.png");
	loadNeonPicture("Neon1.png");
	loadFlamingoPicture("Flamingo1.png");
	loadPokecPicture("PokeC1.png");
	loadSunsetPicture("Sunset1.png");
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
		event.stopPropagation();	
	
}

function purplePrev(){		
			
		pic--;
	
		if(pic <min){
		
			pic = max;
		
		}
	
		loadPurplePicture("Purple"+pic+".png");
		event.stopPropagation();
	
}

//Neon Widgets Slide
function loadNeonPicture(widget){
	
	document.getElementById("neon-widgets").style.backgroundImage="URL(Images/"+widget+")";	
	
}

function neonNext(){
		
		pic++;
	
		if(pic > max){
		
			pic = min;
		
		}
	
		loadNeonPicture("Neon"+pic+".png");		
		event.stopPropagation();	
	
}

function neonPrev(){		
			
		pic--;
	
		if(pic <min){
		
			pic = max;
		
		}
	
		loadNeonPicture("Neon"+pic+".png");
		event.stopPropagation();
	
}

//Flamingo Widgets Slide
function loadFlamingoPicture(widget){
	
	document.getElementById("flamingo-widgets").style.backgroundImage="URL(Images/"+widget+")";	
	
}

function flamingoNext(){
		
		pic++;
	
		if(pic > max){
		
			pic = min;
		
		}
	
		loadFlamingoPicture("Flamingo"+pic+".png");		
		event.stopPropagation();	
	
}

function flamingoPrev(){		
			
		pic--;
	
		if(pic <min){
		
			pic = max;
		
		}
	
		loadFlamingoPicture("Flamingo"+pic+".png");
		event.stopPropagation();
	
}

//Pokémon Classic Widgets Slide
function loadPokecPicture(widget){
	
	document.getElementById("pokec-widgets").style.backgroundImage="URL(Images/"+widget+")";	
	
}

function pokecNext(){
		
		pic++;
	
		if(pic > max){
		
			pic = min;
		
		}
	
		loadPokecPicture("PokeC"+pic+".png");		
		event.stopPropagation();	
	
}

function pokecPrev(){		
			
		pic--;
	
		if(pic <min){
		
			pic = max;
		
		}
	
		loadPokecPicture("PokeC"+pic+".png");
		event.stopPropagation();
	
}
//Sunset Widgets Slide
function loadSunsetPicture(widget){
	
	document.getElementById("sunset-widgets").style.backgroundImage="URL(Images/"+widget+")";	
	
}

function sunsetNext(){
		
		pic++;
	
		if(pic > max){
		
			pic = min;
		
		}
	
		loadSunsetPicture("Sunset"+pic+".png");		
		event.stopPropagation();	
	
}

function sunsetPrev(){		
			
		pic--;
	
		if(pic <min){
		
			pic = max;
		
		}
	
		loadSunsetPicture("Sunset"+pic+".png");
		event.stopPropagation();
	
}