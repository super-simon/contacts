const baseURL =
  "https://cors-anywhere.herokuapp.com/https://live.devnimble.com/api/v1";

const urls = {
  contacts: {
    list: "/contacts",
    create: "/contact",
    details: (id: string | number) => `/contact/${id}`,
    delete: (id: string | number) => `/contact/${id}`,
  },
};

export { baseURL, urls };
