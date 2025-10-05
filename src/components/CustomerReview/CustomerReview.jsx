import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Container from "../Container/Container";

const reviews = [
  {
    id: 1,
    name: "Ayesha Rahman",
    image: "https://i.ibb.co.com/TJt8Pjn/avatar.png",
    rating: 5,
    comment:
      "The food was absolutely delicious! Fresh ingredients and fast delivery. Highly recommend FreshBite!",
  },
  {
    id: 2,
    name: "Rafiul Islam",
    image: "https://i.ibb.co.com/TJt8Pjn/avatar.png",
    rating: 4.5,
    comment:
      "Great taste and friendly delivery. I just wish the packaging was a bit better, but overall amazing!",
  },
  {
    id: 3,
    name: "Mitu Hasan",
    image: "https://i.ibb.co.com/TJt8Pjn/avatar.png",
    rating: 4,
    comment:
      "Loved the pasta and salad! Everything tasted fresh and homemade — just like restaurant quality at home.",
  },
  {
    id: 4,
    name: "Nafis Chowdhury",
    image: "https://i.ibb.co.com/TJt8Pjn/avatar.png",
    rating: 5,
    comment:
      "Super fast service and great food quality! The burger was juicy, and fries were perfectly crispy.",
  },
  {
    id: 5,
    name: "Sumaiya Akter",
    image: "https://i.ibb.co.com/TJt8Pjn/avatar.png",
    rating: 5,
    comment:
      "This is my favorite place to order from! Always fresh, always tasty — and the desserts are amazing!",
  },
  {
    id: 6,
    name: "Farhan Hossain",
    image: "https://i.ibb.co.com/TJt8Pjn/avatar.png",
    rating: 4.5,
    comment:
      "Tried their grilled sandwich — super cheesy and flavorful! Loved the portion size too.",
  },
  {
    id: 7,
    name: "Mehjabin Nahar",
    image: "https://i.ibb.co.com/TJt8Pjn/avatar.png",
    rating: 4,
    comment:
      "Food quality was good and delivery was on time. The noodles were perfect, not too oily.",
  },
  {
    id: 8,
    name: "Hasib Ahmed",
    image: "https://i.ibb.co.com/TJt8Pjn/avatar.png",
    rating: 5,
    comment:
      "Best online food experience so far! Everything came warm and fresh — love their service.",
  },
  {
    id: 9,
    name: "Tania Rahman",
    image: "https://i.ibb.co.com/TJt8Pjn/avatar.png",
    rating: 4.5,
    comment:
      "The smoothie bowl was perfect! Fresh fruits and natural sweetness — I’ll definitely order again.",
  },
  {
    id: 10,
    name: "Shahriar Karim",
    image: "https://i.ibb.co.com/TJt8Pjn/avatar.png",
    rating: 5,
    comment:
      "Simply wow! Loved every bite. The presentation, flavor, and service were top-notch!",
  },
];

const getStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++)
    stars.push(<FaStar key={i} className="text-yellow-400" />);
  if (hasHalfStar)
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
  while (stars.length < 5)
    stars.push(
      <FaRegStar key={`empty-${stars.length}`} className="text-gray-400" />
    );
  return stars;
};

const CustomerReviews = () => {
  return (
    <section className="bg-amber-50 py-16 px-6 mt-20">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 mb-10">
            Real feedback from happy food lovers who tried and loved FreshBite!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all"
              >
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border border-amber-400"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {review.name}
                </h3>
                <div className="flex justify-center gap-1 mt-2 mb-3">
                  {getStars(review.rating)}
                </div>
                <p className="text-gray-600 text-sm italic">
                  "{review.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
        <h1 className="text-3xl text-red-600 mt-10">
          Aro kaj ase.. pore korbo 😑🤭
        </h1>
      </Container>
    </section>
  );
};

export default CustomerReviews;
