import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommissionComponent } from './pages/commission/commission.component';
import { DebtComponent } from './pages/debt/debt.component';
import { ExpenseComponent } from './pages/expense/expense.component';
import { SaleComponent } from './pages/sale/sale.component';

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
      { path: 'view', component: SaleComponent }
    ]
  },
  {
    path: 'commissions',
    children: [
      { path: 'view', component: CommissionComponent }
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
