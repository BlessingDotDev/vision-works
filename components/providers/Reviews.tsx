import ReviewsSummary from "@/components/providers/reviews/ReviewsSummary";

const distribution = [
  { stars: 5, count: 98 },
  { stars: 4, count: 18 },
  { stars: 3, count: 5 },
  { stars: 2, count: 2 },
  { stars: 1, count: 1 },
];

export default function Reviews() {
  return (
    <ReviewsSummary
      averageRating={4.8}
      totalReviews={124}
      distribution={distribution}
    />
  );
}