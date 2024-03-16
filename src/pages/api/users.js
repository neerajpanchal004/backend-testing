export default async function handler(req, res) {
  if (req.query.category == "dashbord") {
    res.status(200).json({ message: "Dashboard Category Selected!" });
  } else if (req.query.category == "user") {
    res.status(200).json({ message: "User Category Selected!" });
  } else {
    res
      .status(400)
      .json("Invalid Category! Please Select 'dashbord' or 'user'.");
  }
  res.status(403).send({ error: "Something went wrong!" });
}
