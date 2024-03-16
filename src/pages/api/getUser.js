export default function handler(req, res) {
  const { category } = req.query;
  if (category == "user") {
    res.status(200).json({ text: "user selected" });
  }
  if (category == "dashboard") {
    res.status(200).json({ text: "dashboard selected" });
  }
  res.status(200).json({ text: category });
}
