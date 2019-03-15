import { Component } from '@angular/core';
import { STONES } from './components/stone/stones.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public stones = [
    STONES.MIND,
    STONES.POWER,
    STONES.REALITY,
    STONES.SOUL,
    STONES.SPACE,
    STONES.TIME
  ];
}
