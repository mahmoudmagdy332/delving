import { course } from "../../app/utils/types/types";

const CourseCard = ({ course }: { course: course }) => {
  return (
    <div className="lex flex-col gap-4 items-center border rounded-lg p-4">
      <img
        src={course.image}
        className="object-cover w-full h-auto max-w-xs max-h-sm"
      />

      <h3 className="font-semibold text-xl text-center">{course.name}</h3>
      {/* <Link to={`/courses/${course.name}`}></Link> */}
    </div>
  );
};

export default CourseCard;
