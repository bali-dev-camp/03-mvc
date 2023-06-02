const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class CategoryController {
  static async listPage(req, res) {
    const result = await prisma.category.findMany();
    res.render("pages/category/list", { categories: result });
  }

  static async createPage(req, res) {
    res.render("pages/category/create");
  }

  static async store(req, res) {
    try {
      await prisma.category.create({
        data: {
          name: req.body.name,
        },
      });
      res.redirect("/category");
    } catch (err) {
      req.flash("error", err.message);
      res.redirect("/category/create");
    }
  }

  static async editPage(req, res) {
    const result = await prisma.category.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    res.render("pages/category/edit", { category: result });
  }

  static async update(req, res) {
    try {
      await prisma.category.update({
        where: {
          id: Number(req.params.id),
        },
        data: {
          name: req.body.name,
        },
      });

      res.redirect("/category");
    } catch (err) {
      req.flash("error", err.message);
      res.redirect(`/category/${req.params.id}/edit`);
    }
  }

  static async delete(req, res) {
    await prisma.category.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.redirect("/category");
  }
}

module.exports = CategoryController;
