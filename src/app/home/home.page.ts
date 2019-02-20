import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

      formulario: FormGroup
      constructor(private fb: FormBuilder){

      }
      get f() { return this.formulario.controls; }

      ngOnInit() {
        this.formulario = this.fb.group({
          email:['', [Validators.email, Validators.required]],
          cep:['', Validators.required],
          telefone:['', [Validators.required, Validators.minLength(11)]]
        })
      }
}
