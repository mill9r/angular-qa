import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-social-share',
  standalone: true,
  imports: [],
  templateUrl: './social-share.component.html',
  styleUrl: './social-share.component.css'
})
export class SocialShareComponent {
  shareUrl = input.required<string>();
  productName = input.required<string>();

  // Instagram provides no web share API — this opens instagram.com only (AC-10)
  readonly instagramUrl = 'https://www.instagram.com/';

  readonly facebookUrl = computed(() =>
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.shareUrl())}`
  );
}
