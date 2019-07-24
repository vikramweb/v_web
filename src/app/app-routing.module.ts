import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { Page2Component } from './page2/page2.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { DiComponent } from './di/di.component';
import { CurdOptComponent } from './curd-opt/curd-opt.component';
import { ProductComponent } from './curd-opt/product/product.component';
import { UpdateComponent } from './curd-opt/update/update.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'page2', component: Page2Component },
  { path: 'contact', component: ContactComponent },
  { path: 'newcmp', component: NewCmpComponent},
  { path: 'di', component: DiComponent},
  { path: 'curd-opt', component: CurdOptComponent},
  { path: 'curd-opt/product', component: ProductComponent},
  { path: 'curd-opt/update/:id', component: UpdateComponent},
  { path: '',   redirectTo: '/index', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
