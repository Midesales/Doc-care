import { memo } from "react";
import cn from "classnames";

const Badge = memo(({ className, children }) => {
  return <section tabIndex={0} className={cn(
    "flex flex-col items-center p-2 bg-white rounded-[20px] shadow lg:p-4",
    className
  )}>
    {children}
  </section>
});

Badge.displayName = 'Badge';

export default Badge;
