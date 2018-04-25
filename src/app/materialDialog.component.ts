import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'material-dialog',
  templateUrl: 'material-dialog.html',
})
export class MaterialDialog {
  pageNumber = 1;
  pdfSrc = './assets/test2.pdf';
  constructor(public dialogRef: MatDialogRef < MaterialDialog > , @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
