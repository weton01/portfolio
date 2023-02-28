import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() infoText: string = ""
  @Input() effect: string = ""
  @Input() type: "primary" | "secondary" = "primary"
  @Input() size: "default" | "small" = "default"
}
