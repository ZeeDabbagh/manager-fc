const Team = require('./team');
const Player = require('./player');
const User = require('./User');

Player.belongsTo(Team, {
    foreignKey: 'team_id',
    onDelete: 'CASCADE',
  });
  
  Team.hasMany(Player, {
    foreignKey: 'team_id',
    onDelete: 'CASCADE',
  });


module.exports = { User };
module.exports = { Team, Player };
const Player = require("./Players");

module.exports = { Player };

