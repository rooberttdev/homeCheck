import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imoveis } from './imoveis';
import { TokenService } from '../autenticacao/token.service';
import { environment } from 'src/environments/environment.prod';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ImoveisService {

  constructor(private http:HttpClient, private tokenService: TokenService) { }

  listaDoUsuario(nomeDoUsuario:string):Observable<Imoveis>{
    const token = this.tokenService.retornaToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.http.get<Imoveis>(`${API}/${nomeDoUsuario}/photos`, {headers});
  }
}
