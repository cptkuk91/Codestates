function showName() {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
}

showName("Julius", "Caesar");
// 2
// Julius
// Caesar


showName("Bora");
// 1
// Bora
// undefined
