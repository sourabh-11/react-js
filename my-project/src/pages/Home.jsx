import React from "react";
import CourseCard from "../components/Course/CourseCard";

const Home = () => {
  // Dummy data for categories and featured courses
  const categories = [
    { id: 1, name: "Web Development", icon: "💻" },
    { id: 2, name: "Data Science", icon: "📊" },
    { id: 3, name: "Design", icon: "🎨" },
    { id: 4, name: "Marketing", icon: "📈" }
  ];

  const featuredCourses = [
    { id: 1, title: "React for Beginners", description: "Start your journey with React.js", instructor: "John Doe" },
    { id: 2, title: "Advanced Python", description: "Master Python for real-world applications", instructor: "Jane Smith" },
    { id: 3, title: "UX/UI Design", description: "Learn the fundamentals of UI/UX design", instructor: "Alex Brown" },
  ];

  return (
    <div className="container mx-auto p-6">
      {/* Hero Section */}
      <section className="text-center py-20 bg-blue-900 text-white">
        <h1 className="text-4xl font-bold mb-4">Learn Anytime, Anywhere</h1>
        <p className="text-xl mb-6">Start your learning journey with thousands of online courses</p>
        <a href="/courses" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg">
          Explore Courses
        </a>
      </section>

      {/* Course Categories */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center">Browse by Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-6">
          {categories.map(category => (
            <div key={category.id} className="border p-6 text-center rounded-lg hover:bg-gray-100">
              <div className="text-4xl">{category.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center">Featured Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
          {featuredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Testimonials Section (Optional) */}
      <section className="mt-16 bg-gray-50 p-6 text-center rounded-lg">
        <h2 className="text-3xl font-bold mb-6">What Our Students Say</h2>
        <p className="italic text-gray-700 mb-4">"This platform has transformed my learning experience!"</p>
        <p className="font-semibold">- Emma Green</p>
      </section>
    </div>
  );
};

export default Home;
