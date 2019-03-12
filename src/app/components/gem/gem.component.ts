import { Component, Input } from '@angular/core';
import { GemClass } from './gem-class';
import { STONES } from './gem.constants';

@Component({
  selector: 'app-gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.scss']
})
export class GemComponent {
  @Input() type: number;

  public getClass(): GemClass {
    return {
      'gem--space': this.type === STONES.SPACE,
      'gem--mind': this.type === STONES.MIND,
      'gem--reality': this.type === STONES.REALITY,
      'gem--time': this.type === STONES.TIME,
      'gem--power': this.type === STONES.POWER,
      'gem--soul': this.type === STONES.SOUL
    }
  }
}
