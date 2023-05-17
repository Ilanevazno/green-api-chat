import axiosInstance from "config/axios";
import { IContact } from "entities/contact";

export const getContact = async (chatId: string): Promise<IContact> => {
  const { idInstance, apiTokenInstance } = window;

  const response = await axiosInstance.post(
    `waInstance${idInstance}/getContactInfo/${apiTokenInstance}`,
    {
      chatId: `${chatId}@c.us`,
    }
  );

  return response.data;
};
