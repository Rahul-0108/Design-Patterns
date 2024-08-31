// Command interface
class Command {
    execute() {}
  }
  
  // Concrete Commands
  class LightOnCommand extends Command {
    constructor(light) {
      super();
      this.light = light;
    }
  
    execute() {
      this.light.turnOn();
    }
  }
  
  class LightOffCommand extends Command {
    constructor(light) {
      super();
      this.light = light;
    }
  
    execute() {
      this.light.turnOff();
    }
  }
  
  // Receiver (Device)
  class Light {
    turnOn() {
      console.log('Light is on.');
    }
  
    turnOff() {
      console.log('Light is off.');
    }
  }
  
  // Invoker (Remote Control)
  class RemoteControl {
    constructor() {
      this.commands = [];
    }
  
    addCommand(command) {
      this.commands.push(command);
    }
  
    executeCommands() {
      this.commands.forEach((command) => {
        command.execute();
      });
    }
  }
  
  // Usage
  const livingRoomLight = new Light();
  const kitchenLight = new Light();
  
  const livingRoomLightOn = new LightOnCommand(livingRoomLight);
  const livingRoomLightOff = new LightOffCommand(livingRoomLight);
  const kitchenLightOn = new LightOnCommand(kitchenLight);
  const kitchenLightOff = new LightOffCommand(kitchenLight);
  
  const remoteControl = new RemoteControl();
  
  remoteControl.addCommand(livingRoomLightOn);
  remoteControl.addCommand(kitchenLightOff);
  
  remoteControl.executeCommands();
  // Output: "Light is on." (for living room)
  // Output: "Light is off." (for kitchen)