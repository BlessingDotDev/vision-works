"use client";

import { Star } from "lucide-react";
import clsx from "clsx";

interface RatingBarProps {
  stars: number;
  count: number;
  percentage: number;
}

export default function RatingBar({
  stars,
  count,
  percentage,
}: RatingBarProps) {
  const color =
    stars >= 4
      ? "bg-emerald-500"
      : stars === 3
      ? "bg-yellow-500"
      : stars === 2
      ? "bg-orange-500"
      : "bg-red-500";

  return (
    <div className="grid grid-cols-[20px_24px_1fr_45px] items-center gap-3">
      <span className="font-medium text-white">
        {stars}
      </span>

      <Star
        size={16}
        className={clsx(
          "fill-yellow-400 text-yellow-400"
        )}
      />

      <div className="h-3 overflow-hidden rounded-full bg-zinc-800">
        <div
          className={clsx(
            "h-full rounded-full transition-all duration-700",
            color
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <span className="text-right text-sm text-zinc-400">
        {count}
      </span>
    </div>
  );
}