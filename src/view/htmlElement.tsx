import { h } from 'preact';

import { BaseComponent, BaseProps } from './base';

interface HTMLContentProps extends BaseProps {
  content: string;
  parentElement?: string;
}

export class HTMLContent extends BaseComponent<HTMLContentProps, {}> {
  static defaultProps = {
    parentElement: 'span',
  };

  render() {
    return h(this.props.parentElement, {
      dangerouslySetInnerHTML: { __html: this.props.content },
    });
  }
}
