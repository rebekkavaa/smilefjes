import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultListComponent } from './result-list/result-list.component';

const routes: Routes = [
  { path: 'results', component: ResultListComponent },
	{ path: 'results/details', component: ResultListComponent },
	{ path: '**', redirectTo: '/results', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
