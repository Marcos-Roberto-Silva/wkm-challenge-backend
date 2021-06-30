const createState = (sequelize, DataTypes) => {
  const States = sequelize.define(
    "States",
    {
      name: DataTypes.STRING,
      uf: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  States.associate = (models) => {
    States.hasMany(models.Cities, {
      as: "cities",
      foreignKey: "stateId",
    });
  };

  return States;
};

module.exports = createState;
