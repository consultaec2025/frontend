export const bookingsService = () => {
  return {
    getBookings: async () => {
      return await fetch(`/api/bookings`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    },
  };
};
