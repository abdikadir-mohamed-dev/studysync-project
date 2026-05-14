function Subjects() {

  const subjects = [
    {
      id: 1,
      name: "Programming",
      lecturer: "Mr John",
      progress: "70%"
    },
    {
      id: 2,
      name: "Operating Systems",
      lecturer: "Mrs Sarah",
      progress: "50%"
    },
    {
      id: 3,
      name: "Computer Architecture",
      lecturer: "Dr Mike",
      progress: "80%"
    }
  ];

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        My Subjects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {subjects.map((subject) => (

          <div
            key={subject.id}
            className="bg-white p-6 rounded-2xl shadow"
          >

            <h2 className="text-xl font-bold">
              {subject.name}
            </h2>

            <p className="text-gray-500 mt-2">
              Lecturer: {subject.lecturer}
            </p>

            <p className="mt-3">
              Progress: {subject.progress}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Subjects;