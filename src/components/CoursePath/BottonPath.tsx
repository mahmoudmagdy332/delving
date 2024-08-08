const BottonPath = ({ title, top, left }:{ title:string, top:number, left :number}) => {
    return (
        <div style={{
            position: 'absolute',
            top: `${top}px`,
            left: `${left}px`,
            textAlign: 'center',
        }} className="relative ">
            <img src="/images/ICONS/Button → image.svg"/>
            <div className="w-24 mt-2">{title}</div>
            
        </div>
    );
}

export default BottonPath