import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageRoutingModule } from './page-routing.module';
import { PageRenderComponent } from './page-render.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PageRoutingModule
  ],
  declarations: [PageRenderComponent]
})
export class PageModule { }