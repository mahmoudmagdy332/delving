import BottonPath from "./BottonPath";

const Path = () => {
    const steps = [
        { title: 'Understanding Variables'},
        { title: 'Practice Understanding Variables' },
        { title: 'Using Variables' },
        { title: 'Practice Using Variables'},
       
    ];
  return (
    <div className="relative pb-20 " >
    <div className="w-full absolute top-0 left-0 h-full" style={{backgroundImage:'url("/images/PHOTOS/Mask Group.svg")',backgroundRepeat:'repeat',opacity:'.5',backgroundSize: 'cover'}}></div>
    <div style={{ position: 'relative',height:`${steps.length*150}px`}}>
        <BottonPath title={steps[0].title} top={50} left={300} />
        <BottonPath title={steps[1].title} top={180} left={166} />
        {steps.slice(2).map((step, index) => (
           <>
            {index%4===0&&(<>
                <BottonPath key={index}  title={step.title} top={(Math.floor(index/4)*540)+350} left={230} />
                <img src="/images/ICONS/Vector(3).svg" className={`${steps.length-3===index&&'hidden'}`} style={{ position: 'absolute', top: (Math.floor(index/4)*540)+400, left: 300, zIndex: -1 }} />
            </>
            )}
            {index%4===1&&(
                <>
                    <BottonPath key={index}  title={step.title} top={(Math.floor(index/4)*540)+470} left={350} />
                    <img src="/images/ICONS/Vector(4).svg" className={`${steps.length-3===index&&'hidden'}`} style={{ position: 'absolute', top: (Math.floor(index/4)*540)+580, left: 220, zIndex: -1 }} />
                </>
            )}
            {index%4===2&&(
                <>
                    <BottonPath key={index}  title={step.title} top={(Math.floor(index/4)*540)+620} left={250} />
                    <img src="/images/ICONS/Vector(5).svg" className={`${steps.length-3===index&&'hidden'}`} style={{ position: 'absolute', top: (Math.floor(index/4)*540)+730, left: 200, zIndex: -1 }} />
                </>
            )}
            {index%4===3&&(
                <>
                    <BottonPath key={index}  title={step.title} top={(Math.floor(index/4)*540)+750} left={150} />
                    <img src="/images/ICONS/Vector(6).svg" className={`${steps.length-3===index&&'hidden'}`} style={{ position: 'absolute', top: (Math.floor(index/4)*540)+850, left: 50, zIndex: -1 }} />
                </>
            )}
           
           </>
           
        ))}
    
        <img src="/images/ICONS/Vector(1).svg" style={{ position: 'absolute', top: 100, left: 160, zIndex: -1 }} />
        <img src="/images/ICONS/Vector(2).svg" style={{ position: 'absolute', top: 290, left: 60, zIndex: -1 }} />
        

    </div>     
</div>
  )
}

export default Path