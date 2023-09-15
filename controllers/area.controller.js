const asyncHandler = require("express-async-handler");
const Area_Services = require("../services/area.services");

const area_service = new Area_Services();

const createArea = asyncHandler(async (req, res) => {
  try {
   
    const area = req.body;
    const foundArea = await area_service.findById(
      area.id
    ); 
   
    if (foundArea) {
      res.status(400).send("Invalid data");
    } else {
      await area_service.createArea(area);
      res.status(201).send("Registered area succesfuly");
    }
  } catch (error) {
    res.status(500).send("signup error: " + error);
  }
});


const deleteArea = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    const area = await area_service.deleteById(Number(id));
    if (!area) {
      res.status(404).json({ message: "area noy found" });
    } else {
      res
        .status(200)
        .json({ message: "area deleted from database succesfully" });
    }
  } catch (error) {
    res.status(500).send("signup error: " + error);
  }
});

const all = asyncHandler(async (req, res) => {
  try {
    const allAreas = await area_service.findAllAreas();

    if (allAreas.length === 0) {
      res
        .status(404)
        .send({ message: "There are no areas in the database" });
    }
    res.status(200).send(allAreas);
  } catch (error) {
    res.status(500).send("signup error: " + error);
  }
});
module.exports = {
  createArea,
  all,
  deleteArea,
};
