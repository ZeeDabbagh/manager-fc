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

module.exports = { Team, Player, User };

