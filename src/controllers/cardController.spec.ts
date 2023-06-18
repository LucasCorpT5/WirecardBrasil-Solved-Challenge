import request from "supertest"
import app from "../server"

describe("Create card", () => {
    it("should be able to create card", async() => {
        const response = await request(app).post("/card/create").send({
            cardHolder: "Lucas araujo",
            cardNumber: "4556994530252703",
            cardExpiration: "21/30",
            cvv: 109
        });

        expect(response.statusCode).toBe(201);
        console.log(response.body);
    })
})