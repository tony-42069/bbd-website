'use client'

import React from 'react';
import { Star, StarHalf, User, Quote } from 'lucide-react';

interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  text: string;
  avatarUrl?: string;
}

const ReviewCard = ({ review }: { review: Review }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          className="text-pink-400 fill-pink-400"
          size={16}
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half"
          className="text-pink-400 fill-pink-400"
          size={16}
        />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star
          key={`empty-${i}`}
          className="text-purple-300"
          size={16}
        />
      );
    }

    return stars;
  };

  return (
    <div className="bg-purple-900/50 rounded-lg p-6 backdrop-blur-sm hover:bg-purple-900/60 transition-all">
      <div className="flex items-start space-x-4">
        {review.avatarUrl ? (
          <img
            src={review.avatarUrl}
            alt={review.author}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-purple-800/50 flex items-center justify-center">
            <User className="text-purple-300" size={24} />
          </div>
        )}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-white">{review.author}</h3>
            <span className="text-sm text-purple-300">{review.date}</span>
          </div>
          <div className="flex mb-3">
            {renderStars(review.rating)}
          </div>
          <div className="relative">
            <Quote className="absolute -left-2 -top-2 text-purple-700/30" size={24} />
            <p className="text-purple-100 pl-4">{review.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  const reviews: Review[] = [
    {
      id: '1',
      author: 'Sarah Hicks',
      date: 'January 18, 2020',
      rating: 5,
      text: 'Donika is so sweet and friendly. Everything is delicious! The baklava is amazing and the cakes are beautiful.',
      avatarUrl: '/api/placeholder/64/64'
    },
    {
      id: '2',
      author: 'Igli Mallkasi',
      date: 'June 1, 2020',
      rating: 5,
      text: 'Amazing bakery with authentic homemade goods. Would highly recommend!',
      avatarUrl: '/api/placeholder/64/64'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <span className="text-4xl font-medium text-white">5.0</span>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="text-pink-400 fill-pink-400"
                size={24}
              />
            ))}
          </div>
        </div>
        <p className="text-purple-200">Based on {reviews.length} reviews</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-purple-200 mb-4">
          Enjoyed our baked goods? Share your experience!
        </p>
        <a
          href="https://g.page/r/CfHb-lm5ynSzEAI/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-pink-400 text-white rounded-lg hover:bg-pink-500 transition-colors"
        >
          Leave a Review
        </a>
      </div>
    </div>
  );
};

export default Reviews;