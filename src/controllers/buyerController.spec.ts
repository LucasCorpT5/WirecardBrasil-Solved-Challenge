import request from "supertest"
import app from "../server"

describe("Create buyer", () => {
    it("should be able to create buyer", async() => {
        const response = await request(app).post("/buyer/create").send({
            name: "Lucas araujo de oliveira",
            email: "lucas@email.com",
            CPF: "049.913.460-53"
        });

        expect(response.statusCode).toBe(201);
        console.log(response.body)
    })
})