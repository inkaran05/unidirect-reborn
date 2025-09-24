// src/mock-data.js

export const colleges = [
  {
    id: 1,
    name: "Amity University, Patna",
    city: "Patna",
    state: "Bihar",
    fees: 180000,
    courses: ["B.Tech", "BBA", "BCA"],
    rating: 4.3,
    imageUrl: "https://placehold.co/600x400/e2e8f0/4a5568?text=Amity+Patna",
    overview: "A leading private university with a focus on industry-oriented education and a sprawling campus. Known for its modern infrastructure and diverse student body.",
    placements: { '2022': 85, '2023': 88, '2024': 91 },
    facilities: ["Library", "Hostel", "Sports Complex", "Wi-Fi Campus", "Cafeteria"],
    studentReviews: [
      { name: "Rahul Kumar", rating: 4, comment: "Great campus and faculty support." },
      { name: "Priya Singh", rating: 5, comment: "Excellent placement opportunities." }
    ],
    courseDetails: {
      "B.Tech": "4-year program with specializations in CSE, ECE, and Mechanical Engineering.",
      "BBA": "3-year program focusing on business management and entrepreneurship.",
      "BCA": "3-year program in computer applications with practical training."
    }
  },
  {
    id: 2,
    name: "Chandragupt Institute of Management",
    city: "Patna",
    state: "Bihar",
    fees: 250000,
    courses: ["MBA", "PGDM"],
    rating: 4.7,
    imageUrl: "https://placehold.co/600x400/dbeafe/1e3a8a?text=CIMP",
    overview: "A premier management institute offering excellent placement opportunities and a rigorous academic curriculum. Consistently ranked among the top B-schools in the region.",
    placements: { '2022': 95, '2023': 96, '2024': 98 },
    facilities: ["Library", "Hostel", "Auditorium", "Computer Labs", "Gym"],
    studentReviews: [
      { name: "Amit Sharma", rating: 5, comment: "Top-notch management education." },
      { name: "Sneha Patel", rating: 4, comment: "Strong industry connections." }
    ],
    courseDetails: {
      "MBA": "2-year program with focus on finance, marketing, and HR.",
      "PGDM": "2-year diploma program equivalent to MBA with practical exposure."
    }
  },
  {
    id: 3,
    name: "Delhi Technological University",
    city: "Delhi",
    state: "Delhi",
    fees: 210000,
    courses: ["B.Tech", "MBA", "M.Tech"],
    rating: 4.8,
    imageUrl: "https://placehold.co/600x400/cffafe/155e75?text=DTU+Delhi",
    overview: "One of India's leading engineering universities with a rich history and a vast alumni network. Famous for its competitive environment and research facilities.",
    placements: { '2022': 94, '2023': 96, '2024': 97 },
    facilities: ["Research Labs", "Hostel", "Sports Facilities", "Library", "Innovation Center"],
    studentReviews: [
      { name: "Vikram Singh", rating: 5, comment: "Excellent research opportunities." },
      { name: "Anjali Gupta", rating: 4, comment: "Challenging but rewarding." }
    ],
    courseDetails: {
      "B.Tech": "4-year engineering program with various specializations.",
      "MBA": "2-year management program for engineers.",
      "M.Tech": "2-year postgraduate program in advanced engineering."
    }
  },
  {
    id: 4,
    name: "Christ University",
    city: "Bangalore",
    state: "Karnataka",
    fees: 200000,
    courses: ["BBA", "B.Com", "BA", "BCA"],
    rating: 4.5,
    imageUrl: "https://placehold.co/600x400/fef2f2/991b1b?text=Christ+Uni",
    overview: "A multidisciplinary university known for its vibrant campus life and excellence in humanities and commerce. A top choice for students seeking a holistic education.",
    placements: { '2022': 90, '2023': 92, '2024': 94 },
    facilities: ["Campus Hostel", "Library", "Sports Ground", "Auditorium", "Cafeteria"],
    studentReviews: [
      { name: "Rohit Kumar", rating: 4, comment: "Vibrant campus life." },
      { name: "Meera Joshi", rating: 5, comment: "Great for holistic development." }
    ],
    courseDetails: {
      "BBA": "3-year program in business administration.",
      "B.Com": "3-year commerce program with accounting focus.",
      "BA": "3-year arts program with various subjects.",
      "BCA": "3-year computer applications program."
    }
  },
  {
    id: 5,
    name: "IIT Patna",
    city: "Patna",
    state: "Bihar",
    fees: 220000,
    courses: ["B.Tech", "M.Tech"],
    rating: 4.9,
    imageUrl: "https://placehold.co/600x400/f3e8ff/581c87?text=IIT+Patna",
    overview: "An institute of national importance, renowned for its cutting-edge research and top-tier engineering programs. Admission is highly competitive.",
    placements: { '2022': 98, '2023': 99, '2024': 100 },
    facilities: ["Advanced Labs", "Hostel", "Sports Complex", "Library", "Research Centers"],
    studentReviews: [
      { name: "Arjun Singh", rating: 5, comment: "World-class education." },
      { name: "Kavita Sharma", rating: 5, comment: "Excellent placement record." }
    ],
    courseDetails: {
      "B.Tech": "4-year engineering program with research focus.",
      "M.Tech": "2-year postgraduate engineering program."
    }
  },
  {
    id: 6,
    name: "Nalanda Institute of Technology",
    city: "Nalanda",
    state: "Bihar",
    fees: 75000,
    courses: ["BBA", "BCA", "B.Com"],
    rating: 3.9,
    imageUrl: "https://placehold.co/600x400/e0e7ff/312e81?text=NIT+Nalanda",
    overview: "Known for its strong focus on practical skills and affordable programs in the heart of a historic region. A great choice for budget-conscious students.",
    placements: { '2022': 78, '2023': 81, '2024': 83 },
    facilities: ["Library", "Hostel", "Computer Labs", "Sports", "Cafeteria"],
    studentReviews: [
      { name: "Suresh Kumar", rating: 4, comment: "Affordable and practical." },
      { name: "Pooja Singh", rating: 4, comment: "Good for beginners." }
    ],
    courseDetails: {
      "BBA": "3-year business program.",
      "BCA": "3-year computer applications program.",
      "B.Com": "3-year commerce program."
    }
  }
];
