import Image from "next/image";
import { Star, BadgeCheck } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "/reviews/review1.jpg",
    rating: 5,
    verified: true,
    title: "Outstanding Service",
    review:
      "Absolutely impressed with the quality and fast delivery. The customer support team was professional throughout the process. I highly recommend this store.",
  },
  {
    id: 2,
    name: "Michael Brown",
    image: "/reviews/review2.jpg",
    rating: 5,
    verified: true,
    title: "Exceeded Expectations",
    review:
      "Everything arrived exactly as described. Premium packaging, excellent communication and great prices. I'll definitely be ordering again.",
  },
  {
    id: 3,
    name: "Emily Wilson",
    image: "/reviews/review3.jpg",
    rating: 5,
    verified: true,
    title: "Amazing Experience",
    review:
      "One of the best online shopping experiences I've had. The website is easy to use and delivery was incredibly fast.",
  },
];

export default function ReviewsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Loved by Thousands of Customers
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Our customers trust us because we consistently deliver quality
            products and exceptional service.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Rating */}
              <div className="mb-6 flex">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="mr-1 h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {review.title}
              </h3>

              {/* Review */}
              <p className="mb-8 leading-7 text-gray-600">
                {review.review}
              </p>

              {/* User */}
              <div className="flex items-center">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div className="ml-4">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-gray-900">
                      {review.name}
                    </h4>

                    {review.verified && (
                      <BadgeCheck className="h-5 w-5 text-blue-600" />
                    )}
                  </div>

                  <p className="text-sm text-gray-500">
                    Verified Customer
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid gap-8 rounded-3xl bg-gray-900 p-10 text-center text-white md:grid-cols-3">
          <div>
            <h3 className="text-4xl font-bold">25K+</h3>
            <p className="mt-2 text-gray-300">Happy Customers</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">4.9/5</h3>
            <p className="mt-2 text-gray-300">Average Rating</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">98%</h3>
            <p className="mt-2 text-gray-300">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}