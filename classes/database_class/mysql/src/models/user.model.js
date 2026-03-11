import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";
import bcrypt from "bcryptjs";

class User extends Model {
    async comparePassword(plain) {
        return await bcrypt.compare(plain, this.password);
    }
    toJSON(){
        const values = {...this.get()};
        delete values.password;
        delete values.resetToken;
        delete values.verifyToken;
        return values;
    }
}

User.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false, unique: true},
    password: {type: DataTypes.STRING, allowNull: false},
    isActive: {type: DataTypes.BOOLEAN, defaultValue: true},
    isVerified: {type: DataTypes.BOOLEAN, defaultValue: true},
    role: {type: DataTypes.ENUM('user', 'admin'), defaultValue: 'user'},
    resetToken: {type: DataTypes.STRING, allowNull: true},
    lastLogin: {type: DataTypes.DATE, allowNull: true}
    }, {
        timestamps: true,
        sequelize,
        modelName: 'User',
        tableName: 'users',
        hooks: {

            // Before creating password, check if the password is there, hash it
            beforeCreate: async (user) => {
                if (user.password) {
                    const salt = await bcrypt.genSalt(10);
                    user.password = await bcrypt.hash(user.password, salt);
                }
            },

            // If password is changed, then hash it
            beforeUpdate: async (user) => {
                if (user.changed("password")) {
                    const salt = await bcrypt.genSalt(10);
                    user.password = await bcrypt.hash(user.password, salt)
                }
            },
        }
    }
);