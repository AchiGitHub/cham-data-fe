import Server from "./Server";

const getAllCards = async () => {
  try {
    return await Server.get("/all");
  } catch (error) {
    console.log("Err", error);
  }
};

const createCard = async (values) => {
  try {
    const resp = await Server.post("/create", values);
    return resp.data;
  } catch (error) {
    console.log("Create Error", error);
  }
}

const deleteCard = async (cardId) => {
  try {
    const resp = await Server.delete(`/delete/${cardId}`);
    return resp.data;
  } catch (error) {
    console.log("Create Error", error);
  }
}

export { getAllCards, createCard, deleteCard };
