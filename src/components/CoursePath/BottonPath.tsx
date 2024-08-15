import { Link } from "react-router-dom";

const BottonPath = ({ title, top, left }:{ title:string, top:number, left :number}) => {
    return (
        <Link to="/Courses/dasdsa/adsasd">
         <div style={{
            position: 'absolute',
            top: `${top}px`,
            left: `${left}px`,
            textAlign: 'center',
        }} className="relative ">
            <img src="/images/ICONS/Button → image.svg"/>
            <div className="w-24 mt-2">{title}</div>
            
        </div>
        </Link>
       
    );
}

export default BottonPath