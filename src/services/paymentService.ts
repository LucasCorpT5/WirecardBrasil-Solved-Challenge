import prisma from "../prisma"

export const paymentService = {
    createPayment: async(amount: number, type: string, cardId?: string) => {
        const payment = await prisma.payment.create({
            data: {
                amount,
                type,
                cardId
            }
        });

        return payment;
    }
}