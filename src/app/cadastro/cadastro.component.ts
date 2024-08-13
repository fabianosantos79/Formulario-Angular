import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConsultaCepService } from '../service/consulta-cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private router: Router, 
    private consultaCepService: ConsultaCepService
  ) { }

  ngOnInit(): void {
  }

  cadastrar(form: NgForm){
      if(form.valid){
        this.router.navigate(['/sucesso'])
      }else{
        alert('Erro ao cadastar: ' + form.errors)
      }
      console.log(form.control);
      console.log(form.controls);
      
      
  }

  consultaCep(event: any, formulario: NgForm){
    const cepInput = event.target.value;
    this.consultaCepService.getConsultaCep(cepInput).subscribe(resultado => {
      console.log(resultado);
      this.populandoEndereco(resultado, formulario);
    });    
  }

  populandoEndereco(dados: any, formulario: NgForm){
    formulario.form.patchValue({
      endereco: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    })
  }
}
