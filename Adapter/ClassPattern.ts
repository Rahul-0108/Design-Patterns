// 3rs party library
class AdapteeClass {
    getSpecificRequest() {
        return "Specific request.";
    }
}

// The ITarget defines the domain-specific interface used by the client code.
interface ITarget { // our application interface
    getRequest();
}


// wrap the 3rd party libary code calls in this class
class AdapterClass extends AdapteeClass implements ITarget {
    constructor(adaptee) {
        super();
    }

    getRequest() {
        return `This is '${this.getSpecificRequest()}'`;
    }
}

class ClientControllerClass {
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
const targetInstance = new Adapter(new Adaptee());
const controllerInstance = new ClientController(target);
controller.request();
