import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [ { path: '', redirectTo: 'login', pathMatch: 'full' },

// Wildcard route for handling undefined paths{
{  path: 'login',
  component: LoginComponent,
  
},{
  path: 'product',
  component: ProductComponent,
  
},{path:'cart',component:CartComponent},
{ path: '**', redirectTo: 'login' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
