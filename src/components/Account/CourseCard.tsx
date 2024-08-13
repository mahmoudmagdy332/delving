import { Link } from "react-router-dom";

type course = {
  image: string;
  title: string;
  description: string;
};
const CourseCard = ({ course }: { course: course }) => {
  return (
    <div className="lg:3/4 flex flex-col gap-5  border rounded-md p-4">
      <div className="flex justify-center mb-3">
        <img src={course.image} className="w-1/6" />
      </div>
      <h3 className="font-semibold text-xl text-center">{course.title}</h3>
      <Link to={`/courses/${course.title}`}></Link>
    </div>
  );
};

export default CourseCard;
