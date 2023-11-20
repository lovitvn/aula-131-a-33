Img = "";
objects = [];
modelStatus = "";

function preload(){
    img = loadImage("dog_cat.jpg")
}

function setup(){
    canvas = createCanvas(650, 430);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelloaded)
    document.getElementById("status").innerHTML = "Status: Detectando Objetos";
}
function modelloaded(){
    console.log("A coisa que te pertence que voce usara como base ja terminou de ser implementada na sua guia de seu navegador")
    modelstatus = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.log("algo nao foi bem sucedido no carregamento de seu modelo")
    }
    console.log("coisa ou acontecimento que aconteceu ou apareceu depois de voce com sucesso carregou seu modelo")
    objects = results;
}

function draw(){
    image(img, 0, 0, 640, 420);
    if (modelStatus != "") {
        for (var i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: O objelto foi deltectado"
         fill ("#8A9A5B")
         percent = floor(objects[i].confidence * 100);
          text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            nofill()
            stroke("#8A9A5B")
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

        }
    }
}