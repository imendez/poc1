import { Component } from "@angular/core";
import { UserService } from "./user.service";
import { User } from "./user";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string = 'App title';
    users: User[];

    constructor(private userService: UserService) {
    }

    onClick() {
        this.userService.getUsers().subscribe((result) => {
            this.users = result;
        })
    }
}
