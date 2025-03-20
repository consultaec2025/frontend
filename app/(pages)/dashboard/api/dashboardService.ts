export const dashboardService = () => {
  return {
    getDashboard: async () => {
      return await fetch(`/api/dashboard`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    },
  };
};
