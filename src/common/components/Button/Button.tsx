type ButtonProps = {
  variant: 'primary' | 'secondary';
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

function Button({
  variant,
  children = 'Click Me',
  ...rest
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseClasses =
    'inline-flex items-center gap-2 rounded-lg px-2 py-1 transition-all duration-300 ease-out focus:ring-2 focus:outline-none cursor-pointer';
  const variantClasses =
    variant === 'primary'
      ? 'bg-secondary text-white hover:bg-secondary-hover'
      : 'bg-muted text-muted-foreground hover:bg-secondary-hover/20 hover:text-secondary-hover focus:ring-secondary-hover/20 ';

  return (
    <button
      className={`${baseClasses} ${variantClasses}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;