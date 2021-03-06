import { Component, OnInit } from '@angular/core';
import { ConfirmarCadastroService } from 'src/app/services/confirmar-cadastro.service';

@Component({
  selector: 'app-confirmar-cadastro',
  templateUrl: './confirmar-cadastro.component.html',
  styleUrls: ['./confirmar-cadastro.component.css']
})
export class ConfirmarCadastroComponent implements OnInit {

  email?: string;

  constructor(
    private confirmarCadastro: ConfirmarCadastroService
  ) { }

  ngOnInit(): void {
  }

  public emitirConfirmacao() {
    this.confirmarCadastro.confirmarCadastro(this.email!);
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }

}
