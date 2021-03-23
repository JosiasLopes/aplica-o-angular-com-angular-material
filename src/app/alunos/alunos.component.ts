import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'spa-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() valorInicial:number = 10;

  formulario = new FormGroup({
    nome : new FormControl(''),
  idade : new FormControl('')
  });

  clicked = false;

  onSubmit() {
    
    console.warn(this.formulario.value);
  }

}
