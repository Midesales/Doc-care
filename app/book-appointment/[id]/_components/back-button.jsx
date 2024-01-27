'use client'

import { memo } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import cn from "classnames";

const BackButton = memo(() => {
  const router = useRouter();

  return <button
    onClick={() => router.back()}
    className={cn(
      "absolute left-8 -top-10 inline-grid place-items-center w-16 h-16",
      'rounded-full bg-white shadow outline-blue-700 hover:brightness-90 focus:outline'
    )}>
    <FaArrowLeft size={30}/>
  </button>
});

export default BackButton;
