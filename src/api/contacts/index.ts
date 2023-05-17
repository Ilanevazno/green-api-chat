import axiosInstance from "config/axios";
import { IContact, IReceiveNotification, ISendMessage } from "entities/contact";

window.idInstance = "1101820955";
window.apiTokenInstance = "cc7850ea1dd64c5ba26ce33e4ae5a2a789f512a1fd334561bf";

export const getContact = async (chatId: string): Promise<IContact> => {
  const { idInstance, apiTokenInstance } = window;

  const response = await axiosInstance.post(
    `https://api.green-api.com/waInstance${idInstance}/getContactInfo/${apiTokenInstance}`,
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
    `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
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
    `https://api.green-api.com/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`
  );

  return response.data;
};

export const deleteNotification = async (
  id: number
): Promise<{ result: boolean }> => {
  const { idInstance, apiTokenInstance } = window;

  const response = await axiosInstance.delete(
    `https://api.green-api.com/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${id}`
  );

  return response.data;
};
