// "noUncheckedIndexedAccess": true
export const myObj: Record<string, string[]> = {};

//myObj.foo?.push("ciao");
if (!myObj.foo) {
  myObj.foo = [];
}
myObj.foo.push("ciao");
