import React from 'react';
import { Star } from 'lucide-react';

const StarRating = ({ rating, size = 16, showNumber = true }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
        />
      ))}
      {showNumber && <span className="text-sm font-semibold ml-1">{rating}</span>}
    </div>
  );
};

export default StarRating;