import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ServicesComponent } from '../../services/services.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  selectedCar: string;
  cars$: Observable<any>;

  constructor(
    private service: ServicesComponent,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.cars$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedCar = params.get('vehicle');
        return this.service.getProducts();
      })
    );
  }

}
