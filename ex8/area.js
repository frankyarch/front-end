const PI = 3.14;

export function calculateArea(shape) {
  return PI * Math.pow(shape.radius, shape.power);
}