import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-matt-dialog-example',
  templateUrl: './matt-dialog-example.component.html',
  styleUrls: ['./matt-dialog-example.component.css']
})
export class MattDialogExampleComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<MattDialogExampleComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(){}
}
