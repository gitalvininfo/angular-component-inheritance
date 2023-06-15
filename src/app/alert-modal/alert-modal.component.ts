import { Component, ElementRef, OnInit } from '@angular/core';
import { BaseModalComponentComponent } from '../base-modal-component/base-modal-component.component';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss'],
})
export class AlertModalComponent
  extends BaseModalComponentComponent
  implements OnInit
{
  constructor(private alertElement: ElementRef) {
    super(alertElement);
  }

  override ngOnInit(): void {
    console.log('ngoninit coming from alert component');
  }
}
