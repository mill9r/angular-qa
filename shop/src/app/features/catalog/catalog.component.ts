import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { CatalogService } from '../../core/services/catalog.service';
import { Product } from '../../core/models/product.model';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  protected catalogService = inject(CatalogService);
  private router = inject(Router);

  protected products = toSignal(this.catalogService.getProducts(), {
    initialValue: [] as Product[]
  });

  goToCheckout(): void {
    this.router.navigate(['/checkout']);
  }
}
