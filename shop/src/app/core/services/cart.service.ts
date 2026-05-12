import { Injectable, Signal, computed, signal } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly _items = signal<CartItem[]>([]);

  readonly items: Signal<CartItem[]> = this._items.asReadonly();

  readonly count: Signal<number> = computed(() =>
    this._items().reduce((sum, ci) => sum + ci.quantity, 0)
  );

  readonly total: Signal<number> = computed(() =>
    this._items().reduce((sum, ci) => sum + ci.product.price * ci.quantity, 0)
  );

  addItem(product: Product): void {
    this._items.update(items => {
      const idx = items.findIndex(ci => ci.product.id === product.id);
      if (idx === -1) {
        return [...items, { product, quantity: 1 }];
      }
      return items.map((ci, i) =>
        i === idx ? { ...ci, quantity: ci.quantity + 1 } : ci
      );
    });
  }

  removeItem(productId: number): void {
    this._items.update(items => items.filter(ci => ci.product.id !== productId));
  }

  clearCart(): void {
    this._items.set([]);
  }
}
