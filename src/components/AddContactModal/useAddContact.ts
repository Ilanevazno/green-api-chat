import { useFormik } from "formik";
import { findNewContact } from "store/contacts/slice";
import { useAppDispatch } from "store/hooks";

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
