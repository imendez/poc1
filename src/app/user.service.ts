import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { User } from "./user";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";


@Injectable()
export class UserService {

    constructor(private http: Http) {
    }

    getUsers(): Observable<User[]> {
        return this.http
            .get('https://jsonplaceholder.typicode.com/users')
            .map(response => response.json() as User[]);
    }

}
