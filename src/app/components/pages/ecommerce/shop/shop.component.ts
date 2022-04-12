import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';
import { MenuItem, SelectItem } from 'primeng/api';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styles: [`
      :host ::ng-deep  .p-button-icon-only {
        height: 2.5rem;
      }

      :host ::ng-deep .p-dataview .p-dataview-header {
        background: transparent;
        border: 0 none;
      }

      :host ::ng-deep .p-paginator-bottom {
        background: transparent;
        border: 0 none;
      }

      :host ::ng-deep .p-dataview-content { 
        background: transparent;
      }

      :host ::ng-deep .p-paginator-bottom {
        margin-top: 2rem;
      }

      :host ::ng-deep .p-paginator-bottom > button {
        border: 1px solid var(--surface-border);
      }

      :host ::ng-deep .p-paginator-pages > button {
        border: 1px solid var(--surface-border) !important;
      }
    `]
})
export class ShopComponent implements OnInit {

    products: any[];

    colors: any[];

    selectedColor: any;

    sortOptions: SelectItem[];

    sortOrder: number;

    sortField: string;

    items: MenuItem[];

    constructor(private breadcrumbService: BreadcrumbService) {
      this.breadcrumbService.setItems([
        {label: 'Shop'},
      ]);
    }

    ngOnInit(): void {
      this.products = [
        {active: false, title:'Product Name', price: '$321', discount: '%15', sale_price: '$123', image:'shop-1', rating: 4},
        {active: false, title:'Superturf Adventure X Atmos', price: '$321.00', discount: '%25', sale_price: '$123.00', image:'shop-2', rating: 3},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-3'},
        {active: false, title:'2750 Cotu Classic Sneaker', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-4', rating: 5},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-5', rating: 4},
        {active: false, title:'2750 Cotu Classic Sneaker', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-6', rating: 4},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-1', rating: 5},
        {active: false, title:'Superturf Adventure X Atmos', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-2', rating: 5},
        {active: false, title:'Product Name', price: '$321', discount: '%15', sale_price: '$123', image:'shop-1', rating: 4},
        {active: false, title:'Superturf Adventure X Atmos', price: '$321.00', discount: '%25', sale_price: '$123.00', image:'shop-2', rating: 3},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-3'},
        {active: false, title:'2750 Cotu Classic Sneaker', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-4', rating: 5},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-5'},
        {active: false, title:'2750 Cotu Classic Sneaker', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-6', rating: 4},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-1', rating: 5},
        {active: false, title:'Superturf Adventure X Atmos', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-2', rating: 5},
        {active: false, title:'Product Name', price: '$321', discount: '%15', sale_price: '$123', image:'shop-1', rating: 4},
        {active: false, title:'Superturf Adventure X Atmos', price: '$321.00', discount: '%25', sale_price: '$123.00', image:'shop-2', rating: 3},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-3'},
        {active: false, title:'2750 Cotu Classic Sneaker', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-4', rating: 5},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-5'},
        {active: false, title:'2750 Cotu Classic Sneaker', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-6', rating: 4},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-1', rating: 5},
        {active: false, title:'Superturf Adventure X Atmos', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-2', rating: 5},
        {active: false, title:'Product Name', price: '$321', discount: '%15', sale_price: '$123', image:'shop-1', rating: 4},
        {active: false, title:'Superturf Adventure X Atmos', price: '$321.00', discount: '%25', sale_price: '$123.00', image:'shop-2', rating: 3},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-3'},
        {active: false, title:'2750 Cotu Classic Sneaker', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-4', rating: 5},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-5'},
        {active: false, title:'2750 Cotu Classic Sneaker', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-6', rating: 4},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-1', rating: 5},
        {active: false, title:'Superturf Adventure X Atmos', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-2', rating: 5},
        {active: false, title:'Product Name', price: '$321', discount: '%15', sale_price: '$123', image:'shop-1', rating: 4},
        {active: false, title:'Superturf Adventure X Atmos', price: '$321.00', discount: '%25', sale_price: '$123.00', image:'shop-2', rating: 3},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-3'},
        {active: false, title:'2750 Cotu Classic Sneaker', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-4', rating: 5},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-5'},
        {active: false, title:'2750 Cotu Classic Sneaker', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-6', rating: 4},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-1', rating: 5},
        {active: false, title:'Superturf Adventure X Atmos', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-2', rating: 5},
        {active: false, title:'Product Name', price: '$321', discount: '%15', sale_price: '$123', image:'shop-1', rating: 4},
        {active: false, title:'Superturf Adventure X Atmos', price: '$321.00', discount: '%25', sale_price: '$123.00', image:'shop-2', rating: 3},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-3'},
        {active: false, title:'2750 Cotu Classic Sneaker', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-4', rating: 5},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-5'},
        {active: false, title:'2750 Cotu Classic Sneaker', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-6', rating: 4},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-1', rating: 5},
        {active: false, title:'Superturf Adventure X Atmos', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-2', rating: 5},
      ];
      
      this.colors = [
        {code: 'bg-black-alpha-90'},
        {code: 'bg-blue-500'},
        {code: 'bg-yellow-500'},
        {code: 'bg-gray-500'},
      ];

      this.sortOptions = [
        {label: 'Price High to Low', value: '!price'},
        {label: 'Price Low to High', value: 'price'}
      ];

      this.items = [
        {label: 'Color'},
        {label: 'Size'},
        {label: 'Price'}
      ];
    }

    onSortChange(event) {
      let value = event.value;

      if (value.indexOf('!') === 0) {
          this.sortOrder = -1;
          this.sortField = value.substring(1, value.length);
      }
      else {
          this.sortOrder = 1;
          this.sortField = value;
      }
  }

}
