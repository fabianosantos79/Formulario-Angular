import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[maiorIdadeValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MaiorIdadeDirective,
    multi: true 
  }]
})
export class MaiorIdadeDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    const dataInput = control.value;
    const anoNascimento = new Date(dataInput).getFullYear();
    const anoNascimentoMais18 = anoNascimento + 18;
    const dataAtual = new Date().getFullYear();
    
    console.log("Ano Nascimento: " + anoNascimento);
    console.log("Data atual: " + dataAtual);
    
    

   const ehMaiorIdade = anoNascimentoMais18 <= dataAtual;
   console.log(ehMaiorIdade);;
   
    return ehMaiorIdade ? null : {'maiorIdadeValidator': true};
    
  }
}
