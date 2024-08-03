const baseURL =
  "https://cors-anywhere.herokuapp.com/https://live.devnimble.com/api/v1";

const urls = {
  contacts: {
    list: "/contacts",
    create: "/contact",
    details: (id: string) => `/contact/${id}`,
    delete: (id: string) => `/contact/${id}`,
  },
  tags: {
    add: (id: string) => `/contacts/${id}/tags`,
  },
};

export { baseURL, urls };
