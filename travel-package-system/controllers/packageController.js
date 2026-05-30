const packages = require("../data/packages");


// Task 3 - Add Package
const addPackage = (req, res) => {

  const newPackage = {
    id: packages.length + 1,
    packageName: req.body.packageName,
    location: req.body.location,
    days: req.body.days,
    price: req.body.price
  };

  packages.push(newPackage);

  res.status(201).json({
    message: "Package added successfully",
    data: newPackage
  });
};


// Task 4 - Get All Packages
const getAllPackages = (req, res) => {
  res.json(packages);
};


// Task 5 - Get Package By ID
const getPackageById = (req, res) => {

  const id = parseInt(req.params.id);

  const foundPackage = packages.find(pkg => pkg.id === id);

  if (!foundPackage) {
    return res.status(404).json({
      message: "Package not found"
    });
  }

  res.json(foundPackage);
};


// Task 6 - Update Package
const updatePackage = (req, res) => {

  const id = parseInt(req.params.id);

  const packageIndex = packages.findIndex(pkg => pkg.id === id);

  if (packageIndex === -1) {
    return res.status(404).json({
      message: "Package not found"
    });
  }

  packages[packageIndex] = {
    ...packages[packageIndex],
    ...req.body
  };

  res.json({
    message: "Package updated successfully",
    data: packages[packageIndex]
  });
};


// Task 7 - Delete Package
const deletePackage = (req, res) => {

  const id = parseInt(req.params.id);

  const packageIndex = packages.findIndex(pkg => pkg.id === id);

  if (packageIndex === -1) {
    return res.status(404).json({
      message: "Package not found"
    });
  }

  const deletedPackage = packages.splice(packageIndex, 1);

  res.json({
    message: "Package deleted successfully",
    data: deletedPackage
  });
};


// Bonus Task - Search by Location
const searchByLocation = (req, res) => {

  const location = req.query.location;

  const result = packages.filter(pkg =>
    pkg.location.toLowerCase() === location.toLowerCase()
  );

  res.json(result);
};


module.exports = {
  addPackage,
  getAllPackages,
  getPackageById,
  updatePackage,
  deletePackage,
  searchByLocation
};