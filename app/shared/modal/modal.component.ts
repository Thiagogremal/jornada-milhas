import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  valorAdulto: number = 1;
  valorBebe: number = 1;

  incrementarAdulto(){
    this.valorAdulto++;
  }

  decrementarAdulto(){
    this.valorAdulto--;
  }

  incrementarBebe(){
    this.valorBebe++;
  }

  decrementarBebe(){
    this.valorBebe--;
  }

}
