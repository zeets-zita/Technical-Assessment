import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ServicesComponent } from '../../services/services.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  car$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private service: ServicesComponent
  ) { }

  ngOnInit() {
    this.car$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.service.getProduct(params.get('vehicle')))
    );
  }


}
