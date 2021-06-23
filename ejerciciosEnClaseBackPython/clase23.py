def presentacion():
    print("Hola esto es un programa")
    print("Espero te guste")
    print("##################################")

def carga_suma():
    valor1 = int(input("Carga el primer valor: "))
    valor2 = int(input("Carga el segundo valor: "))
    suma = valor1 + valor2
    print("La suma es: {}".format(suma))

def finalizacion():
    print("Mensaje de despedida")

def separacion():
    print("###############################")


presentacion()
finalizacion()


def mostrar_mensaje(mensaje):
    print("#########################")
    print(mensaje)
    print("################")

mostrar_mensaje("El programa calcula dos veces la suma de dos valores ingresados")
for x in range(2):
    carga_suma()
    separacion()

mostrar_mensaje("Gracias por utilizar este programa")

def mostrar_mayor(v1, v2, v3):
    print("El valor mayor de los tres numeros es: ")
    if v1 > v2 and v1 > v3:
        print(v1)
    else:
        if v2 > v3:
            print(v2)
        else:
            print(v3)

def cargar():
    valor1 = int(input("Carga el primer valor: "))
    valor2 = int(input("Carga el segundo valor: "))
    valor3 = int(input("Carga el tercer valor: "))
    mostrar_mayor(valor1, valor2, valor3)

cargar()






