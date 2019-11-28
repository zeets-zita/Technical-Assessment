import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import SampleData from '../../assets/SampleData.json';

@Injectable({
  providedIn: 'root',
})
export class ServicesComponent {

  constructor( private http: HttpClient) { }

  getProducts(): Observable<any> {
     return of(SampleData);
   }

   getProduct(vehicle) {
     return this.getProducts().pipe(
       map((cars: any[]) => cars.find(car => car.vehicle === vehicle))
     );
   }
}
