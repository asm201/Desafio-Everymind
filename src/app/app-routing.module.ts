import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProdutoComponent } from './add-produto/add-produto.component'
import { EditProdutoComponent } from './edit-produto/edit-produto.component';
import { HomeComponent } from './home/home.component';
import { ViewProdutoComponent } from './view-produto/view-produto.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent },
  { path: 'ViewProduto/:produtoId', component: ViewProdutoComponent },
  { path: 'AddProduto', component: AddProdutoComponent },
  { path: 'EditProduto/:produtoId', component: EditProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
