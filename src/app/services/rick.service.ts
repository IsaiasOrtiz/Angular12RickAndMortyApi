import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RickService {
  baseUrl: string = "";
  constructor(private http: HttpClient) {
    this.baseUrl =  environment.apiUrl;
   }

  getData(page: number){
   return this.http.get(this.baseUrl , {params: {
    page: page
   }});
  }
}

