export interface IContact {
  avatar: string;
  name: string;
  email: string;
  category: string;
  description: string;
  products: unknown;
  chatId: string;
  lastSeen?: string;
  isArchive: boolean;
  isDisappearing: boolean;
  isMute: boolean;
  messageExpiration?: string;
  muteExpiration?: string;
}

export interface ISendMessage {
  chatId: string;
  message: string;
}

export enum ENotificationTypes {
  Outgoing = "outgoingAPIMessageReceived",
  Incoming = "incomingMessageReceived",
}

export interface ITempMessage {
  idMessage: string;
  message: string;
  type: ENotificationTypes.Outgoing;
}

export interface IReceiveNotification {
  receiptId: number;
  body: {
    typeWebhook: string;
    instanceData: {
      idInstance: number;
      wid: string;
      typeInstance: string;
    };
    timestamp: number;
    idMessage: string;
    senderData: {
      chatId: string;
      chatName: string;
      sender: string;
      senderName: string;
    };
    messageData: {
      typeMessage: string;
      textMessageData: {
        textMessage: string;
      };
    };
  };
}

export interface IOutgoingNotification {
  typeWebhook: ENotificationTypes.Outgoing;
  instanceData: {
    idInstance: number;
    wid: string;
    typeInstance: string;
  };
  timestamp: number;
  idMessage: string;
  senderData: {
    chatId: string;
    chatName: string;
    sender: string;
    senderName: string;
  };
  messageData: {
    typeMessage: string;
    extendedTextMessageData: {
      text: string;
      description: string;
      title: string;
      previewType: string;
      jpegThumbnail: string;
    };
  };
}

export type TChatData = IReceiveNotification["body"];
