import { UntypedFormBuilder, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
    selector     : 'menu',
    templateUrl  : './menu.component.html',
})
export class menuComponent {
    /**
     * Constructor
     */
    constructor() {}
}

export class AppComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      id: ['', Validators.required],
      status: ['', Validators.required],
      descricao: ['', Validators.required],
      parecerTecnico: ['', Validators.required],
    });
  }

  onSubmit() {
    // Aqui você pode acessar os dados do formulário usando this.myForm.value
    console.log(this.myForm.value);
  }
}
