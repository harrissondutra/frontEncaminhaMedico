import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Estabelecimento } from '../models/Estabelecimento';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {
  
  baseUrl: String = environment.baseUrl;

  constructor(private http : HttpClient) { }

  findAll(): Observable<Estabelecimento[]>{
    const url = this.baseUrl + "/estabelecimento"
    return this.http.get<Estabelecimento[]>(url);
  } 
}
