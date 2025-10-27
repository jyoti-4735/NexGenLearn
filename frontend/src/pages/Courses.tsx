const Courses = () => {
    const courses = [
      { title: "Full Stack Web Development", desc: "Master MERN Stack with hands-on projects.", level: "Intermediate" },
      { title: "AI & Machine Learning", desc: "Understand core AI concepts with Python and TensorFlow.", level: "Advanced" },
      { title: "Cybersecurity Basics", desc: "Learn ethical hacking, penetration testing, and network security.", level: "Beginner" },
    ];
  
    return (
      <section className="min-h-screen py-20 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Courses</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.desc}</p>
              <span className="inline-block bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                {course.level}
              </span>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Courses;
  