export type CustomerReview = {
  id: string;
  name: string;
  source: 'Google' | 'Nextdoor' | 'Testimonial';
  rating: number;
  text: string;
  initials: string;
  color: string;
  photos?: string[];
  sourceUrl?: string;
  excerpt?: boolean;
  location?: string;
};

export const reviewSummary = { displayCount: '47+', label: 'Reviews & Recommendations', googleRating: '5.0', googleReviewCount: 9 };

export function reviewSourceLabel(review: CustomerReview) {
  return review.source === 'Testimonial' ? 'Customer testimonial' : `${review.source} review`;
}

export const customerReviews: CustomerReview[] = [
  {
    id: 'william-rupley', name: 'William Rupley', source: 'Google', rating: 5, initials: 'WR', color: 'bg-emerald-700',
    text: 'Hardworking and grea price. Did a really nice job getting all our flower beds looking great and removing 5 raised garden beds in backyard.',
    sourceUrl: 'https://share.google/sgSTqtgPiSJHc4C2E',
  },
  {
    id: 'viki-coumbe', name: 'Viki Coumbe', source: 'Google', rating: 5, initials: 'VC', color: 'bg-violet-600',
    text: 'Jackson and Brock did an excellent job of spreading the mulch as requested. On time and very reasonable pricing.',
    excerpt: true,
    sourceUrl: 'https://share.google/cx8K3bBnHwvybGK59',
  },
  {
    id: 'jackson-phillips', name: 'Jackson Phillips', source: 'Google', rating: 5, initials: 'JP', color: 'bg-sky-700',
    text: 'Gave a fair price for much installation and did a great job.',
    sourceUrl: 'https://share.google/ljSWV8jeTotSrPB61',
  },
  {
    id: 'fed-bread', name: 'Fed Bread', source: 'Google', rating: 5, initials: 'F', color: 'bg-orange-600',
    text: 'Spoke to Brock about specific yard related issues, he was able to get Sam to complete the job. Sam did an excellent job within a couple of hours, moving & spreading 61 bags of stones(30lb bags ea), spreading 2 wheelbarrow loads of sand & moving 6 large flagstones into another spot. Will use again!',
    photos: ['/reviews/fed-bread-1.png', '/reviews/fed-bread-2.png', '/reviews/fed-bread-3.png'],
  },
  {
    id: 'theresa-fan', name: 'Theresa Fan', source: 'Nextdoor', rating: 5, initials: 'TF', color: 'bg-lime-700',
    text: 'Brock and his team came out for an estimate, got to work at the date and time promised, worked very diligently and professionally and, did a wonderful, meticulous job at applying 5 yards of black mulch to our yard. I highly recommend Blade Landscaping for all your Landscaping needs.',
  },
  {
    id: 'katie-pane', name: 'Katie Pane', source: 'Google', rating: 5, initials: 'KP', color: 'bg-purple-600',
    text: 'Brock is a pleasure to work with and he was able to give my backyard a needed facelift with a new layer of mulch!',
  },
  {
    id: 'art-scott', name: 'Art Scott', source: 'Google', rating: 5, initials: 'AS', color: 'bg-blue-600',
    text: 'Thanks to Brock and Erik for taking care of our landscaping. Extremely respectful and conscientious young men who are eager to help and work!',
  },
  {
    id: 'margaret-white', name: 'Margaret White', source: 'Nextdoor', rating: 5, initials: 'MW', color: 'bg-teal-700',
    text: 'Blade Landscape weeded two large flower beds in my yard, one of which had many oak sappers. They arrived promptly, did a thorough job, and left my beds looking lovely. The team of two was polite and easy to work with. I highly recommend them for your smaller landscape needs.',
  },
  {
    id: 'sm-c', name: 'SM C', source: 'Google', rating: 5, initials: 'SC', color: 'bg-green-700',
    text: 'I was needing someone to do some landscape work. The company that usually does my work is so busy they can\'t get to me. I saw Brock\'s advertisement on Nextdoor and took a chance. This is a group of late high school age gentlemen. I hired Brock and crew to pull bamboo, lay landscape fabric, and mulch. They did a very nice job at a very reasonable price, were professional, polite, and hardworking. They cleaned up afterwards and left the job site spotless. Highly recommend.',
  },
  {
    id: 'ava-weinstein', name: 'Ava Weinstein', source: 'Google', rating: 5, initials: 'AW', color: 'bg-pink-600',
    text: 'Blair and his team did an amazing job moving our heavy furniture, boxes, art and many other household items. We had a big job for them and they did it professionally and saw it through to the end. I highly recommend them for any moving needs. Thank you!',
  },
  {
    id: 'saundra-edwards', name: 'Saundra Edwards', source: 'Nextdoor', rating: 5, initials: 'SE', color: 'bg-emerald-600',
    text: 'I was very pleased with help planting three shrubs in my yard recently. These high school guys have integrity and a desire to do a good job. So refreshing!!',
  },
  {
    id: 'maria-rodriguez', name: 'Maria Rodriguez', source: 'Testimonial', rating: 5, initials: 'MR', color: 'bg-emerald-500',
    text: 'Blade Landscaping transformed our backyard into a beautiful oasis. Their attention to detail and professionalism exceeded our expectations. Highly recommend!',
    location: 'Stone Oak, San Antonio',
  },
  {
    id: 'james-thompson', name: 'James Thompson', source: 'Testimonial', rating: 5, initials: 'JT', color: 'bg-blue-500',
    text: 'Outstanding service from start to finish. The team was punctual, courteous, and did an amazing job with our lawn. Best landscaping service in San Antonio!',
    location: 'Alamo Heights, San Antonio',
  },
  {
    id: 'sarah-chen', name: 'Sarah Chen', source: 'Testimonial', rating: 5, initials: 'SC', color: 'bg-purple-500',
    text: 'We\'ve used many landscapers over the years, but Blade Landscaping is by far the best. Fair pricing, excellent work, and great communication throughout.',
    location: 'The Dominion, San Antonio',
  },
];

export const featuredReviews = ['william-rupley', 'viki-coumbe', 'art-scott'].map((id) => customerReviews.find((review) => review.id === id)!);
