module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    adressId: { type: DataTypes.INTEGER, foreignKey: true }, 
  },
  {
    timestamps: false,
    tableName: 'Employees',
    underscored: true
  })

  Employee.associate = (models) => {
    Employee.belongsTo(models.Address,
    { foreignKey: 'adressId', as: 'addresses' });
  };

  return Employee;
};