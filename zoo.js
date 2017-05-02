var plantes = [];
var herbivores = [];
var carnivores = [];
var tours = 1;
var nbTours;
var c1;
var c2;
var drawing;

var spawnPlante = function(c1, c2) {
    var c = {};
    c.x = Math.random() * (c2.x - c1.x) + c1.x;
    c.y = Math.random() * (c2.y - c1.y) + c1.y;

    plantes.push(c);
};

for (nbTours = 0; nbTours < tours; nbTours++) {
    c1 = {};
    c1.x = -1;
    c1.y = -1;
    c2 = {};
    c2.x = 1;
    c2.y = 1;
    spawnPlante(c1, c2);

    c1 = {};
    c1.x = -0.5;
    c1.y = -0.5;
    c2 = {};
    c2.x = 0.5;
    c2.y = 0.5;
    spawnPlante(c1, c2);
}

var drawnLine = function(delimiter, interval) {
    drawing = "";
    for (idx = 0; idx < 10; idx++) {
        drawing = drawing + delimiter + interval;
    }
    drawing = drawing + delimiter;

    console.log(drawing);
}

drawnLine("+", "-");
drawnLine("|", " ");

// +-+-+-+-+-+-+-+-+-+-+
// | | | | | | |P| | | |
// +-+-+-+-+-+-+-+-+-+-+
// | | | | | | | | | | |
// +-+-+-+-+-+-+-+-+-+-+
// | | | | | | | | | | |
// +-+-+-+-+-+-+-+-+-+-+
// | | | | | | | | | | |
// +-+-+-+-+-+-+-+-+-+-+
// | | | | | | | | | | |
// +-+-+-+-+-+-+-+-+-+-+
// | | |P| | | | | | | |
// +-+-+-+-+-+-+-+-+-+-+
// | | | | | | | | | | |
// +-+-+-+-+-+-+-+-+-+-+
// | | | | | | | | | | |
// +-+-+-+-+-+-+-+-+-+-+
// | | | | | | | | | | |
// +-+-+-+-+-+-+-+-+-+-+
// | | | | | | | | | | |
// +-+-+-+-+-+-+-+-+-+-+