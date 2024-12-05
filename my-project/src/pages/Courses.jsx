import React, { useState } from "react";
import CourseCard from "../components/Course/CourseCard";

const Courses = () => {
  // Dummy data for courses
  const courses = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      description: "Learn HTML, CSS, JavaScript, and React to build stunning websites.",
      instructor: "John Doe",
      rating: 4.8,
      duration: "12 weeks",
      studentsEnrolled: 1200,
      category: "Web Development"
    },
    {
      id: 2,
      title: "Full-Stack JavaScript",
      description: "Master both frontend and backend development using JavaScript, Node.js, and MongoDB.",
      instructor: "Jane Smith",
      rating: 4.6,
      duration: "10 weeks",
      studentsEnrolled: 950,
      category: "Web Development"
    },
    {
      id: 3,
      title: "Data Science Essentials",
      description: "Understand data analysis, visualization, and machine learning using Python.",
      instructor: "Alice Johnson",
      rating: 4.7,
      duration: "14 weeks",
      studentsEnrolled: 800,
      category: "Data Science"
    },
    {
      id: 4,
      title: "Graphic Design Masterclass",
      description: "Learn Photoshop, Illustrator, and InDesign to create stunning designs.",
      instructor: "Mike Brown",
      rating: 4.9,
      duration: "8 weeks",
      studentsEnrolled: 600,
      category: "Graphic Design"
    },
    {
      id: 5,
      title: "Cloud Computing Fundamentals",
      description: "Explore AWS, Azure, and Google Cloud Platform and their core services.",
      instructor: "Sarah Lee",
      rating: 4.5,
      duration: "6 weeks",
      studentsEnrolled: 400,
      category: "Cloud Computing"
    },
    {
      id: 6,
      title: "Digital Marketing 101",
      description: "Master SEO, PPC, social media marketing, and email marketing.",
      instructor: "Chris Taylor",
      rating: 4.4,
      duration: "5 weeks",
      studentsEnrolled: 700,
      category: "Marketing"
    },
    {
      id: 7,
      title: "Artificial Intelligence Basics",
      description: "Learn AI concepts, algorithms, and applications using Python.",
      instructor: "Emma Wilson",
      rating: 4.6,
      duration: "10 weeks",
      studentsEnrolled: 750,
      category: "AI & Machine Learning"
    },
    {
      id: 8,
      title: "Cybersecurity for Beginners",
      description: "Understand the basics of cybersecurity, ethical hacking, and network security.",
      instructor: "David Anderson",
      rating: 4.8,
      duration: "7 weeks",
      studentsEnrolled: 500,
      category: "Cybersecurity"
    },
    {
      id: 9,
      title: "UI/UX Design Principles",
      description: "Learn user interface and user experience design to create intuitive apps.",
      instructor: "Sophia Martinez",
      rating: 4.7,
      duration: "9 weeks",
      studentsEnrolled: 550,
      category: "Design"
    },
    {
      id: 10,
      title: "Mobile App Development",
      description: "Create mobile apps using Flutter and React Native.",
      instructor: "Tom Davis",
      rating: 4.5,
      duration: "11 weeks",
      studentsEnrolled: 650,
      category: "Mobile Development"
    }
  ];
  

  // State for search term and category filter
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
 
  const categories = ["Web Development", "Data Science", "Design", "Marketing", "Business"];

  
  const filteredCourses = courses.filter(course => {
    return (
      (course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory ? course.category === selectedCategory : true)
    );
  });

  return (
    <div className="container mx-auto p-6">
      {/* Search and Filters */}
      <div className="flex justify-between items-center mb-8">
        <div className="w-1/3">
          <input
            type="text"
            placeholder="Search for courses..."
            className="w-full px-4 py-2 border border-gray-300 rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-1/3 flex justify-end">
          <select
            className="px-4 py-2 border border-gray-300 rounded"
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
          >
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Course Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <p>No courses found.</p>
        )}
      </section>

      {/* Pagination or Infinite Scroll could be added here if needed */}
    </div>
  );
};

export default Courses;
