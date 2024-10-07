const { where } = require("sequelize");
const db = require("../models/index.js");
const City = db.City;

class CityRepository {
  async createCity(name) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("Something went wrong in repository layer.");
      throw { error };
    }
  }
  async deleteCity(cityId) {
    try {
      const city = await City.destroy({
        where: {
          id: cityId,
        },
      });
    } catch (error) {
      console.log("Something went wrong in repository layer.");
      throw error;
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      if (!city) {
        throw new Error("City not found.");
      }
      return city;
    } catch (error) {
      console.log("Something went wrong in repository layer.");
      throw error;
    }
  }
  async updateCity({ cityId, data }) {
    try {
      const city = await City.update(data, {
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (error) {
      console.log("Something went wrong in repository layer.");
      throw error;
    }
  }
}

module.exports = CityRepository;
