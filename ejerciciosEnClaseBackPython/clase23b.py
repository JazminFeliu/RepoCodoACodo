def cargar_dato():
    la=int(input("Ingrese el valor del lado del cuadrado "))
    respuesta = input ("Quiere calcular el perimetro o la superficie? ")
    if respuesta == "superficie":
        mostrar_superficie(la)
    if respuesta == "perimetro":
        mostrar_perimetro(la)



def mostrar_perimetro(lado):
    per = lado*4
    print("el perimetro es: {}".format(per))

def mostrar_superficie(lado):
    sup = lado * lado
    print("La superficie es: {} m2".format(sup))

cargar_dato()

def mayormenor(lista):
    may=lista[0]
    men= lista[0]
    for x in range(1,len(lista)):
        if lista[x]>may:
            may=lista[x]
        else:
            if lista[x]<men:
                men=lista[x]
    print("El numero mayor es: {}".format(may))
    print("El menor numero es: {}".format(men))

