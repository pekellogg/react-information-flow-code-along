// generate random hex color
export function getRandomColor() {
  const letters = '123456789AB' // <-- cutting off top end so we can lighten the color twice with 'reduceColor'
  let color = '#'
  for (let i = 0; i < 3; i++) {
    color += letters[Math.floor(Math.random() * 11)]
  }
  return color;
}
