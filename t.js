let a = Array.from({
  length: 10,
}).map((e) => (e = Math.random(0, 100)));

a.forEach((element) => {
  console.log(element);
});

for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}
