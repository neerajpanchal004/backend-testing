export default function handler(req, res) {
  const { category } = req.query;
  const r_obj = {
    user: "Hello User",
    dashbord: "Hello Dashboard",
  };
  if (r_obj[category] != undefined) {
    res.status(200).json({ text: r_obj[category] });
  } else {
    res.status(400).json({ text: "Invalid Category id" });
  }
}
