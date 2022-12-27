import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartItem } from 'src/app/models/CartItem';
import { dialogData } from 'src/app/models/dialogData';
import { ConfirmDialogComponent } from '../../dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent {
  @Input() item: CartItem = new CartItem();
  @Output() RemoveItemFromCart: EventEmitter<number> = new EventEmitter();

  constructor(private dialog: MatDialog) { }

  RemoveFromCart() {

    let dialogRef = this.dialog.open(ConfirmDialogComponent, { data: new dialogData('', 'Are You Sure ?') });

    dialogRef.afterClosed().subscribe(res => {

      if (res === "Yes") {
        this.RemoveItemFromCart.emit(this.item.product.id);
      }

    });

  }
}
