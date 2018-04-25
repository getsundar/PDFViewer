import { Component, ViewChild, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MaterialDialog } from './materialDialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MaterialDialog]
})
export class AppComponent {
  title = 'app';
  pdfSrc = './assets/test.pdf';
  pdfSrc2 = './assets/test2.pdf';
  pageNumber = 1;
  showSuplPages = true;
  dialogRef = null;
  @ViewChild('pdfviewer') pdfviewer;
  constructor(public dialog: MatDialog) {}
  onProgress(progressData) {
    let pagenumber = this.pdfviewer.element.nativeElement.getAttribute('data-page-number');
  }
  pageRendered(event) {
    //debugger;
  }
  onNextPage() {
    this.pageNumber++;
    if (this.dialogRef)
      this.dialogRef.close();
    if (this.pageNumber % 3 == 0 && this.showSuplPages)
      this.openDialog();
  }

  onPrevPage() {
    this.pageNumber--;
    if (this.dialogRef)
      this.dialogRef.close();
    if (this.pageNumber % 3 == 0 && this.showSuplPages)
      this.openDialog();
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(MaterialDialog, {
      width: '1000px',
      height: '600px',
      data: { currentPage: this.pageNumber },
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
