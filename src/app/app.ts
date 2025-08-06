import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './_components/navbar/navbar';
import { PrimaryButton } from "./_components/primary-button/primary-button";
import { SecundaryButton } from "./_components/secundary-button/secundary-button";
import { ItemCertificado } from "./_components/item-certificado/item-certificado";
import { BaseUI } from "./_components/base-ui/base-ui";
import { Certificados } from "./pages/certificados/certificados";


@Component({
  selector: 'app-root',
  imports: [Navbar, PrimaryButton, SecundaryButton, ItemCertificado, BaseUI, Certificados],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'gerador-certificado';
  exibeNavbar: boolean =  true;
}
