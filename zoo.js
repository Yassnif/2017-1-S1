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

var drawLine = function(delimiter, interval) {
    var idx;
    var drawing = "";
    for (idx = 0; idx < 10; idx++) {
        drawing = drawing + delimiter + interval;
    }
    drawing = drawing + delimiter;

    console.log(drawing);
}

var drawGrid = function() {
    var idx;
    for (idx = 0; idx < 10; idx++) {
        drawLine("+", "-");
        drawLine("|", " ");
    }

    drawLine("+", "-");
}

// [-1.0; 1.0] -> [0; 9]
var zooToGrid = function(c) {
    var result = {};
    result.x = Math.floor((c.x + 1) * 9 / 2);
    result.y = Math.floor((c.y + 1) * -9 / 2 + 9);

    return result;
};

console.log(zooToGrid({ x: -1, y: 1 }));

// drawGrid();

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