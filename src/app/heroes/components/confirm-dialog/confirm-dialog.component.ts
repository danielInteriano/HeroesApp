import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styles: [],
})
export class ConfirmDialogComponent implements OnInit {
  constructor(
    private dialogref: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Heroe
  ) {}

  ngOnInit(): void {}

  //método para confirmar la eliminación de un heroe
  borrar() {
    this.dialogref.close(true);
  }

  //método para cancelar el borrado de un heroe
  cerrar() {
    this.dialogref.close();
  }
}
