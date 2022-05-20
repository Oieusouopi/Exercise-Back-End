module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER
  },
  {
    timestamps:false,
    tableName: 'Addresses',
    underscored: true,
  })

  Address.associate = (models) => {
    Address.hasOne(models.Employee,
      { foreignKey: 'adressId', as: 'employees' });
  };

  return Address;
};
