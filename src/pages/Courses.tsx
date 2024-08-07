import { Box, Button, Typography } from "@mui/material"
import HeaderLayout from "../components/common/HeaderLayout"
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import CourseCard from "../components/courses/CourseCard";
const Courses = () => {
    const listItems=['All',"HVAC","Light Current","Fire Fighting","Electrical Power","Construction",]
    const cources=[
        {
        image:"/public/PHOTOS/Frame.svg",
        title:"Fire Fighting",
        discription:"Master key scientific ideas & technologies of the future"
        },
        {
            image:"/public/PHOTOS/Frame (1).svg",
            title:"Electrical Power",
            discription:"Master key scientific ideas & technologies of the future"
        },
        {
            image:"/public/PHOTOS/Group (1).svg",
            title:"Fire Fighting",
            discription:"Master key scientific ideas & technologies of the future"
            },

    ]
    return (
    <div className="py-10 w-10/12 mx-auto">
       <div className="flex flex-col gap-10">
       <div className="flex justify-center">
            <HeaderLayout>
            <Typography sx={{color:'text.primary',fontSize:"20px",fontWeight:"bold"}}>Browse all 70+ <Box component="span" sx={{color:'yellow.main'}}>courses</Box></Typography>
            </HeaderLayout>
        </div>
        {/* <form>
            <input className=" border h-10 rounded-md"/>
        </form> */}
        <form className="flex grow">
                <div className="relative flex grow">
                  <input
                    type="text"
                    id="search"
                    className="p-2.5 ps-12 h-12 w-64  outline-none grow text-sm text-gray-900 border border-gray-500 rounded-lg bg-transparent focus:ring-gray-50 focus:border-gray-800"
                    placeholder="Search for courses..."
                    required
                  />
                  <div className="absolute inset-y-0 start-5 flex items-center pointer-events-none">
                    <SearchTwoToneIcon/>
                  </div>
                </div>
              </form>
              <div className="flex flex-wrap gap-4">
                {listItems.map((item)=>(
                  <Button sx={{border:"1px solid grey",color:'text.primary',py:'5px',px:'10px',borderRadius:'5px','&:hover':{borderColor:'primary.main',bgcolor:'primary.dark'}}}>
                    {item}
                  </Button>
                ))}
              </div>

              <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cources.map((course)=>(
                    <CourseCard course={course}/>
                  ))}
              </div>
       </div>
    </div>
  )
}

export default Courses