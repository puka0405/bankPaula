import UserModel from "../models/UserModel.js";
import ManagerAccount from "./AccountClass.js";
import ManagerCard from "./CardClass.js";

class ManagerUser {
    constructor(email, phone, name, lastName, isInSession, isAdmin, password) {
        this.email = email;
        this.phone = phone;
        this.name = name;
        this.lastName = lastName;
        this.isInSession = isInSession;
        this.isAdmin = isAdmin;
        this.password = password;
    }

    async register() {
        try {
            const user = await UserModel.create({
                email: this.email,
                phone: this.phone,
                name: this.name,
                lastName: this.lastName,
                isInSession: this.isInSession,
                isAdmin: this.isAdmin,
                password: this.password,
            });
            const MA = new ManagerAccount(user._id, 12345, "Ahorro", 10000);
            const currentAccount = await MA.createAccount();
            const MC = new ManagerCard(user._id, currentAccount._id, "16 digitos al azar", "debito",
                "De la fecha actual sumar 3 años", "Generar codigo de 3 cifras", "active");
            await MC.createCard();
            return user;
        } catch (error) {
            throw new Error(`Error al registar usuario: ${error}`);
        }
    }
    async Login(email, password) {
        try {
            const user = await UserModel.findOne({ email: email })
            if (!user) {
                throw new Error("Usuario no registrado!")
            }
            if (user.password !== password) {
                throw new Error("Contraseña incorrecta!")
            }
            return "Succed"
        } catch (error) {
            throw new Error(`Error al iniciar sesion: ${error}`);
        }
    }

    async getuserInfo(id) {
        try {
            const user = await UserModel.findById(id);
            return user;
        } catch (error) {
            throw new Error(`Error al obtener la información del usuario: ${error}`);

        }
    }

    async updateInfo(email) {
        try {
            if (!email) {
                throw new Error("Correo Invalido");

            }
            await UserModel.findByIdAndUpdate(id, {
                $set: { email: email }
            })
            return "Correo Actualizado"
        } catch (error) {
            throw new Error(`Error al actualizar el correo: ${error}`);

        }
    }
    async updaphone(phone) {
        try {
            if (!phone) {
                throw new Error("Telefono Invalido");

            }
            await UserModel.findByIdAndUpdate(id, {
                $set: { phone: phone }
            })
            return "Telefono Actualizado"
        } catch (error) {
            throw new Error(`Error al actualizar el telefono: ${error}`);

        }
    }
    async updatePassword(password) {
        try {
            if (!password) {
                throw new Error("Contraseña Invalida");

            }
            await UserModel.findByIdAndUpdate(id, {
                $set: { password: password }
            })
            return "Contraseña Actualizada"
        } catch (error) {
            throw new Error(`Error al actualizar la contraseña: ${error}`);

        }
    }

}

export default ManagerUser;