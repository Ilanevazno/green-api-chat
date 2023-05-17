export const getMessageText = (data: any): string | undefined => {
  return (
    data?.message ||
    data?.messageData?.extendedTextMessageData?.text ||
    data?.messageData?.textMessageData?.textMessage
  );
};
