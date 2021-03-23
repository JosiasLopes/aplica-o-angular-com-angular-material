import { Component, Input, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'spa-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formulario = new FormGroup({
    nome : new FormControl(''),
  idade : new FormControl('')
  });

  clicked = false;
  
  @Input() valorInicial:number = 10;

  onSubmit() {
    
    console.warn(this.formulario.value);
  }

}
