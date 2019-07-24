import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HighlightDirectiveDirective } from './highlight-directive.directive';
import { Page2Component } from './page2/page2.component';
import { CustomStructuralDirective } from './custom-structural.directive';
import { ContactComponent } from './contact/contact.component';
import { FilterPipe} from './filter.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyserviceService } from './myservice.service';
import { CityService } from './city.service';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { DiComponent } from './di/di.component';
import { CurdOptComponent } from './curd-opt/curd-opt.component';
import { ProductComponent } from './curd-opt/product/product.component';
import { UpdateComponent } from './curd-opt/update/update.component';
import { DdpageModule } from './ddpage/ddpage.module';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    Page2Component,
    HighlightDirectiveDirective,
    CustomStructuralDirective,
    ContactComponent,
    FilterPipe,
    PageNotFoundComponent,
    NewCmpComponent,
    DiComponent,
    CurdOptComponent,
    ProductComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    DdpageModule
  ],
  providers: [MyserviceService, CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
