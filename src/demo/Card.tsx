import { makeComponent, classes, px, percent, style, React } from "./style";

const div = makeComponent("div");

const CardInner = div({
  $debugName: `card-inner`,
  maxWidth: px(800),
  minWidth: px(200),
  maxHeight: px(800),
  minHeight: px(100),
  background: `white`,
  boxShadow: `2px 0px 15px rgba(0,0,0,.5)`,
  margin: `0 auto`,
  padding: px(100)
});

const cardSelected = style({
  background: `rgba(150,200,200)`,
  borderRadius: px(10),
  marginTop: px(20)
});

const CardOuter = div({
  $debugName: `card-outer`,
  width: percent(100),
  padding: px(10)
});

export const Card = ({
  children,
  className,
  selected
}: {
  children?: any;
  className?: string;
  selected?: boolean;
}) => (
  <CardOuter className={className}>
    <CardInner
      className={classes(selected && cardSelected)}
      onClick={() =>
        alert(
          "onClick, etc, work.\nAll properties are passed down to the underlying element"
        )
      }
    >
      {children}
    </CardInner>
  </CardOuter>
);
