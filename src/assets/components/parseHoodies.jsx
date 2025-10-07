export function parseHoodies(hoodies) {
  return hoodies.map((item, index) => ({
    id: item.id ?? index + 1, // fallback in case id is missing
    brand: item.brand ?? "Untitled",
    name: item.name ?? "",
    material: item.material ?? "",
    style: item.style ?? "",
    culture: item.culture ?? "",
    price_usd: item.price_usd ?? 0
  }));
}