import { useFormik } from "formik";
import { useAppDispatch } from "store/hooks";
import { findNewContact } from "store/messenger/slice";

export const useAddContact = () => {
  const dispatch = useAppDispatch();

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      phone: "",
    },
    onSubmit: (result) => {
      dispatch(findNewContact(result.phone));
    },
  });

  return {
    handleChange,
    handleSubmit,
    values,
  };
};
