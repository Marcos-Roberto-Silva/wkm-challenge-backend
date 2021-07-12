const createState = (sequelize, DataTypes) => {
  const States = sequelize.define(
    "States",
    {
      name: DataTypes.STRING,
      uf: {
        type: DataTypes.STRING(2),
        allowNull: false,
        primaryKey: true,
      }
    },
    {
      timestamps: false,
    }
  );

  States.associate = (models) => {
    States.hasMany(models.Cities, {
      as: "city",
      foreignKey: "uf",
    });
  };

  return States;
};

module.exports = createState;
