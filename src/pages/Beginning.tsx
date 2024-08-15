import Achieving from "../components/Beginning/Achieving";
import Learning from "../components/Beginning/Learning";

function Beginning() {
  return (
    <div className="w-10/12 lg:w-3/4 mx-auto md:grid lg:grid-cols-3 md:grid-cols-4">
      <div className="lg:col-span-1 md:col-span-2 ">
        <Achieving />
      </div>
      <div className="col-span-2 md:cols-span-2">
        <Learning />
      </div>
    </div>
  );
}

export default Beginning;
