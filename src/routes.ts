import express from "express";
import { paymentController } from "./controllers/paymentController";
import { cardController } from "./controllers/cardController";

const router = express.Router();

router.post("/payment/create", paymentController.createPayment);
router.post("/card/create", cardController.createCard);

export {
    router,
}