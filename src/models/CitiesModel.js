const createCities = (sequelize, DataTypes) => {
  const Cities = sequelize.define("Cities", {
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  Cities.associate = (models) => {
    Cities.belongsTo(models.States, { as: "state", foreignKey: "stateId" });
  };

  return Cities;
};

module.exports = createCities;

