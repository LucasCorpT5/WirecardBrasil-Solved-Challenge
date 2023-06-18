import request from "supertest";
import app from "../server";

describe("Create payment", () => {
    it("should be able to create payment", async() => {
        const response = await request(app).post("/payment/create").send({
            amount: 10.20,
            type: "cartao",
            cardId: "851627d7-60f4-4bf8-993a-1841fbe479d4"
        });
        
        expect(response.statusCode).toBe(201);
        console.log(response.body);
    })
})