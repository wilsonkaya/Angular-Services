import { Injectable } from "@angular/core";


@Injectable()
export class UserServices{
    users = [
        {id:1, status: true, name: 'Max'},
        {id:2, status: true, name: 'Anna'},
        {id:3, status: false, name: 'Chris'},
        {id:4, status: false, name: 'Manu'},
        
    ];

   changeStatus(id: number){
    let individual = this.users[id];
    if(individual.status === true){
        individual.status = false;
    }else if(individual.status === false){
        individual.status = true
    }
   }
}