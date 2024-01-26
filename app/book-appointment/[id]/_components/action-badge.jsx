import { memo } from "react";
import Badge from "./badge";
import cn from 'classnames';

const ActionBadge = memo(({ children, className, onClick, isSelected }) => {
  return(
    <div className="contents" onClick={onClick}>
      <Badge className={cn(
        "min-w-20 cursor-pointer hover:brightness-90 active:brightness-75",
        "focus:outline focus:outline-blue-700",
        className,
        isSelected && 'invert',
      )}>
        {children}
      </Badge>
    </div>
  )
});

export default ActionBadge;
