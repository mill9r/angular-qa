import { Component, computed, inject, input } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart.service';
import { SocialShareComponent } from '../../../shared/components/social-share/social-share.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [SocialShareComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  product = input.required<Product>();

  private cartService = inject(CartService);

  readonly shareUrl = computed(() =>
    `${window.location.origin}/catalog/${this.product().id}`
  );

  addToCart(): void {
    this.cartService.addItem(this.product());
  }
}
