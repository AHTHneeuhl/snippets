type TColors =
  | "red"
  | "orange"
  | "yellow"
  | "green "
  | "blue"
  | "indigo"
  | "violet";

type TextProps<T extends React.ElementType> = {
  as?: T;
  color?: TColors | "black";
};

type TDefaultProps<T extends React.ElementType> = React.PropsWithChildren<
  TextProps<T>
> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof TextProps<T>>;

const Text = <T extends React.ElementType = "span">({
  as,
  color,
  style,
  children,
  ...props
}: TDefaultProps<T>) => {
  const Component = as || "span";

  const internalStyles = color ? { style: { ...style, color } } : {};

  return (
    <Component {...props} {...internalStyles}>
      {children}
    </Component>
  );
};

export default Text;
