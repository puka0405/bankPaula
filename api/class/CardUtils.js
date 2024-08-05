class CardUtils {
    static generateCardNumber() {
        let cardNumber = '';
        for (let i = 0; i < 16; i++) {
            cardNumber += Math.floor(Math.random() * 10).toString();
        }
        return cardNumber;
    }

    static generateAccountNumber() {
        let accountNumber = '';
        for (let i = 0; i < 10; i++) {
            accountNumber += Math.floor(Math.random() * 10).toString();
        }
        return accountNumber;
    }

    static generateSecurityCode() {
        let securityCode = '';
        for (let i = 0; i < 3; i++) {
            securityCode += Math.floor(Math.random() * 10).toString();
        }
        return securityCode;
    }

    static generateExpirationDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const expirationYear = year + 4;
        const formattedMonth = month < 10 ? `0${month}` : month;
        return `${formattedMonth}/${expirationYear.toString().slice(-2)}`;
    }
}

export default CardUtils;


import CardUtils from './CardUtils.js';

// En tu archivo ManagerCard.js
class ManagerCard {
    constructor(userId, accountId, cardType, status) {
        this.userId = userId;
        this.accountId = accountId;
        this.cardNumber = CardUtils.generateCardNumber();
        this.cardType = cardType;
        this.expirationDate = CardUtils.generateExpirationDate();
        this.securityCode = CardUtils.generateSecurityCode();
        this.status = status;
    }

    // El resto de los métodos de la clase ManagerCard...
}