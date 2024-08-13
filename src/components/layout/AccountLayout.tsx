import { Outlet } from "react-router-dom";
import AccountSide from "../Account/AccountSide";

const AccountLayout = () => {
  return (
    <div className="my-4 w-10/12 mx-auto grid  grid-cols-4">
      <div className="col-span-3">
        <Outlet />
      </div>
      <div>
        <AccountSide />
      </div>
    </div>
  );
};

export default AccountLayout;
