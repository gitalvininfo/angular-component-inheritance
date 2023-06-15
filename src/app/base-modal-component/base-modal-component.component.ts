import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  template: '',
  styleUrls: ['./base-modal-component.component.scss'],
})
export class BaseModalComponentComponent implements OnInit {
  public isOpen: boolean = false;

  constructor(private elem: ElementRef) {}

  ngOnInit(): void {
    console.log('ngoninit coming from base modal component')
  }

  openModal(): void {
    // Logic
  }

  closeModal(): void {
    // Logic
  }

}
