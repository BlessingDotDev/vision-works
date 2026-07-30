"use client";

import RatingBar from "./RatingBar";
import StarRating from "./StarRating";
import { ReviewsSummaryProps } from "./types";

export default function ReviewsSummary({
  averageRating,
  totalReviews,
  distribution,
}: ReviewsSummaryProps) {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
      <h2 className="mb-8 text-2xl font-bold text-white">
        Reviews
      </h2>

      <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
        <div>
          <h3 className="text-6xl font-bold text-white">
            {averageRating.toFixed(1)}
          </h3>

          <div className="mt-4">
            <StarRating rating={averageRating} />
          </div>

          <p className="mt-5 text-zinc-400">
            ({totalReviews.toLocaleString()} reviews)
          </p>
        </div>

        <div className="space-y-5">
          {distribution.map((item) => (
            <RatingBar
              key={item.stars}
              stars={item.stars}
              count={item.count}
              percentage={
                (item.count / totalReviews) * 100
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}