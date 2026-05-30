import pool from "../db/database.js";

class CategoriasModel {
  async showAll() {
    const [rows] = await pool.execute("SELECT * FROM categoria;");
    return rows;
   
  }

  async getCategoriaById(id) {
    const [row] = await pool.execute( "SELECT * FROM categorias WHERE id_categoria = ?;", [id],
    );

    return row;
  }

  async createCategoria(categoriaData) {
    const { categoria } = categoriaData;

    const [rows] = await pool.execute(

      "INSERT INTO compras (categoria) VALUES (?);",
      [categoria],
    );

    return rows[0];
  }

  async updateCategoria(id, categoriaData) {
    const { categoria } = categoriaData;

    const [rows] = await pool.execute(
      "UPDATE categorias SET categoria = ? WHERE id_categoria = ?;",
      [categoria, id]
    );

    return rows;
  }

  async deleteCategoria(id) {
    const [row] = await pool.execute(
      "DELETE FROM categoria WHERE id_categoria = ?;",
      [id],
    );

    return row;
  }
}

export default new CategoriasModel();