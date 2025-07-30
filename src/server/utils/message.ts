export const createMessage = <T>(message: string, status: number, data?: T) => {
  return { message, status, item: data };
};
