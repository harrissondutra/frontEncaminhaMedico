import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profissional } from 'src/app/models/Profissional';
import { profissionalService } from 'src/app/services/profissional.service';


@Component({
  selector: 'app-profissional-create',
  templateUrl: './profissional-create.component.html',
  styleUrls: ['./profissional-create.component.css']
})
export class ProfissionalCreateComponent implements OnInit {

  profissional: Profissional = {
    id: '',
    nome: 'Marcos Paulo' ,
    email: 'marcospaulo@email.com',
    telefone: '(85)99778899',
    telefoneCelular: '(85)99778899',
    endereco: 'Rua Vera Alencar'
  }

  constructor(private router: Router, private service: profissionalService) { }

  ngOnInit(): void {
  }

  cancel():void{
    this.router.navigate(['profissional'])
  }

  create(): void{

   this.service.create(this.profissional).subscribe((resposta) =>{
    this.router.navigate(['profissional'])
    this.service.message('Profissional criado com sucesso!')
   })
    
  }

}
