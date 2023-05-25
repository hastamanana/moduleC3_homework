function ElectricalDevice(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

// метод, который определяет прибор как включенный в розетку
ElectricalDevice.prototype.plugIn = function() {
    console.log(this.name + "it is plugged!");
    this.isPlugged = true;
};

// метод, который определяет прибор как выключеный из розетки
ElectricalDevice.prototype.unplug = function() {
    console.log(this.name + "it is unplugged!");
    this.isPlugged = false;
};

// Прибор 1
function Lamp(name, brand, power, bulbType) {
    this.name = name;
    this.power = power;
    this.bulbType = bulbType;
    this.isPlugged = true;
}

Lamp.prototype = new ElectricalDevice();

// Прибор 2
function Computer(name, power, type, functionality) {
    this.name = name;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
}

Computer.prototype = new ElectricalDevice();

// экземпляр лампы
const tableLamp = new Lamp("Table lamp",  25, "LED");

// экземпляр компьютера
const homePC = new Computer("Table PC", 410, "stationary", "for work");

// отключить лампу из розетки
tableLamp.unplug();

// включить homePC в розетку
homePC.plugIn();


console.log(homePC)
console.log(tableLamp)