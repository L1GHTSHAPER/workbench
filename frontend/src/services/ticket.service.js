import axios from "axios";

const server = "37.220.85.199";
const localhost = "localhost";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDY0MDQyNWJmYzhhOWVjNjEwOTFmOTIiLCJpYXQiOjE2ODQyNzYyNjEsImV4cCI6MTY4Njg2ODI2MX0.wRuL_E1tfgkIAr1KzwFSCnLRbBjd9nbxYGS-xJIbYRM";

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
