import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "http://localhost:8100/";

var httpLink = {
  getAllProduto: apiUrl + "/api/produto/getAllProduto",
  deleteProdutoById: apiUrl + "/api/produto/deleteProdutoById",
  getProdutoDetailById: apiUrl + "/api/produto/getProdutoDetailById",
  saveProduto: apiUrl + "/api/produto/saveProduto"
}

@Injectable({
  providedIn: 'root'
})

export class HttpProviderService {
  constructor(private webApiService: WebApiService) { }

  public getAllProduto(): Observable<any> {
    return this.webApiService.get(httpLink.getAllProduto);
  }
  public deleteProdutoById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deleteProdutoById + '?produtoId=' + model, "");
  }
  public getProdutoDetailById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getProdutoDetailById + '?produtoId=' + model);
  }
  public saveProduto(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveProduto, model);
  }
}
