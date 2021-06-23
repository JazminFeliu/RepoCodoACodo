
##Ingresar el sueldo de una persona, si supera los 3000 
##pantalla indicando que debe abonar impuestos


sueldo = float (input("ingresa el sueldo"))
if sueldo > 3000:
    print("te cae la afip")

#muestre el mayor de dos valores
n1 =int(input("Ingrese el primer valor: "))
n2=int(input("Ingrese el segundo valor"))

if n1>n2:
    print("El valor {} es mayor".format(n1))
elif n1==n2:
    print("Son iguales")
else:
    print("El valor {} es mayor".format(n2))

#Ingresar 5 valores
cont = 1
suma = 0
while cont<=5:
    valor =int(input("Ingrese un valor: "))
    suma=suma+valor
    cont+=1
promedio=suma/5
print("La suma de los 5 valores es {}".format(suma))
print("El promedio es {} ".format(promedio))

#ejemplo con for, imprimir del 20 al 34
print("Ejemplo range() con dos parametros: ")
for x in range(20,35):
    print(x)

#Ejemplo con for, tres parametros
print("Ejemplo range() con tres parámetros: ")
for x in range (1,100,2):
    print(x)






