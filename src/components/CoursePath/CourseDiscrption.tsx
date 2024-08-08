import { Typography } from "@mui/material"

const CourseDiscrption = () => {
  return (
    <div>
        <div className="flex flex-col gap-8 py-8 border-b border-t">
            <Typography sx={{fontWeight:'700',fontSize:'18px',color:'dark.main'}}>Course description </Typography>
            <Typography  sx={{fontWeight:'500',fontSize:'20px',color:'dark.main',lineHeight:'36px'}}>Answer data analysis questions with summary statistics from visualizations such as box and whisker plots, line graphs, scatterplots, bar charts, and histograms. Apply data transformations such as filter and groupby to analyze data. Use visualizations to represent and communicate about data effectively. Decide which plot type to use based on the data type that you have. Learn when and how to implement logarithmic scales (as opposed to linear ones) to best represent the story your data tells. </Typography>
        </div>
    </div>
  )
}

export default CourseDiscrption