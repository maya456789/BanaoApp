import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http:HttpClient) { }

    public getUsers():Observable<any>{
    return this.http.get(`https://602e7c2c4410730017c50b9d.mockapi.io/users`).pipe(
      map((user)=>{
         return user;
      })
    )
  }

}
