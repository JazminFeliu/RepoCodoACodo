class Persona:
    def inicializar(self, nombre, nota):
        self.nombre = nombre
        self.nota = nota
        

    def imprimir(self):
        print("Nombre: {}".format(self.nombre))
        print("Nombre: {}".format(self.nota))


#bloque principal
persona1 = Persona()
persona1.inicializar("Pedro", 5)
persona1.inicializar("Ana",10)
persona1.imprimir()

