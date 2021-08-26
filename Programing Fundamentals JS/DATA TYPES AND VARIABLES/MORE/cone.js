function cone(radius, height) {
  let volume = (1 / 3) * height * Math.PI * radius * radius;
  let l = Math.sqrt(radius * radius + height * height);
  let totalSurfaceArea = Math.PI * radius * l + Math.PI * radius * radius;
  console.log(`volume = ${volume.toFixed(4)}`);
  console.log(`area = ${totalSurfaceArea.toFixed(4)}`);
}
cone(3, 5);
