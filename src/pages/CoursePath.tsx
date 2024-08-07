import Footer from "../components/layout/Footer";


const StepComponent = ({ title, top, left }:{ title:string, top:number, left :number}) => {

    return (
        <div style={{
            position: 'absolute',
            top: `${top}px`,
            left: `${left}px`,
            textAlign: 'center',
        }} className="relative ">
            <img src="/ICONS/Button → image.svg"/>
            <div className="w-24 mt-2">{title}</div>
            
        </div>
    );
};





  
const CoursePath = () => {
    const steps = [
        { title: 'Understanding Variables'},
        { title: 'Practice Understanding Variables' },
        { title: 'Using Variables' },
        { title: 'Practice Using Variables', top: 470, left: 350 },
        { title: 'Understanding Expressions', top: 620, left: 250 },
        { title: 'Practice Understanding Expressions', top: 750, left: 150 },
        { title: 'Evaluating Expressions', top: 880, left: 250 },
        { title: 'Practice Evaluating Expressions', top: 1100, left: 230 },
        { title: 'Understanding Equations', top: 1250, left: 300 },
        { title: 'Understanding Equations', top: 1250, left: 300 },
        { title: 'Practice Evaluating Expressions', top: 1100, left: 230 },
        { title: 'Understanding Equations', top: 1250, left: 300 },
        { title: 'Understanding Equations', top: 1250, left: 300 },
    ];

  return (
   <div className="relative pb-20">
        <div style={{ position: 'relative',height:`${steps.length*150}px`}}>
            <StepComponent title={steps[0].title} top={50} left={300} />
            <StepComponent title={steps[1].title} top={180} left={166} />
            {steps.slice(2).map((step, index) => (
               <>
                {index%4===0&&(<>
                    <StepComponent key={index}  title={step.title} top={(Math.floor(index/4)*540)+350} left={230} />
                    <img src="/ICONS/Vector (3).svg" className={`${steps.length-3===index&&'hidden'}`} style={{ position: 'absolute', top: (Math.floor(index/4)*540)+400, left: 300, zIndex: -1 }} />
                </>
                )}
                {index%4===1&&(
                    <>
                        <StepComponent key={index}  title={step.title} top={(Math.floor(index/4)*540)+470} left={350} />
                        <img src="/ICONS/Vector (4).svg" className={`${steps.length-3===index&&'hidden'}`} style={{ position: 'absolute', top: (Math.floor(index/4)*540)+580, left: 220, zIndex: -1 }} />
                    </>
                )}
                {index%4===2&&(
                    <>
                        <StepComponent key={index}  title={step.title} top={(Math.floor(index/4)*540)+620} left={250} />
                        <img src="/ICONS/Vector (5).svg" className={`${steps.length-3===index&&'hidden'}`} style={{ position: 'absolute', top: (Math.floor(index/4)*540)+730, left: 200, zIndex: -1 }} />
                    </>
                )}
                {index%4===3&&(
                    <>
                        <StepComponent key={index}  title={step.title} top={(Math.floor(index/4)*540)+750} left={150} />
                        <img src="/ICONS/Vector (6).svg" className={`${steps.length-3===index&&'hidden'}`} style={{ position: 'absolute', top: (Math.floor(index/4)*540)+850, left: 50, zIndex: -1 }} />
                    </>
                )}
               
               </>
               
            ))}
        
            <img src="/ICONS/Vector (1).svg" style={{ position: 'absolute', top: 100, left: 160, zIndex: -1 }} />
            <img src="/ICONS/Vector (2).svg" style={{ position: 'absolute', top: 290, left: 60, zIndex: -1 }} />
            

        </div>     
   </div>
  )
}

export default CoursePath