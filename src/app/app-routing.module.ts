import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComCreateComponent } from './pages/commission/com-create/com-create.component';
import { ComIndexComponent } from './pages/commission/com-index/com-index.component';
import { DebtComponent } from './pages/debt/debt.component';
import { ExpenseComponent } from './pages/expense/expense.component';
import { CreateComponent } from './pages/sales/create/create.component';
import { IndexComponent } from './pages/sales/index/index.component';

const routes: Routes = [
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
      { path: 'view', component: ExpenseComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
