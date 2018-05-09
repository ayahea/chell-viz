import * as plotly from 'plotly.js';

module.exports = {
  ...plotly,
  react: (...args: any[]) => mockCanvas,
};

export class MockPlotlyHTMLElement {
  protected callbacks = new Map<string, (...args: any[]) => void>();

  public on = (event: string, callback: (...args: any[]) => void) => {
    this.callbacks.set(event, callback);
  };

  public dispatchEvent(event: Event): boolean {
    const cb = this.callbacks.get(event.type);
    if (cb) {
      cb();
    }
    return true;
  }
}

const mockCanvas = new MockPlotlyHTMLElement();
