import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

  @Input() src: string = 'assets/imagens/banner-homepage-rodape.png'
  @Input() alt: string = 'rodape do banner'
}
