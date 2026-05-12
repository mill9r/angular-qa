import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Product } from '../models/product.model';

const MOCK_PRODUCTS: Product[] = [
  { id: 1, name: 'Wireless Headphones', price: 79.99, imageUrl: 'https://placehold.co/300x200?text=Headphones', description: 'Premium sound quality with noise cancellation.' },
  { id: 2, name: 'Mechanical Keyboard', price: 129.99, imageUrl: 'https://placehold.co/300x200?text=Keyboard', description: 'Tactile switches for the best typing experience.' },
  { id: 3, name: 'USB-C Hub', price: 49.99, imageUrl: 'https://placehold.co/300x200?text=USB+Hub', description: 'Expand your ports with 7-in-1 connectivity.' },
  { id: 4, name: 'Webcam HD', price: 89.99, imageUrl: 'https://placehold.co/300x200?text=Webcam', description: '1080p full HD with built-in microphone.' },
  { id: 5, name: 'Desk Lamp', price: 34.99, imageUrl: 'https://placehold.co/300x200?text=Lamp', description: 'LED with adjustable brightness and colour temperature.' },
  { id: 6, name: 'Mouse Pad XL', price: 19.99, imageUrl: 'https://placehold.co/300x200?text=Mouse+Pad', description: 'Extended gaming pad with anti-fray stitched edges.' },
];

@Injectable({ providedIn: 'root' })
export class CatalogService {
  readonly loading = signal<boolean>(false);

  getProducts(): Observable<Product[]> {
    this.loading.set(true);
    return of(MOCK_PRODUCTS).pipe(
      delay(400),
      tap({
        next: () => this.loading.set(false),
        error: () => this.loading.set(false),
      })
    );
  }
}
