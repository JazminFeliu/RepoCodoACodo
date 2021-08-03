primer_nombre = "juana"
# la identacion es recontra importante en python   

if primer_nombre=="juana":
        print("El nombre es Juana")

print("el programa sigue")   

#en python NO EXISTEN las constantes
"""
Comentarios de muchas l
lineas
en Python
"""


"""
 Ejercicio: calcular la superficie de un cuadrado

lado = int(input("Ingresá la medida del lado: "))

superficie=lado*lado
print("La superficie es: ", superficie)

#Ejercicio2, tipo de datos, int, float
altura = float(input("Ingresá la altura de una persona: "))

print("La altura es ",altura)
"""

#Ejercicio3, string

nombre ="Jazmin"
if(nombre[0]=="J"):
        print("El nombre empieza con J")

#funciones se llaman con parentesis
print(nombre.upper())

print(len(nombre))

#concatenaciones
var1 = 'Hola'
var2 = ' Python'
var3 = 'Juana'
var4 = 26
print(var1 + var2)

print('La variable 1 es: '+var1)
print('La variable 2 es: ',var2)
print("%s tiene %d años"%(var3,var4))

lista1 =[1,2,3] #lista de enteros
lista2=["juan","jose","lolo"] #lista de string
lista3 =["juan", 3, 1.64] #lista con elementos distintos

lista_ord =[0,1,2,3,4,5,6]
lista_ord2 = lista_ord[2:5]
print(lista_ord2)
lista_ord3 = lista_ord[:3]
print(lista_ord3)
lista_ord4 = lista_ord[-3] #lee de atras para adelante
print(lista_ord4)


#diccionarios se ponen entre llaves y con clave, valor
productos = {"manzanas":39, "peras":32,"lechuga":17}

nombre = input("Ingresa el nombre del producto nuevo: ")
precio = int(input("ingresa el precio: "))
print (productos)
productos[nombre] = precio
print (productos)

mi_numero = int(input["Ingrese un digito"]) 
print(mi_numero)