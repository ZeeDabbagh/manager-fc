const sequelize = require("../config/connection");
const { User, Player, Team } = require("../models");

const userData = require("./userData.json");
const playerData = require("./playerData.json");
const teamData = require("./teamData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const teams = await Team.bulkCreate(teamData, {
    returning: true,
  });

  const players = await Player.bulkCreate(playerData, {
    returning: true,
  });
  process.exit(0);
};

seedDatabase();
