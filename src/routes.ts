import express from "express";
import { paymentController } from "./controllers/paymentController";
import { cardController } from "./controllers/cardController";
import { buyerController } from "./controllers/buyerController";

const router = express.Router();

router.post("/payment/create", paymentController.createPayment);
router.post("/card/create", cardController.createCard);
router.post("/buyer/create", buyerController.createBuyer);

export {
    router,
}