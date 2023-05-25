class ElectricalDevice {
    constructor(name, power){
      this.name = name;
      this.power = power;
      this.isPlugged = false;
    }

    plugIn() {
      console.log(this.name + "it is plugged!");
      this.isPlugged = true;
    }
    
    unplug() {
      console.log(this.name + "it is unplugged!");
      this.isPlugged = false;
    }
  }
  
  class Lamp extends ElectricalDevice {
    constructor (name, power, bulbType) {
      super(name, power);
      this.bulbType = bulbType;
      this.isPlugged = true;
    }
  }
  
  class Computer extends ElectricalDevice {
    constructor(name, power, type, functionality) {
      super(name, power); 
      this.type = type;
      this.functionality = functionality;
      this.isPlugged = false;
    }
  }
  
  const tableLamp = new Lamp("Table lamp", 25, "LED");
  
  const homePC = new Computer("Table PC", 410, "stationary", "for work");
  
  tableLamp.unplug();
  
  homePC.plugIn();
  
  console.log(homePC)
  console.log(tableLamp)