import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) {
    
  }

  getBrand(){
    return this.http.get('http://localhost:3000/dropdowns?key=brand').pipe(map(fields =>  {
      sessionStorage.setItem("Brands", JSON.stringify(fields[0]));
    }))
  }

  getSize(){
    return this.http.get('http://localhost:3000/dropdowns?key=size').pipe(map(fields =>  {
      sessionStorage.setItem("Sizes", JSON.stringify(fields[0]));
    }))
  }
}
