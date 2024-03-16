export default function handler(req, res) {
  const { category } = req.query;
  if (category == "dashbord") {
    res.status(200).json({ message: "Dashboard Category Selected!" });
  }
  if (category == "user") {
    res.status(200).json({ message: "User Category Selected!" });
  }
  res.status(400).json("Invalid Category! Please Select 'dashbord' or 'user'.");
}
