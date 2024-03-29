const express = require("express");
const router = express.Router();

const ReceiptController = require("../controllers/ReceiptController");
const authenticate = require("../middleware/authenticate");

router.get("/:userId", authenticate, ReceiptController.show);

router.post("/:userId", authenticate, ReceiptController.store);
router.post("/item/:receiptId", authenticate, ReceiptController.storeItem);

router.patch("/:receiptId", authenticate, ReceiptController.update);
router.patch(
  "/:receiptId/item/:itemId",
  authenticate,
  ReceiptController.updateItem
);

router.delete("/:receiptId", authenticate, ReceiptController.destroy);
router.delete(
  "/:receiptId/item/:itemId",
  authenticate,
  ReceiptController.destroyItem
);

router.get(
  "/:userId/total/:month/:year",
  authenticate,
  ReceiptController.getMonthTotalSum
);

module.exports = router;
