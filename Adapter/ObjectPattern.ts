// 3rs party library
class Adaptee {
    getSpecificRequest() {
        return "Specific request.";
    }
}

// The ITarget defines the domain-specific interface used by the client code.
interface ITarget { // our application interface
    getRequest();
}


// wrap the 3rd party libary code calls in this class
class Adapter implements ITarget {
    adaptee: Adaptee;
    constructor(adaptee) {
        this.adaptee = adaptee;
    }

    getRequest() {
        return `This is '${this.adaptee.getSpecificRequest()}'`;
    }
}

class ClientController {
    target: ITarget;

    // our appplication only depends on our interface and its specific methods
    constructor(target: ITarget) {
        this.target= target;
    }
    public request() {
        console.log(this.target.getRequest());
    }
}

// Client code
const target = new Adapter(new Adaptee());
const controller = new ClientController(target);
controller.request();
