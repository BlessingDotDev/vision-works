"use client";

import { Star } from "lucide-react";
import clsx from "clsx";

interface StarRatingProps {
  rating: number;
  size?: number;
}

export default function StarRating({
  rating,
  size = 22,
}: StarRatingProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => {
        const filled = index < Math.round(rating);

        return (
          <Star
            key={index}
            size={size}
            className={clsx(
              "transition-colors",
              filled
                ? "fill-yellow-400 text-yellow-400"
                : "text-zinc-600"
            )}
          />
        );
      })}
    </div>
  );
}