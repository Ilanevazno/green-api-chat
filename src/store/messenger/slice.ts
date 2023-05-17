import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IContact } from "entities/contact";
import { api } from "api";
import { RootState } from "store";
import { ENotificationTypes, IReceiveNotification } from "entities/messenger";

interface IMessengerState {
  selectedChat?: IContact;
  isSubscribedToNotifications: boolean;
  selectedChatData: Record<string, Record<string, any>>;
}

const initialState: IMessengerState = {
  isSubscribedToNotifications: false,
  selectedChat: undefined,
  selectedChatData: {},
};

export const sendMessage = createAsyncThunk(
  "SEND_MESSAGE",
  async (message: string, { getState }) => {
    try {
      const {
        messenger: { selectedChat },
      } = <RootState>getState();

      if (!selectedChat) {
        return;
      }

      const response = await api.messenger.sendMessage({
        message,
        chatId: selectedChat.chatId,
      });

      return {
        id: response.idMessage,
        message,
      };
    } catch {
      throw new Error("Error when sending messages");
    }
  }
);

export const subscribeToNotifications = createAsyncThunk(
  "SUBSCRIBE_TO_NOTIFICATIONS",
  async (_, { dispatch }) => {
    try {
      const notification = await api.messenger.receiveNotification();

      if (notification) {
        await api.messenger.deleteNotification(notification.receiptId);
      }

      dispatch(subscribeToNotifications());

      return notification;
    } catch {
      throw new Error("error in subscribing notifications");
    }
  }
);

const slice = createSlice({
  name: "messenger",
  initialState,
  reducers: {
    selectChat: (state, action: PayloadAction<IContact>) => {
      state.selectedChat = action.payload;
    },
  },
  extraReducers(builder): void {
    builder.addCase(subscribeToNotifications.pending, (state) => {
      state.isSubscribedToNotifications = true;
    });
    builder.addCase(sendMessage.fulfilled, (state, action) => {
      if (action.payload && state.selectedChat) {
        const { selectedChat } = state;
        const {
          payload: { message, id },
        } = action;

        const currentChat = state.selectedChatData[selectedChat.chatId];

        state.selectedChatData[selectedChat.chatId] = {
          ...currentChat,
          [id]: {
            idMessage: id,
            message,
            type: ENotificationTypes.Outgoing,
          },
        } || {
          [id]: {
            idMessage: id,
            message,
            type: ENotificationTypes.Outgoing,
          },
        };
      }
    });
    builder.addCase(
      subscribeToNotifications.fulfilled,
      (state, action: PayloadAction<IReceiveNotification>) => {
        if (!action.payload?.body) {
          return;
        }

        const data = action.payload.body;

        if (
          data.typeWebhook === ENotificationTypes.Incoming ||
          data.typeWebhook === ENotificationTypes.Outgoing
        ) {
          const chatId = data.senderData.chatId;
          const currentChat = state.selectedChatData[chatId];

          state.selectedChatData[chatId] = currentChat
            ? {
                ...currentChat,
                [data.idMessage]: data,
              }
            : { [data.idMessage]: data };
        }
      }
    );
  },
});

export const { selectChat } = slice.actions;

export default slice.reducer;
