import { Component, Input } from '@angular/core';
import { STONES } from './stones.constants';
import { StonesClass } from './stones-class';

@Component({
  selector: 'app-stone',
  templateUrl: './stone.component.html',
  styleUrls: ['./stone.component.scss']
})
export class StoneComponent {
  @Input() type: number;

  public getClass(): StonesClass {
    return {
      'stone--space': this.type === STONES.SPACE,
      'stone--mind': this.type === STONES.MIND,
      'stone--reality': this.type === STONES.REALITY,
      'stone--time': this.type === STONES.TIME,
      'stone--power': this.type === STONES.POWER,
      'stone--soul': this.type === STONES.SOUL
    }
  }
}
