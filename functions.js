//Show a biggest image


//Profile Picture - Home
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

//Brown Bear Widgets View - Widgets
function onClickBbear(){
	
	document.getElementById("original-image-bbear").style.display = "block";
	
}

//Polar Bear Widgets View - Widgets
function onClickPbear(){
	
	document.getElementById("original-image-pbear").style.display = "block";
	
}

//Panda Bear Widgets View - Widgets
function onClickPnbear(){
	
	document.getElementById("original-image-pnbear").style.display = "block";
	
}

//Red Panda Bear Widgets View - Widgets
function onClickRbear(){
	
	document.getElementById("original-image-rbear").style.display = "block";
	
}

//Star Widgets View - Widgets
function onClickStar(){
	
	document.getElementById("original-image-star").style.display = "block";
	
}

//Ice Cream Overlay View - Overlay
function onClickIceCream(){
	
	document.getElementById("original-image-icecream").style.display = "block";
	
}

//Diana Overlay View - Overlay
function onClickDiana(){
	
	document.getElementById("original-image-diana").style.display = "block";
	
}

//Diana Overlay View - Overlay
function onClickLilac(){
	
	document.getElementById("original-image-lilac").style.display = "block";
	
}

//Vinicin Overlay View - Overlay
function onClickVinicin(){
	
	document.getElementById("original-image-vinicin").style.display = "block";
	
}

//Kamael Overlay View - Overlay
function onClickKamael(){
	
	document.getElementById("original-image-kamael").style.display = "block";
	
}

//Pato Overlay View - Overlay
function onClickPato(){
	
	document.getElementById("original-image-pato").style.display = "block";
	
}

//Layman Overlay View - Overlay
function onClickLayman(){
	
	document.getElementById("original-image-layman").style.display = "block";
	
}

//Maickilin Overlay View - Overlay
function onClickMaickilin(){
	
	document.getElementById("original-image-maickilin").style.display = "block";
	
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
	loadBbearPicture("Bbear1.png");
	loadPbearPicture("Pbear1.png");
	loadPnbearPicture("Pnbear1.png");
	loadRbearPicture("Rbear1.png");
	loadStarPicture("Star1.png");
}

//Pokemon Widgets Slide
function loadPokePicture(widget){
	
	document.getElementById("poke-widgets").src = './Images/' + widget;
	
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
	
	document.getElementById("purple-widgets").src = './Images/' + widget;
	
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
	
	document.getElementById("neon-widgets").src = './Images/' + widget;
	
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
	
	document.getElementById("flamingo-widgets").src = './Images/' + widget;
	
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
	
	document.getElementById("pokec-widgets").src = './Images/' + widget;
	
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
	
	document.getElementById("sunset-widgets").src = './Images/' + widget;
	
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

//Brown Bear Widgets Slide
function loadBbearPicture(widget){
	
	document.getElementById("bbear-widgets").src = './Images/' + widget;
	
}

function bbearNext(){
		
		pic++;
	
		if(pic > max){
		
			pic = min;
		
		}
	
		loadBbearPicture("Bbear"+pic+".png");		
		event.stopPropagation();	
	
}

function bbearPrev(){		
			
		pic--;
	
		if(pic <min){
		
			pic = max;
		
		}
	
		loadBbearPicture("Bbear"+pic+".png");
		event.stopPropagation();
	
}


//Polar Bear Widgets Slide
function loadPbearPicture(widget){
	
	document.getElementById("pbear-widgets").src = './Images/' + widget;	
	
}

function pbearNext(){
		
		pic++;
	
		if(pic > max){
		
			pic = min;
		
		}
	
		loadPbearPicture("Pbear"+pic+".png");		
		event.stopPropagation();	
	
}

function pbearPrev(){		
			
		pic--;
	
		if(pic <min){
		
			pic = max;
		
		}
	
		loadPbearPicture("Pbear"+pic+".png");
		event.stopPropagation();
	
}

//Panda Bear Widgets Slide
function loadPnbearPicture(widget){
	
	document.getElementById("pnbear-widgets").src = './Images/' + widget;
	
}

function pnbearNext(){
		
		pic++;
	
		if(pic > max){
		
			pic = min;
		
		}
	
		loadPnbearPicture("Pnbear"+pic+".png");		
		event.stopPropagation();	
	
}

function pnbearPrev(){		
			
		pic--;
	
		if(pic <min){
		
			pic = max;
		
		}
	
		loadPnbearPicture("Pnbear"+pic+".png");
		event.stopPropagation();
	
}

//Polar Bear Widgets Slide
function loadRbearPicture(widget){
	
	document.getElementById("rbear-widgets").src = './Images/' + widget;
	
}

function rbearNext(){
		
		pic++;
	
		if(pic > max){
		
			pic = min;
		
		}
	
		loadRbearPicture("Rbear"+pic+".png");		
		event.stopPropagation();	
	
}

function rbearPrev(){		
			
		pic--;
	
		if(pic <min){
		
			pic = max;
		
		}
	
		loadRbearPicture("Rbear"+pic+".png");
		event.stopPropagation();
	
}

//Star Dust Widgets Slide
function loadStarPicture(widget){
	
	document.getElementById("star-widgets").src = './Images/' + widget;
	
}

function starNext(){
		
		pic++;
	
		if(pic > max){
		
			pic = min;
		
		}
	
		loadStarPicture("Star"+pic+".png");		
		event.stopPropagation();	
	
}

function starPrev(){		
			
		pic--;
	
		if(pic <min){
		
			pic = max;
		
		}
	
		loadStarPicture("Star"+pic+".png");
		event.stopPropagation();
	
}

// Change Overlay Image

function changeIceCream(img) {
    document.getElementById("icecream-overlay").src = 'Images/' + img + ".png";
}

function changeLilac(img) {
    document.getElementById("lilac-overlay").src = 'Images/' + img + ".png";
}

function changeLayman(img) {
    document.getElementById("layman-overlay").src = 'Images/' + img + ".png";
}

function changeVinicin(img) {
    document.getElementById("vinicin-overlay").src = 'Images/' + img + ".png";
}

function changeKamael(img) {
    document.getElementById("kamael-overlay").src = 'Images/' + img + ".png";
}

function changePato(img) {
    document.getElementById("pato-overlay").src = 'Images/' + img + ".png";
}

function changeDiana(img) {
    document.getElementById("diana-overlay").src = 'Images/' + img + ".png";
}

function changeMaickilin(img) {
    document.getElementById("maickilin-overlay").src = 'Images/' + img + ".png";
}