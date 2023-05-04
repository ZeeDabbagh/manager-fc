const Team = require("./team");
const Player = require("./Players");
const User = require("./User");

Player.belongsTo(Team, {
  foreignKey: "teamId",
  onDelete: "CASCADE",
});

Team.hasMany(Player, {
  foreignKey: "teamId",
  onDelete: "CASCADE",
});

Team.hasOne(User, {
  foreignKey: "coachId",
  onDelete: "CASCADE",
});

User.belongsTo(Team, {
  foreignKey: "coachId",
  onDelete: "CASCADE",
});

module.exports = { Team, Player, User };
