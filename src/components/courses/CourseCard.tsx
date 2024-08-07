import { Button } from "@mui/material"

type course={
    image:string,
    title:string,
    discription:string 
}
const CourseCard = ({course}:{course:course}) => {
  return (
    <div className="w-full flex flex-col gap-5  border rounded-md p-4">
        <div className="flex justify-center mb-3">
        <img src={course.image} className="w-3/4"/>
        </div>
        <h3 className="font-semibold text-xl">{course.title}</h3>
        <p className=" text-sm">{course.discription}</p>
        <Button sx={{color:"text.primary",bgcolor:'background.paper',py:"10px"}}>View path</Button>
    </div>
  )
}

export default CourseCard