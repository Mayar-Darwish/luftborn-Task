import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { iProducts } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService  {
  private apiurl = 'https://fakestoreapi.com/products?limit=10';

  constructor( private _HttpClient:HttpClient ) { }

  getAllProducts(){    
    // return this._HttpClient.get<iProducts[]>(environment.apiUrl);
    return this._HttpClient.get<iProducts[]>(this.apiurl);
  }
}
