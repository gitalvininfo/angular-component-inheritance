import { Component, ElementRef, OnInit } from '@angular/core';
import { BaseModalComponentComponent } from '../base-modal-component/base-modal-component.component';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
})
export class ConfirmationModalComponent
  extends BaseModalComponentComponent
  implements OnInit
{
  public promptText: string = 'Are you sure you want to cancel?';

  constructor(private myElement: ElementRef) {
    super(myElement);
    // super.ngOnInit();
  }

  // override ngOnInit(): void {
  //   console.log('ngoninit coming from confirmation modal component');
  // }

  ngOnDestroy(): void {
    // ...
  }

  confirm() {
    // ...
    this.closeModal();
  }
}
