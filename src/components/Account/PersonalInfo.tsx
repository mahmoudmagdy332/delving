import { Typography } from "@mui/material";
// import CountrySelect from "./CountryInput";
import JopInput from "../jop/JopInput";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useUpdateUserMutation } from "../../app/services/mutation";

export interface UpdateForm {
  fname: string;
  lname: string;
  zip: string;
  city: string;
  school: string;
  region: string;
  age: number;
  Address: string;
}
function PersonalInfo() {
  const { mutate, data } = useUpdateUserMutation();
  console.log(data);

  const {
    handleSubmit,

    formState: { errors },
    control,
  } = useForm<UpdateForm>();

  const onSubmit: SubmitHandler<UpdateForm> = (data) => {
    if (data) {
      mutate(data);
    }
  };

  return (
    <div className="w-11/12 lg:w-3/4 mx-auto my-4">
      <Typography
        className=""
        variant="h3"
        sx={{
          color: "dark.main",
          borderBottom: "2px solid",
          borderBottomColor: "dark.main",
          p: "0 0 20px 0 ",
        }}
      >
        Personal Info
      </Typography>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="py-4 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
          <div className="flex flex-col gap-2">
            <Typography
              sx={{
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
              }}
            >
              First Name <span className="ms-2 text-red-600">*</span>
            </Typography>
            <Controller
              rules={{
                required: " first Name is required",
              }}
              name="fname"
              control={control}
              render={({ field }) => (
                <JopInput {...field} error={errors?.fname?.message} />
              )}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Typography
              sx={{
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Last name <span className="ms-2 text-red-600">*</span>
            </Typography>
            <Controller
              rules={{
                required: "Last Name is required",
              }}
              name="lname"
              control={control}
              render={({ field }) => (
                <JopInput {...field} error={errors?.lname?.message} />
              )}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Typography
              sx={{
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Address <span className="ms-2 text-red-600">*</span>
            </Typography>
            <Controller
              name="Address"
              control={control}
              render={({ field }) => (
                <JopInput {...field} error={errors?.Address?.message} />
              )}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Typography
              sx={{
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
              }}
            >
              City <span className="ms-2 text-red-600">*</span>
            </Typography>
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <JopInput {...field} error={errors?.city?.message} />
              )}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Typography
              sx={{
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
              }}
            >
              State/province/region
              <span className="ms-2 text-red-600">*</span>
            </Typography>
            <Controller
              name="region"
              control={control}
              render={({ field }) => (
                <JopInput {...field} error={errors?.region?.message} />
              )}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Typography
              sx={{
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Zip/postal code
              <span className="ms-2 text-red-600">*</span>
            </Typography>
            <Controller
              name="zip"
              control={control}
              render={({ field }) => (
                <JopInput {...field} error={errors?.zip?.message} />
              )}
            />{" "}
          </div>
          {/* <div className="flex flex-col gap-2">
            <Typography
              sx={{
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Country <span className="ms-2 text-red-600">*</span>
            </Typography>
            <Controller
              name="country"
              control={control}
              render={({ field }) => <CountrySelect {...field} />}
            />
          </div> */}
          <div className="flex flex-col gap-2">
            <Typography
              sx={{
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Age <span className="ms-2 text-red-600">*</span>
            </Typography>
            <Controller
              name="age"
              control={control}
              render={({ field }) => (
                <JopInput {...field} error={errors?.age?.message} />
              )}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Typography
              sx={{
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Name of your current school
              <span className="ms-2 text-red-600">*</span>
            </Typography>{" "}
            <Controller
              name="school"
              control={control}
              render={({ field }) => (
                <JopInput {...field} error={errors?.school?.message} />
              )}
            />
          </div>
        </div>

        <div className="flex items-center gap-8 w-full">
          <div className="p-4 border-2 rounded-full">
            <button className="w-full whitespace-nowrap">
              Update personal info
            </button>
          </div>
          <p>
            By clicking "Update personal info", I acknowledge that all
            information submitted above is factually correct.
          </p>
        </div>
      </form>
    </div>
  );
}

export default PersonalInfo;
