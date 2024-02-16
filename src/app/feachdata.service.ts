import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class FeachdataService {

  constructor(private hc:HttpClient) { }
  getdata()
  {
    console.log('getdatastarted');
    return this.hc.get('https://fakestoreapi.com/products');
  }
  getcategorydata(str:string)
  {
    return this.hc.get(`https://fakestoreapi.com/products/category/${str}`);

  }
}
