class Producto:

    def_init_(self, referencia, nombre, descripcion, precio):
        self.referencia = referencia
        self.nombre = nombre
        self.descripcion = descripcion
        self.precio = precio

    def_str_(self):
        return "Producto:{} - {} - {} - {}".format()

    def rebajar_producto(self, rebaja):
        self.precio = self.precio - rebaja
        