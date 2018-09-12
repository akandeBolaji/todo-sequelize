
module.exports = (sequelize, DataTypes) => {
  const Todo2 = sequelize.define('Todo2', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Todo2.associate = (models) => {
    // associations can be defined here
    Todo2.hasMany(models.TodoItem, {
      foriegnKey: 'todoId',
    });
  };
  return Todo2;
};