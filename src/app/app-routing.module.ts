import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComCreateComponent } from './pages/commission/com-create/com-create.component';
import { ComIndexComponent } from './pages/commission/com-index/com-index.component';
import { DebtComponent } from './pages/debt/debt.component';
import { ExpeCreateComponent } from './pages/expense/expe-create/expe-create.component';
import { ExpeIndexComponent } from './pages/expense/expe-index/expe-index.component';
import { CreateComponent } from './pages/sales/create/create.component';
import { IndexComponent } from './pages/sales/index/index.component';
import { UsIndexComponent } from './pages/users/us-index/us-index.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent 
  },
  {
    path: 'dashboard', component: DashboardComponent 
  },
  {
    path: 'debts',
    children: [
      { path: 'view', component: DebtComponent }
    ]
  },
  {
    path: 'sales',
    children: [
      { path: 'view', component: IndexComponent },
      { path: 'create', component: CreateComponent}
    ]
  },
  {
    path: 'commissions',
    children: [
      { path: 'view', component: ComIndexComponent },
      { path: 'create', component: ComCreateComponent },
    ]
  },
  {
    path: 'expenses',
    children: [
      { path: 'view', component: ExpeIndexComponent },
      { path: 'create', component: ExpeCreateComponent }
    ]
  },
  {
    path: 'users',
    children: [
      { path: 'view', component: UsIndexComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
