import { Component } from '@angular/core';
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { SecundaryButton } from "../../_components/secundary-button/secundary-button";
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificado-form',
  imports: [SecundaryButton, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {
  nome: string = "";
  atividade: string = "";
  atividades: string[] = ['Angular', 'React', 'Cobol'];

  campoInvalido(control: NgModel) {
    return control.invalid && control.touched
  }
}
