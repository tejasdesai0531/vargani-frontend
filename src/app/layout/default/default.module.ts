import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component'
import { HomeComponent } from '../../modules/home/home.component'
import { PostsComponent } from '../../modules/posts/posts.component'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class DefaultModule { }
