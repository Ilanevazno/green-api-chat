import axiosInstance from "config/axios";
import { IContact, IReceiveNotification, ISendMessage } from "entities/contact";

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

export const sendMessage = async ({
  chatId,
  message,
}: ISendMessage): Promise<{ idMessage: string }> => {
  const { idInstance, apiTokenInstance } = window;

  const response = await axiosInstance.post(
    `waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
    {
      chatId,
      message,
    }
  );

  return response.data;
};

export const receiveNotification = async (): Promise<IReceiveNotification> => {
  const { idInstance, apiTokenInstance } = window;

  const response = await axiosInstance.get(
    `waInstance${idInstance}/receiveNotification/${apiTokenInstance}`
  );

  return response.data;
};

export const deleteNotification = async (
  id: number
): Promise<{ result: boolean }> => {
  const { idInstance, apiTokenInstance } = window;

  const response = await axiosInstance.delete(
    `waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${id}`
  );

  return response.data;
};
