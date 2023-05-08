const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");
const Team = require("./team");

class Player extends Model {}

Player.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.ENUM(
        "GK",
        "RB",
        "LB",
        "CB",
        "DCM",
        "CF",
        "RW",
        "LW",
        "CM",
        "CAM"
      ),
      allowNull: false,
    },
    goals: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    jerseyNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weakFoot: {
      type: DataTypes.ENUM("Left", "Right"),
      allowNull: false,
    },
    strongFoot: {
      type: DataTypes.ENUM("Left", "Right"),
      allowNull: false,
    },
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "team",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "player",
  }
);

//Player.belongsTo(Team, { foreignKey: "teamId" });

module.exports = Player;
