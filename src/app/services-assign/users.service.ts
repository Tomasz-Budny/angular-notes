import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable({providedIn: 'root'})
export class UsersService {
    activeUsers = ['Tom', 'Bart'];
    inactiveUsers = ['Paul', 'Ringo'];

    constructor(private counterService: CounterService) {}

    setStatusToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.switchToActive();
    }

    setStatusToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.switchToInactive();
    }
}