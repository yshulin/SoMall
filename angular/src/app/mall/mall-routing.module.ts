import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '@core/auth-guard.service';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { SpuListComponent } from './components/spu-list/spu-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { SpuEditComponent } from './components/spu-edit/spu-edit.component';
import { AddressListComponent } from './components/addresses/address-list.component';
import { MallUserListComponent } from './components/users/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'shops', pathMatch: 'full', data: { breadcrumb: "商城" } },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'shops', component: ShopListComponent, data: { title: '商铺', permission: 'Pages' } },
      { path: 'categories', component: CategoryListComponent, data: { title: '商品分类', permission: 'Pages' } },
      { path: 'spus', component: SpuListComponent, data: { title: '商品列表', permission: 'Pages' } },
      { path: 'spu-edit/:id', component: SpuEditComponent, data: { title: '修改商品', permission: 'Pages' } },
      { path: 'spu-create/:categoryId', component: SpuEditComponent, data: { title: '添加商品', permission: 'Pages' } },
      { path: 'spu-create', component: SpuEditComponent, data: { title: '添加商品', permission: 'Pages' } },
      { path: 'addresses', component: AddressListComponent, data: { title: '用户地址列表', permission: 'Pages' } },
      { path: 'users', component: MallUserListComponent, data: { title: '商城用户列表', permission: 'Pages' } },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MallRoutingModule { }
