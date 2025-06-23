// greet.ts
function Greet(name: string): string {
  return 'Hello ' + name.toUpperCase();
}

console.log(Greet(123)); // ❌ Compile-time Error
