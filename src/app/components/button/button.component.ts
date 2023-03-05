import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string = ''; //agrega el texto de app
  @Input() color: string = ''; //agrega el color del template y se guarda en el componente

  constructor() {}
  ngOnInit(): void {}
}
