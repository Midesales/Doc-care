import { memo, useCallback } from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";

const StarRating = memo(({ score }) => {
  const colored = useCallback(() => Array(score).fill(''), [score]);
  const uncolored = useCallback(() => Array(5 - score).fill(''), [score]);

  return (
    <section className="flex gap-2 text-xl lg:gap-4 lg:text-[30px]">
      {colored().map((_, index) => (
        <FaStar key={index} color="#FF9213"/>
      ))}
      {uncolored().map((_, index) => (
        <FaRegStar key={index} color="#FF9213"/>
      ))}
    </section>
  )
});

StarRating.displayName = 'StarRating';

export default StarRating;
