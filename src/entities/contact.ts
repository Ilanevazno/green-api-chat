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
