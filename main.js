var canvas= new fabric.Canvas("myCanvas")
var steve_x = 100;
var steve_y = 100;
var block_image_width= 30;
var block_image_height= 30;
var player_object = "";
var block_image_object = "";

// updates steve's location
function steve_update(){
	fabric.Image.fromURL("player.png", function(Img){
		player_object= Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
			top:steve_y,
			left:steve_x
		})
		canvas.add(player_object)
	}) 
}

function new_block(get_img){
	fabric.Image.fromURL(get_img, function(Img){
		block_image_object = Img 
		block_image_object.scaleToWidth(block_image_width)
		block_image_object.scaleToHeight(block_image_height)
		block_image_object.set({
			top:steve_y,
			left:steve_x
		})
		canvas.add(block_image_object)
	})
}



function up(){
	if(steve_y>=0){
		steve_y = steve_y - block_image_height;
		canvas.remove(player_object)
		steve_update()
	}
}

function down(){
	if(steve_y<=500){
		steve_y = steve_y + block_image_height;
		canvas.remove(player_object)
		steve_update()
	}
	
}

function left(){
	if(steve_x>=0){
		steve_x = steve_x - block_image_width;
		canvas.remove(player_object)
		steve_update()
		
		
	}
}

function right(){
    if(steve_x <= 900){
		steve_update()
		canvas.remove(player_object)
		steve_x = steve_x + block_image_width;
	}
	
}


window.addEventListener("keydown", my_keydown);
function my_keydown(e){
	
	keyPressed = e.keyCode;

	// shift and p(80) together
	if(e.shiftKey == true && keyPressed == 80){
		block_image_width = block_image_width + 10;
		block_image_height = block_image_height +10;

		document.getElementById("current_width").innerHTML = block_image_width;
		document.getElementById("current_height").innerHTML = block_image_height;
	}

	//shift and m(77) together
	if(e.shiftKey == true && keyPressed == 77){
		block_image_height = block_image_height - 10;
		block_image_width = block_image_width -10;
		document.getElementById("current_width").innerHTML = block_image_width;
		document.getElementById("current_height").innerHTML = block_image_height;
	}


	if(keyPressed == 38){
		up();
	}

	if(keyPressed == 40){
		down();
	}

	if(keyPressed == 37){
        left();
	}

    if(keyPressed == 39){
        right();
	}

	// w - wall
	if(keyPressed == 87){
		console.log("w")
		new_block("wall.jpg")
	}

	//g - ground
    if(keyPressed == 71){
		console.log("g")
		new_block("ground.png")
	}
	

	//l - lightgreen block
    if(keyPressed == 76){
		console.log("l")
		new_block("light_green.png")
	}


	//t - trunk
    if(keyPressed == 84){
		console.log("t")
		new_block("trunk.jpg")
	}


	//r - roof
    if(keyPressed == 82 ){
		console.log("r")
		new_block("roof.jpg")
	}


	//y - yellow wall
    if(keyPressed == 89 ){
		console.log("y")
		new_block("yellow_wall.png")
	}


	//d - darkgreen
    if(keyPressed == 68){
		console.log("d")
		new_block("dark_green.png")
	}


	//c  - cloud
    if(keyPressed == 67){
		console.log("c")
		new_block("cloud.jpg")
	}


	//u - unique
    if(keyPressed == 85){
		console.log("u")
		new_block("unique.png")
	}

    //q - glass
	if(keyPressed == 81){
		console.log("q")
		new_block("glass.png")
	}

	//Z - diamond 
	if(keyPressed == 90){
		console.log("Z")
		new_block("diamond.jpeg")
	}
}


function remove(){
	location.reload();
}


function save(){
	var canvas = document.getElementById("myCanvas");
	image = canvas.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");
	var link = document.createElement('a');
	link.download = "minecraft.png";
	link.href = image;
	link.click();
}


























