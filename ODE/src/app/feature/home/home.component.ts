import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productList:any;
  constructor(private service:ProductsService) { }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe((data)=>{
      this.productList=data;
      console.log(this.productList);
    })
  }


}
