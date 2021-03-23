import { Component, OnInit } from '@angular/core';
import { alunos } from '../model/alunos';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  valor:number = 5;

  MudaValor() : void{
    this.valor = 10;
  }

  ExibirTabela():void{
    
    if(this.exibirTabela==true){
      this.exibirTabela = false;
    }else{
      this.exibirTabela = true;
    }
  }

  listaAlunos:alunos[] = [
    {nome:'Josias',idade:32},
    {nome:"Maria",idade:50}
  ];

  exibirTabela:boolean = false;

}
