export const createDateWithSpecificHour = (hour: string | Date) => {
  if (typeof hour == 'string') {
    const [hours, minutes] = hour.split(':');
    const data = new Date();
    data.setHours(parseInt(hours), parseInt(minutes));
    return data;
  }
};
