import { Component } from '@angular/core';
import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';
@Component({
    selector: 'pm-app',
    template: `
    <h1>{{pageTitle}} </h1>
        <pm-products></pm-products> 
    `,
    directives:[ProductListComponent],
    providers:[ProductService]
})
export class AppComponent { 
    pageTitle: string = 'Angular js 2 Demo Project';
}
