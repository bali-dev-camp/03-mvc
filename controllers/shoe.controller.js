const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class ShoeController {
  static async listPage(req, res) {
    const shoes = await prisma.shoe.findMany({
      where: {
        categoryId: req.query.category ? Number(req.query.category) : undefined,
      },
    });
    const categories = await prisma.category.findMany();
    res.render("pages/shoe/list", { shoes, categories });
  }

  static async filter(req, res) {
    res.redirect(`/shoe?category=${req.body.category}`);
  }

  static async detailPage(req, res) {
    const result = await prisma.shoe.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.render("pages/shoe/detail", { shoe: result });
  }

  static async createPage(req, res) {
    const categories = await prisma.category.findMany();
    res.render("pages/shoe/create", { categories });
  }

  static async store(req, res) {
    await prisma.shoe.create({
      data: {
        name: req.body.name,
        merk: req.body.merk,
        qty: Number(req.body.qty),
        available: req.body.available === "true" ? true : false,
        price: Number(req.body.price),
        img: req.file.filename,
        desc: req.body.description,
        categoryId: Number(req.body.category),
      },
    });
    1;

    res.redirect("/shoe");
  }

  static async editPage(req, res) {
    const shoe = await prisma.shoe.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    const categories = await prisma.category.findMany();

    res.render("pages/shoe/edit", { shoe, categories });
  }

  static async update(req, res) {
    await prisma.shoe.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        name: req.body.name,
        merk: req.body.merk,
        qty: Number(req.body.qty),
        available: req.body.available === "true" ? true : false,
        price: Number(req.body.price),
        img: req.file ? req.file.filename : undefined,
        desc: req.body.description,
        categoryId: Number(req.body.category),
      },
    });

    res.redirect("/shoe");
  }

  static async delete(req, res) {
    await prisma.shoe.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.redirect("/shoe");
  }
}

module.exports = ShoeController;
