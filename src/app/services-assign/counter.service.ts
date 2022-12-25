export class CounterService {
    activeCounter: number = 0;
    inactiveCounter: number = 0;

    switchToActive() {
        this.activeCounter++;
        console.log(`You switch to active state: ${this.activeCounter} times`);
    }

    switchToInactive() {
        this.inactiveCounter++;
        console.log(`You switch to inactive state: ${this.inactiveCounter} times`);
    }
}