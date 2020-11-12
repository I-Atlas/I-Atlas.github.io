import axios from "axios";
class CardsData {
  constructor() {
    this.url = "http://localhost:5000/api/cards";
  }

  getData = async() => {
    try {
      const cardsData = await axios.get(this.url);
      console.log(cardsData.data);
      return cardsData.data;
    } catch (error) {
      console.log(error);
    }
  };
}

export default new CardsData();
