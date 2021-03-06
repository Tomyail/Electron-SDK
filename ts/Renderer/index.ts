import SoftwareRenderer from './SoftwareRenderer';
import createGlRenderer from './GlRenderer';
import { EventEmitter } from 'events';

interface IRenderer {
  event: EventEmitter;
  bind(element: Element): void;
  unbind(): void;
  getBindingElement(): any;
  drawFrame(imageData: {
    header: any,
    yUint8Array: any,
    uUint8Array: any,
    vUint8Array: any
  }): void;
  setContentMode(mode: number): void;
  refreshCanvas(): void;
}

class GlRenderer implements IRenderer {
  self: any;
  event: EventEmitter;
  constructor() {
    this.self = createGlRenderer.apply(this);
    this.event = this.self.event;
  }
  bind(element: Element): void {
    return this.self.bind(element);
  }
  unbind(): void {
    return this.self.unbind();
  }
  getBindingElement(): any {
    return this.self.getBindingElement()
  }
  drawFrame(imageData: {
    header: any,
    yUint8Array: any,
    uUint8Array: any,
    vUint8Array: any
  }): void {
    return this.self.drawFrame(imageData);
  }
  setContentMode(mode: number): void {
    return this.self.setContentMode(mode);
  }
  refreshCanvas() {
      return this.self.refreshCanvas();
  }
}

export {
  SoftwareRenderer, GlRenderer, IRenderer
};
