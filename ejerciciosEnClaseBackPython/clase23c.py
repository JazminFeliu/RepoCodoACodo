#confeccionar una funcion que reciba entre 2 y n valores enteros, retornar la suma de dichos parametros.

def sumar(v1, v2,*tupla):
    suma=v1+v2
    for x in range(len(tupla)):
        suma=suma+tupla[x]
    return suma

#bloque principal
print("La suma de 1+2: {}".format(sumar(1,2)))
print("La suma de 1+2+3+4: {}".format(sumar(1,2,3,4)))
print("La suma de 1+2+3+4+5+6+7+8+9+10: {}".format(sumar(1,2,3,4,5,6,7,8,9,10)))

def imprimir(lista):


def fijar_cero(li):
    for x in range(len(li)):
        if li[x] < 10

def cargar():
    lista=[]
    continuar ="s"
    while continuar =="s":
        valor = int(input("Ingrese un valor:"))
        lista.append(valor)
        continuar=input("Agrega otro elemento?")
    return lista

#bloque principal
lista=cargar()
print("La lista antes de modificar ")
imprimir(lista)
fijar_cero(lista)
print("Lista deespues de modificar")
imprimir(lista)




