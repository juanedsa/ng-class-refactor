import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.scss']
})
export class GemComponent {
  @Input() type: number;
}
