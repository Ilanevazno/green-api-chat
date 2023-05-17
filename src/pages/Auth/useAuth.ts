import { useFormik } from "formik";
import { setUserData } from "store/auth/slice";
import { useAppDispatch } from "store/hooks";

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      idInstance: "",
      apiTokenInstance: "",
    },
    onSubmit: () => {
      dispatch(setUserData(values));
    },
  });

  return {
    handleChange,
    handleSubmit,
    values,
  };
};
