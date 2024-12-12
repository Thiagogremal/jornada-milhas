import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao-controle',
  templateUrl: './botao-controle.component.html',
  styleUrl: './botao-controle.component.scss'
})
export class BotaoControleComponent {

  @Input() operacao : 'incrementar' | 'decrementar' = 'incrementar';

  // @Output() click = new EventEmitter<void>();

  // controleOperacao(){}
}
