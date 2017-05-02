var plantes = [];
var herbivores = [];
var carnivores = [];
var tours = 1000;
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

var containsPlant = function(plants, line, col) {
    var idx;
    for (idx = 0; idx < plants.length; idx++) {
        if (plants[idx].x === col && plants[idx].y === line) {
            return true;
        }
    }

    return false;
};

var drawLine = function(delimiter, interval, plants, line) {
    var col;
    var drawing = "";
    var c;
    for (col = 0; col < 10; col++) {
        if (containsPlant(plants, line, col)) {
            c = "P";
        } else {
            c = interval;
        }
        drawing = drawing + delimiter + c;
    }
    drawing = drawing + delimiter;

    console.log(drawing);
};

// [-1.0; 1.0] -> [0; 9]
var zooToGrid = function(c) {
    var result = {};
    result.x = Math.floor((c.x + 1) * 10 / 2);
    result.y = Math.floor((c.y + 1) * -10 / 2 + 10);

    return result;
};

var drawGrid = function() {
    var idx;
    var gridPlants = [];
    
    for (idx = 0; idx < plantes.length; idx++) {
        gridPlants[idx] = zooToGrid(plantes[idx]);
    }

    for (idx = 0; idx < 10; idx++) {
        drawLine("+", "-", [], 0);
        drawLine("|", " ", gridPlants, idx);
    }

    drawLine("+", "-", [], 0);
}

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

    drawGrid();
}


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