import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpProviderService } from '../Service/http-provider.service';
import { WebApiService } from '../Service/web-api.service';

@Component({
  selector: 'app-view-produto',
  templateUrl: './view-produto.component.html',
  styleUrls: ['./view-produto.component.css']
})
export class ViewProdutoComponent implements OnInit {

  produtoId: any;
  produtoDetail : any= [];

  constructor(public webApiService: WebApiService, private route: ActivatedRoute, private httpProvider : HttpProviderService) { }

  ngOnInit(): void {
    this.produtoId = this.route.snapshot.params['produtoId'];
    this.getProdutoDetailById();
  }

  getProdutoDetailById() {
    this.httpProvider.getProdutoDetailById(this.produtoId).subscribe((data : any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.produtoDetail = resultData;
        }
      }
    },
    (error :any)=> { });
  }

}
