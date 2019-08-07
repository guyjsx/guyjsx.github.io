import { PortfolioDialogComponent } from './portfolio/portfolio-dialog/portfolio-dialog.component';
import { MatDialog, MatMenuTrigger } from '@angular/material';
import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  @ViewChild(MatMenuTrigger, { static: false }) trigger: MatMenuTrigger;
  title = 'port';

  constructor(public dialog: MatDialog) {}

  openPortfolio(): void {
    const dialogRef = this.dialog.open(PortfolioDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  scrollTo(element): void {
    console.log(element);
    element.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
