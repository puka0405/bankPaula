
import LoanModel from "../models/LoanModel.js";
import PayModel from "../models/PayModel.js";

class LoanManager {
    constructor(userId, loanType, amount, interestRate, numberPayments, startDate, endDate, status) {

        this.userId = userId,
            this.loanType = loanType,
            this.amount = amount,
            this.interestRate = interestRate,
            this.numberPayments = numberPayments.
                this.startDate = startDate,
            this.endDate = endDate,
            this.status = status
    }


    async createLoan() {
        try {
            const Loan = await LoanModel.create({
                userId: this.userId,
                loanType: this.loanType,
                amount: this.amount,
                interestRate: this.interestRate,
                numberPayments: this.numberPayments,
                startDate: this.startDat,
                endDate: this.endDate,
                status: this.status
            });
            return Loan;
        } catch (error) {
            throw new Error("No se pudo crear el prestamo")
        }
    }
    async PayLoan(LoanId, mount, numberPayment) {
        try {
            const payment = await PaymentModel.create({
                UserId, loanId, amount, numberPayment
            });
            return payment;
        } catch (error) {
            throw new Error("Error al intentar pagar")
        }
    }


    async getLoan(id) {
        try {
            const loan = await LoanModel.findById(id);
            return loan;
        } catch (error) {
            throw new Error("Hubo un error al obtener el préstamo!")
        }
    }

    async getLoans(id) {
        try {
            const loans = await LoanModel.findById(id);
            return loans;
        } catch (error) {
            throw new Error("Hubo un error al obtener los préstamos!")
        }
    }

    async validateUser() { }

}

export default LoanManager;