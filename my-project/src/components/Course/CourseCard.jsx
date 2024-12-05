import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
      <p className="text-gray-600 mb-4">{course.description}</p>
      <p className="font-semibold text-gray-700">Instructor: {course.instructor}</p>
      <div className="mt-2 flex items-center">
        <span className="text-yellow-400">⭐⭐⭐⭐</span> {/* You can add dynamic rating here */}
        <span className="ml-2 text-gray-500">{course.rating} / 5</span>
      </div>
      <a href={`/courses/`} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4 inline-block">
        View Course
      </a>
    </div>
  );
};

export default CourseCard;
