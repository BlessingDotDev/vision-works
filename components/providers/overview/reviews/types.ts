export interface RatingDistribution {
  stars: number;
  count: number;
}

export interface ReviewsSummaryProps {
  averageRating: number;
  totalReviews: number;
  distribution: RatingDistribution[];
}