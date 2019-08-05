import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { PortfolioDialogComponent } from './portfolio-dialog/portfolio-dialog.component';

import { MatDialogModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [PortfolioComponent, PortfolioItemComponent, PortfolioDialogComponent],
  exports: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule
  ],
  entryComponents: [
    PortfolioDialogComponent
  ]
})
export class PortfolioModule { }
