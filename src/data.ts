import { Vector3 } from "three";

export const getRandomPoints = (n = 100, scale = 10): Vector3[] => {
  const points: Vector3[] = [];
  for (let index = 0; index < n; index++) {
    const x = Math.random() * scale;
    const y = Math.random() * scale;
    const z = Math.random() * scale;

    points.push(new Vector3(x, y, z));
  }

  return points;
};
