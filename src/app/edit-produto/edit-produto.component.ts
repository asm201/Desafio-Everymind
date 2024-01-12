import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../Service/http-provider.service';

@Component({
  selector: 'app-edit-produto',
  templateUrl: './edit-produto.component.html',
  styleUrls: ['./edit-produto.component.css']
})
export class EditProdutoComponent implements OnInit {
  editProdutoForm: produtoForm = new produtoForm();

  @ViewChild("produtoForm")
  produtoForm!: NgForm;

  isSubmitted: boolean = false;
  produtoId: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.produtoId = this.route.snapshot.params['produtoId'];
    this.getProdutoDetailById();
  }
  getProdutoDetailById() {
    this.httpProvider.getProdutoDetailById(this.produtoId).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.editProdutoForm.Id = resultData.id;
          this.editProdutoForm.Nome = resultData.nome;
          this.editProdutoForm.Codigo = resultData.codigo;
          this.editProdutoForm.Descricao = resultData.descricao;
          this.editProdutoForm.Preco = resultData.Preco;
        }
      }
    },
      (error: any) => { });
  }

  EditProduto(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveProduto(this.editProdutoForm).subscribe(async data => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData != null && resultData.isSuccess) {
            if (resultData != null && resultData.isSuccess) {
              this.toastr.success(resultData.message);
              setTimeout(() => {
                this.router.navigate(['/Home']);
              }, 500);
            }
          }
        }
      },
        async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/Home']);
          }, 500);
        });
    }
  }
}

export class produtoForm {
  Id: number = 0;
  Nome: string = "";
  Codigo: string = "";
  Descricao: string = "";
  Preco: number = 0;
}
