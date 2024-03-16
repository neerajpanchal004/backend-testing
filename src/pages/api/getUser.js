export default function handler(req, res) {
  const { category } = req.query;
  res.status(200).json({ text: category });
}
