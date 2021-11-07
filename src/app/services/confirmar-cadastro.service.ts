import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmarCadastroService {

  constructor(
    private http: HttpClient
  ) { }

  public confirmarCadastro(email: string) {
    let obj: any = {
      "email": email
    }

    this.http.post("http://localhost:8090/confirmar-cadastro/confirmar", obj).subscribe();
  }
}
