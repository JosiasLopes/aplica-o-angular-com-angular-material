import { Component, Input, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'spa-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formulario = new FormGroup({
    nome : new FormControl(''),
  duracao : new FormControl('')
  });

  clicked = false;
  
  @Input() valorInicial:number = 10;

  onSubmit() {
    
    console.warn(this.formulario.value);
  }

}
