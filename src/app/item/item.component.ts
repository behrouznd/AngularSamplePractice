import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  id: number | undefined;
  product: any;
  price: any;

  private routeSubscription: Subscription;
  private querySubscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {
    //this.id = activeRoute.snapshot.params['id'];
    //this.subscript = activeRoute.params.subscribe(params => this.id = params['id']);
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.product = queryParam['product'];
        this.price = queryParam['price'];
      }
    );
  }

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigate(['/item', 7],
      {
        queryParams: {'product': 'nokia' , 'price' : 150}
      }

    );
  }

}
