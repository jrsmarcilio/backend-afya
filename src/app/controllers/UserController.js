class UserController {
  async index(req, res) {
    return res.json({ routes: "index" });
  }
  async store(req, res) {
    const { name } = req.body;
    return res.json({ name });
  }
  // index(),
  // update()
}

export default new UserController();
