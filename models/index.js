const Team = require("./team");
const Player = require("./Players");
const User = require("./User");

Player.belongsTo(Team, {
  foreignKey: "team_id",
  onDelete: "CASCADE",
});

Team.hasMany(Player, {
  foreignKey: "team_id",
  onDelete: "CASCADE",
});

Team.belongsTo(User, {
  foreignKey: "coach_id",
  onDelete: "CASCADE",
});

User.hasOne(Team, {
  foreignKey: "coach_id",
  onDelete: "CASCADE",
});

module.exports = { Team, Player, User };
