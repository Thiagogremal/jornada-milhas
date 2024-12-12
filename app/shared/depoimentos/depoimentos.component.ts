import { Component, Input } from '@angular/core';
import { depoimentoInterface } from '../depoimentoInterface';
import { DepoimentoserviceService} from '../depoimentoservice.service';


@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrl: './depoimentos.component.scss'
})
export class DepoimentosComponent {

    @Input() depoimento: depoimentoInterface = {
        id: 0,
        imagem: 'avatar3',
        depoimento: "depoimento",
        nome: 'nome'
    }
    
    constructor(){}

    

}
