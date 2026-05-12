import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  protected cartService = inject(CartService);
  private router = inject(Router);

  protected showCancelConfirm = signal(false);

  pay(): void {
    // Fake pay button — does nothing per spec
  }

  confirmCancel(): void {
    this.cartService.clearCart();
    this.router.navigate(['/catalog']);
  }

  formatPrice(amount: number): string {
    return `$${amount.toFixed(2)}`;
  }
}
