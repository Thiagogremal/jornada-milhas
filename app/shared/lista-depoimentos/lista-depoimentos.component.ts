import { Component } from '@angular/core';
import { depoimentoInterface } from '../depoimentoInterface';
import { DepoimentoserviceService } from '../depoimentoservice.service';

@Component({
  selector: 'app-lista-depoimentos',
  templateUrl: './lista-depoimentos.component.html',
  styleUrl: './lista-depoimentos.component.scss'
})
export class ListaDepoimentosComponent {

    listaDepoimento: depoimentoInterface[] = [];
    constructor(private service: DepoimentoserviceService){}

    ngOnInit(): void{// Toda logica que voce quiser que seja carregada,tem de ser executada no NgOnInit

      this.service.listar().subscribe((dbjson) => {this.listaDepoimento = dbjson});
      //listaPensamentos é a lista que vai ser obtida do Observable
    }

}
