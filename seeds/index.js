const sequelize = require("../config/connection");
const { User, Player } = require("../models");

const userData = require("./userData.json");
const playerData = require("./playerData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // await Player.bulkCreate(playerData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  process.exit(0);
};

seedDatabase();
