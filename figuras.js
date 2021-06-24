//Codigo del Cuadrado

console.group("cuadrados");

perimetroCuadrado = (lado) => {
    return lado * 4;
}
perimetroCuadrado();

areaCuadrado = (lado) => {
    return lado * lado;
}
areaCuadrado();
console.groupEnd();



//Codigo del Triàngulo

console.group("triangulos");


    perimetroTriangulo = (lado1, lado2, base) => {
        return lado1 + lado2 + base;
    }
    perimetroTriangulo();
    

    areaTriangulo = (base, altura) => {
        return (base * altura) / 2;
    }

    console.groupEnd();



    //Codigo del Cìrculo

console.group("Cìrculos");

// Diàmetro
diametroCirculo = (radio) => {
    return radio * 2;
}
diametroCirculo();


// PI
const PI = Math.PI;
console.log ("El PI es: " + PI + "cm");


// Circuferencia
perimetroCirculo = (radio) => {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
perimetroCirculo();


// Àrea
areaCirculo = (radio) => {
    return (radio * radio) * PI;
}
areaCirculo();


console.groupEnd();