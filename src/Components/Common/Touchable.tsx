import * as React from "react";
interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: any;
  link?: string;
  style?: React.CSSProperties;
  hoverStyle?: React.CSSProperties;
  onClick?: (e?: any) => any;
  onHover?: () => any;
  onHoverLeave?: () => any;
  isHover?: boolean;
  disableRipple?: boolean;
  useButton?: boolean;
  id?: string;
}
interface States {
  hovering: boolean;
}
export class Touchable extends React.Component<Props, States> {
  static defaultProps = {};
  state = { hovering: false };
  lastClicked = 0;
  _onClick = ((e: any) => {
    const now = new Date().getTime();
    const { onClick } = this.props;
    if (now - this.lastClicked > 300) {
      if (onClick) {
        onClick(e);
      }
      this.lastClicked = now;
    }
    if (onClick) {
      e.preventDefault();
      e.stopPropagation();
    }
  }).bind(this);
  onMouseEnter = () => {
    const { onHover } = this.props;
    if (onHover) {
      onHover();
      this.setState({ hovering: true });
    }
  };
  onMouseLeave = () => {
    const { onHover, onHoverLeave } = this.props;
    const { hovering } = this.state;
    if (onHover && hovering) {
      if (onHoverLeave) onHoverLeave();
      this.setState({ hovering: false });
    }
  };
  render() {
    const {
      link,
      children,
      style,
      hoverStyle,
      onClick,
      isHover,
      disableRipple,
      onHoverLeave,
      onMouseEnter,
      useButton,
      id,
    } = this.props;
    let { className } = this.props;
    const { hovering } = this.state;
    let _style: React.CSSProperties = {
      color: "white",
      alignItems: "flex-start",
      textDecoration: "none",
    };
    if (isHover !== undefined ? isHover : hovering) {
      _style = { ..._style, ...hoverStyle };
    }
    className = `touchable ${className || ""}`;
    const props = {
      className,
      style: { cursor: "pointer", ..._style, ...style },
      onMouseEnter: onMouseEnter || hoverStyle ? this.onMouseEnter : undefined,
      onMouseLeave: onHoverLeave || hoverStyle ? this.onMouseLeave : undefined,
      target: link && link.startsWith("http") ? "_blank" : undefined,
      href: link,
      onClick: this._onClick,
      children,
      id,
    };

    if (useButton) {
      return <button {...props} />;
    }
    if (link) {
      return <a {...props} />;
    } else {
      return <div {...props} />;
    }
  }
}
