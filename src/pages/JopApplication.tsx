import {
  Box,
  Button,
  CircularProgress,
  MenuItem,
  // RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import JopInput from "../components/jop/JopInput";
// import JopRadioInput from "../components/jop/JopRadioInput";
import JopTextArea from "../components/jop/JopTextArea";
// import JopCheckInput from "../components/jop/JopCheckInput";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { useJopApplicationMutation } from "../app/services/mutation";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useLanguageSelector } from "../app/slices/languageSlice";
export interface FormValues {
  resume: File;
  email: string;
  pronouns: string;
  full_name: string;
  phone?: string;
  current_location?: string;
  current_company?: string;
  linkedin_url?: string;
  github_url?: string;
  portfolio_url?: string;
  other_website?: string;
  interest_note?: string;
  teaching_sample?: string;
  teaching_experience?: string;
  additional_information?: string;
  career_id: string | undefined;
}
export const JopApplication = () => {
  const { translations } = useLanguageSelector(
    (store) => store.languageReducer
  );
  const { id } = useParams<{ id: string }>();
  const { mutate, data, isPending, error } = useJopApplicationMutation();
  console.log(data);

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<FormValues>();
  const [resumeName, setResumeName] = useState<File | null>(null);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (resumeName) {
      mutate(
        { ...data, career_id: id, resume: resumeName },
        {
          onSuccess: () => {
            toast.success(` Apply job is success`);
          },
          onError: () => {
            toast.error(error?.response?.data.message);
            console.log("error", error);
          },
        }
      );
    }
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeName(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className="w-10/12 lg:w-3/5 mx-auto gap-10 items-start grid grid-cols-1 md:grid-cols-3 py-10">
        <div className="flex flex-col gap-3 lg:col-span-2">
          <Typography
            sx={{
              fontFamily: "typography",
              fontSize: "36px",
              fontWeight: "500",
              color: "dark.main",
              lineHeight: "57.6px",
            }}
          >
            {translations.jobApp}{" "}
          </Typography>
          <Typography
            sx={{ fontSize: "16px", fontWeight: "400", color: "gray.dark" }}
          >
            {translations.Americas}
          </Typography>

          <div className="">{translations.Content}</div>
        </div>
      </div>
      <Box sx={{ bgcolor: "background.paper" }}>
        <form
          className="w-10/12 lg:w-3/5 mx-auto gap-10 items-start grid grid-cols-1 md:grid-cols-4 py-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="col-span-3">
            <div className="flex flex-col gap-12">
              <Typography
                sx={{
                  fontFamily: "Typography",
                  fontSize: "22px",
                  fontWeight: "500",
                }}
              >
                {translations.submitApp}
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-start gap-y-8 gap-x-4">
                <Typography
                  sx={{
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {translations.Resume}{" "}
                  <span className="ms-2 text-red-600">*</span>
                </Typography>
                <div className="col-span-2">
                  <label
                    htmlFor="avatar-upload"
                    role="button"
                    className="flex gap-6 p-4 col-span-2 max-w-64 items-start bg-gray-200 justify-center border rounded-sm border-gray-300"
                  >
                    <img src="/images/ICONS/ATTACH.svg" alt="Attach Icon" />
                    <Typography sx={{ color: "black.main" }}>
                      {(resumeName?.name && resumeName?.name) ||
                        "ATTACH RESUME/CV"}
                    </Typography>
                  </label>
                  <p className="text-red-500">{errors.resume?.message}</p>
                  <input
                    type="file"
                    id="avatar-upload"
                    {...register("resume", {
                      required: "Resume is required",
                    })}
                    className="hidden"
                    onChange={(e) => handleResumeChange(e)}
                  />
                </div>

                <Typography
                  sx={{
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {translations.Fullname}{" "}
                  <span className="ms-2 text-red-600">*</span>
                </Typography>
                <Controller
                  rules={{
                    required: "Full Name is required",
                  }}
                  name="full_name"
                  control={control}
                  render={({ field }) => (
                    <JopInput {...field} error={errors?.full_name?.message} />
                  )}
                />

                <Typography
                  sx={{
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {translations.Pronouns}
                </Typography>
                <Controller
                  name="pronouns"
                  control={control}
                  defaultValue="Male"
                  rules={{ required: "Gender is required" }}
                  render={({ field }) => (
                    <Select
                      sx={{
                        bgcolor: "gray.light",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "gray",
                          },

                          "&.Mui-focused fieldset": {
                            borderColor: "black.dark",
                          },
                          "& input": {
                            color: "black",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "black",
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "green",
                        },
                      }}
                      className="col-span-2 bg-white"
                      {...field}
                      label="Gender"
                    >
                      <MenuItem value="Male">{translations.Male}</MenuItem>
                      <MenuItem value="Female">{translations.Female}</MenuItem>
                    </Select>
                  )}
                />

                <Typography
                  sx={{
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {translations.Email}{" "}
                  <span className="ms-2 text-red-600">*</span>
                </Typography>
                <Controller
                  rules={{
                    required: "Email is required",
                  }}
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <JopInput {...field} error={errors?.full_name?.message} />
                  )}
                />

                <Typography
                  sx={{
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {translations.Phone}{" "}
                </Typography>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => <JopInput {...field} />}
                />

                <Typography
                  sx={{
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {translations.Currentlocation}{" "}
                </Typography>
                <Controller
                  name="current_location"
                  control={control}
                  render={({ field }) => <JopInput {...field} />}
                />
                <Typography
                  sx={{
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {translations.Currentcompany}{" "}
                </Typography>
                <Controller
                  name="current_company"
                  control={control}
                  render={({ field }) => <JopInput {...field} />}
                />
              </div>
              <Typography
                sx={{
                  fontFamily: "Typography",
                  fontSize: "22px",
                  fontWeight: "500",
                }}
              >
                {translations.Links}
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-start gap-y-8">
                <Typography
                  sx={{
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {translations.LinkedInURL}{" "}
                </Typography>
                <Controller
                  name="linkedin_url"
                  control={control}
                  render={({ field }) => <JopInput {...field} />}
                />
                <Typography
                  sx={{
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {translations.GitHubURL}{" "}
                </Typography>
                <Controller
                  name="github_url"
                  control={control}
                  render={({ field }) => <JopInput {...field} />}
                />

                <Typography
                  sx={{
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {translations.PortfolioURL}{" "}
                </Typography>
                <Controller
                  name="portfolio_url"
                  control={control}
                  render={({ field }) => <JopInput {...field} />}
                />
                <Typography
                  sx={{
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {translations.Otherwebsite}{" "}
                </Typography>
                <Controller
                  name="other_website"
                  control={control}
                  render={({ field }) => <JopInput {...field} />}
                />
              </div>
              <Typography
                sx={{
                  fontFamily: "Typography",
                  fontSize: "22px",
                  fontWeight: "500",
                }}
              >
                {translations.WhyDelveng}
              </Typography>
              <div className="grid grid-cols-1  items-center justify-start gap-y-8">
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  {translations.LeaveAnote}
                  <span className="ms-2 text-red-600">*</span>
                </Typography>
                <Controller
                  name="interest_note"
                  control={control}
                  render={({ field }) => <JopTextArea {...field} />}
                />
              </div>

              <Typography
                sx={{
                  fontFamily: "Typography",
                  fontSize: "22px",
                  fontWeight: "500",
                }}
              >
                {translations.Teachingsample}
              </Typography>
              <div className="grid grid-cols-1  items-center justify-start gap-y-8">
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  {translations.TeachingsampleDetails}
                </Typography>
                <Controller
                  name="teaching_sample"
                  control={control}
                  render={({ field }) => <JopInput {...field} />}
                />
              </div>

              <Typography
                sx={{
                  fontFamily: "Typography",
                  fontSize: "22px",
                  fontWeight: "500",
                }}
              >
                {translations.Teachingexperience}{" "}
              </Typography>
              <div className="grid grid-cols-1  items-center justify-start gap-y-8">
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  {translations.TeachingexperienceDetails}{" "}
                </Typography>
                <Controller
                  name="teaching_experience"
                  control={control}
                  render={({ field }) => <JopTextArea {...field} />}
                />
              </div>
              <div className="grid grid-cols-1  items-center justify-start gap-y-8">
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  {translations.Additioninformation}
                </Typography>
                <Controller
                  name="additional_information"
                  control={control}
                  render={({ field }) => <JopTextArea {...field} />}
                />
              </div>
            </div>
            {/* <div className="border-t border-gray-300 mt-10 pt-10 flex flex-col gap-4">
              <Typography
                sx={{
                  fontFamily: "Typography",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                Demographic Survey for Brilliant.org
              </Typography>
              <Typography>
                We invite you to complete this optional survey to help us
                evaluate our diversity and inclusion efforts. Submission of the
                information on this form is strictly voluntary and refusal to
                provide it will not subject you to any adverse treatment or
                affect your job application. Information obtained will be kept
                separate from your name or job application. This information
                will be kept secure and confidential and will be used solely to
                evaluate our diversity and inclusion efforts.
              </Typography>
              <Typography sx={{ fontWeight: "400", fontSize: "16px" }}>
                What is your age range?
              </Typography>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <JopRadioInput value="1" label="17 or younger" />
                <JopRadioInput value="2" label="18-20" />
                <JopRadioInput value="3" label="30-39" />
                <JopRadioInput value="4" label="40-49" />
                <JopRadioInput value="5" label="50-59" />
                <JopRadioInput value="6" label="60 or older" />
              </RadioGroup>
            </div> */}

            {/* <div className="border-t border-gray-300 mt-10 pt-10 flex flex-col gap-4">
              <Typography
                sx={{
                  fontFamily: "Typography",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                I identify my ethnicity as
              </Typography>
              <Typography>Select all that apply</Typography>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                className="flex flex-col gap-3"
              >
                <JopCheckInput value="1" label="White / Caucasian" />
                <JopCheckInput
                  value="2"
                  label="Hispanic, Latino, or Spanish origin"
                />
                <JopCheckInput value="3" label="Black or African American" />
                <JopCheckInput
                  value="4"
                  label="Native Hawaiian or other Pacific Islander"
                />
              </RadioGroup>
            </div> */}
            <div className="flex justify-center my-20">
              {isPending ? (
                <Button
                  sx={{
                    bgcolor: "primary.main",
                    "&:hover": { bgcolor: "black.dark" },
                    color: "background.default",
                    fontWeight: "600",
                    px: "30px",
                    py: "15px",
                    borderRadius: "5px",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  {translations.loading}
                  <CircularProgress
                    size="1rem"
                    variant="indeterminate"
                    sx={{ color: "background.default" }}
                  />
                </Button>
              ) : (
                <Button
                  type="submit"
                  sx={{
                    bgcolor: "primary.main",
                    "&:hover": { bgcolor: "black.dark" },
                    color: "background.default",
                    fontWeight: "600",
                    px: "30px",
                    py: "15px",
                    borderRadius: "5px",
                  }}
                >
                  {translations.Submitapplication}{" "}
                </Button>
              )}
            </div>
          </div>
        </form>
      </Box>
    </div>
  );
};
