/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Wo_Einterested', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Wo_Einterested'
  });
};
