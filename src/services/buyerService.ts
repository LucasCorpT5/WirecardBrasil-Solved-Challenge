import prisma from "../prisma"

export const buyerService = {
    createBuyer: async(name: string, email: string, cpf: string) => {
        const buyer = await prisma.buyer.create({
            data: {
                name,
                email,
                cpf
            }
        });

        return buyer;
    }
}