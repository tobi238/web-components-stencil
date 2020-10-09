import { Component, Prop, h, Element } from '@stencil/core';
import { format } from '../../utils/utils';
import { MDCRipple } from '@material/ripple/index';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {
  @Element() el: HTMLElement;

  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  handleClick(event: UIEvent) {
    alert('Received the button click!');
    console.log(event);
  }

  render() {
    return (
      <div>
        <p>Hello, World! I'm {this.getText()}</p>
        <button class="foo-button mdc-button" onClick={(event: UIEvent) => this.handleClick(event)}>
          <div class="mdc-button__ripple"></div>
          <span class="mdc-button__label">Material Components Web Button</span>
        </button>
        <button class="mdc-icon-button material-icons icon-btn">favorite</button>
      </div>
    );
  }

  componentDidRender() {
    const button = this.el.shadowRoot.querySelector('.foo-button');
    new MDCRipple(button);
  }
}
