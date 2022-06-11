const Meme = (db, DataTypes) => {
  const Model = db.define(
    'meme',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      width: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      height: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      box_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    { underscored: true }
  );

  return Model;
};

module.exports = Meme;
