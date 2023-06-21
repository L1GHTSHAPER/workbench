import axios from "axios";

const server = "lsdev.tw1.ru";
const localhost = "localhost";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDhkNDlkMTkwZGUxNzRjYzc0MDM5NGQiLCJpYXQiOjE2ODY5ODEwNzQsImV4cCI6MTY4OTU3MzA3NH0.rtEVD5Eb6a9I6vDxPSlwDeezj-vnDh7FiDpBBmLiS0Q";

export const TicketService = {
  async getAll() {
    const response = await axios
      .get("http://" + server + ":4444/tickets", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
    return response.data;
  },

  async getById(_id) {
    const response = await axios
      .get("http://" + server + `:4444/tickets?id=${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
      //console.log(response.data);
    return response.data[_id];
  },
};
