const express = require("express");

const router = express.Router();

const {
  addPackage,
  getAllPackages,
  getPackageById,
  updatePackage,
  deletePackage,
  searchByLocation
} = require("../controllers/packageController");

router.post("/", addPackage);

router.get("/", getAllPackages);

router.get("/search", searchByLocation);

router.get("/:id", getPackageById);

router.put("/:id", updatePackage);

router.delete("/:id", deletePackage);

module.exports = router;