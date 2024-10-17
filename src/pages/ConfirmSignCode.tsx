import { useNavigate } from "react-router-dom";

import { OTPInput } from "../components/resetPassword/OTPInput";
import { useConfirmSignupCode } from "../app/utils/hooks/useAuth";
import { useLanguageSelector } from "../app/slices/languageSlice";

const ConfirmSignCode = () => {
  const { translations } = useLanguageSelector(
    (store) => store.languageReducer
  );
  const navigator = useNavigate();
  const {
    isSuccess: isSuccessPassword,
    mutate: mutateConfrim,
    isError: isErrorConfrim,
    error: errorConfrim,
    isPending: isPendingConfrim,
  } = useConfirmSignupCode();
  if (isSuccessPassword) {
    navigator("/");
  }
  return (
    <div className="w-11/12 m-auto flex flex-col items-center justify-center py-28">
      <p className="text-center text-xl">{translations.checkEmail} </p>
      <OTPInput
        mutate={mutateConfrim}
        isPending={isPendingConfrim}
        isError={isErrorConfrim}
        error={errorConfrim}
      />
    </div>
  );
};

export default ConfirmSignCode;
