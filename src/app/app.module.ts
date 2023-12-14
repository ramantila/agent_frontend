import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DebtComponent } from './pages/debt/debt.component';
import { ExpenseComponent } from './pages/expense/expense.component';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './pages/sales/index/index.component';
import { CreateComponent } from './pages/sales/create/create.component';
import { ComIndexComponent } from './pages/commission/com-index/com-index.component';
import { ComCreateComponent } from './pages/commission/com-create/com-create.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    DebtComponent,
    ExpenseComponent,
    IndexComponent,
    CreateComponent,
    ComIndexComponent,
    ComCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
