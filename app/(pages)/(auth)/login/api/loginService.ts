export const loginService = () => {
  return {
    login: async (email: string, password: string) => {
      return await fetch(`/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
    },
  };
};
