import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productList:any;
  newProductList:any=[];
  constructor(private service:ProductsService) { }  
  ngOnInit(): void {
    this.service.getAllProducts().subscribe((data)=>{
      this.productList=data;
      this.newProductList= this.productList.filter((user: { category: string; })=>user.category==='men');
      console.log(this.newProductList);
    });
  }
}
