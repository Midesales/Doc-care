import { memo } from "react";
import cn from 'classnames';

const Button = memo(({ children, ...props }) => {
  return (
    <button {...props} className={cn(
      "shadow bg-brand py-4 px-10 rounded-lg font-bold text-xl",
      "hover:brightness-90 active:brightness-75",
      "focus:outline focus:outline-blue-700",
      "disabled:opacity-25",
    )}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
