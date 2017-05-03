var plants = [];
var herbivores = [];
var initialHerbivoresCount = 10;
var carnivores = [];
var turns = 1000;
var turnsCount;
var zooBound1;
var zooBound2;
var drawing;
var meterSize = 1 / 250;
var herbivoreSpeed = 5 * meterSize;

zooBound1 = {};
zooBound1.x = -1.0;
zooBound1.y = -1.0;
zooBound2 = {};
zooBound2.x = 1.0;
zooBound2.y = 1.0;

var spawnPlant = function(c1, c2) {
    spawn(c1, c2, plants);
};

var spawnHerbivore = function(c1, c2) {
    spawn(c1, c2, herbivores);
};

var spawn = function(c1, c2, array) {
    var c = {};
    c.x = Math.random() * (c2.x - c1.x) + c1.x;
    c.y = Math.random() * (c2.y - c1.y) + c1.y;

    array.push(c);
};

var containsZooObject = function(zooObjects, line, col) {
    var idx;
    for (idx = 0; idx < zooObjects.length; idx++) {
        if (zooObjects[idx].x === col && zooObjects[idx].y === line) {
            return true;
        }
    }

    return false;
};

var drawLine = function(delimiter, interval, herbivores, plants, line) {
    var col;
    var drawing = "";
    var c;
    for (col = 0; col < 10; col++) {
        if (containsZooObject(herbivores, line, col)) {
            c = "H";
        } else if (containsZooObject(plants, line, col)) {
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
    var gridHerbivores = [];
    
    for (idx = 0; idx < plants.length; idx++) {
        gridPlants[idx] = zooToGrid(plants[idx]);
    }

    for (idx = 0; idx < herbivores.length; idx++) {
        gridHerbivores[idx] = zooToGrid(herbivores[idx]);
    }

    for (idx = 0; idx < 10; idx++) {
        drawLine("+", "-", [], [], 0);
        drawLine("|", " ", gridHerbivores, gridPlants, idx);
    }

    drawLine("+", "-", [], [], 0);
};

var spawnInitialHerbivores = function() {
    var idx;
    var c1;
    var c2;
    for (idx = 0; idx < initialHerbivoresCount; idx++) {
        spawnHerbivore(zooBound1, zooBound2);
    }
};

var sqrt = function(n) {
    var idx;
    var x = n;

    for (idx = 0; idx < 10; idx++) {
        x = (x + n / x) / 2;
    }

    return x;
};

var randomDirection = function() {
    var x = Math.random() * 2 - 1;
    var y = sqrt(1 - x * x);
    if (Math.random() < 0.5) {
        y = -y;
    }

    var direction = {};
    direction.x = x;
    direction.y = y;

    return direction;
};

var multiply = function(v, n) {
    var result = {};
    result.x = v.x * n;
    result.y = v.y * n;

    return result;
};

var distance = function(p1, p2) {
    var x = p2.x - p1.x;
    var y = p2.y - p1.y;

    return sqrt(x * x + y * y);
};

var closestPlant = function(herbivore) {
    var idx;
    var plant;
    var d;
    var minDistance = Number.MAX_VALUE;

    if (plants.length === 0) {
        return null;
    }

    for (idx = 0; idx < plants.length; idx++) {
        d = distance(herbivore, plants[idx]);
        if (d < minDistance) {
            minDistance = d;
            plant = plants[idx];
        }
    }

    return plant;
};

var directionTo = function(from, to) {

};

var dirToClosestPlant = function(herbivore) {
    var plant = closestPlant(herbivore);
    var direction;

    if (plant === null) {
        direction = randomDirection();
    } else {
        direction = directionTo(herbivore, plant);
    }

    return direction;
};

var moveHerbivore = function(herbivore) {
    var direction = dirToClosestPlant(herbivore);
    var move = multiply(direction, meterSize);
    herbivore.x = herbivore.x + move.x;
    herbivore.y = herbivore.y + move.y;
};

var moveHerbivores = function() {
    var idx;
    for (idx = 0; idx < herbivores.length; idx++) {
        moveHerbivore(herbivores[idx]);
    }
};

spawnInitialHerbivores();
for (turnsCount = 0; turnsCount < turns; turnsCount++) {
    spawnPlant(zooBound1, zooBound2);

    var c1 = {};
    c1.x = zooBound1.x / 2;
    c1.y = zooBound1.y / 2;
    var c2 = {};
    c2.x = zooBound2.x / 2;
    c2.y = zooBound2.y / 2;
    spawnPlant(c1, c2);

    moveHerbivores();

    drawGrid();
}
