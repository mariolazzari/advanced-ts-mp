export type Letters = "a" | "b" | "c";
type RemoveC<TType> = TType extends "c" ? never : TType;
type WowWithoutC = RemoveC<Letters>;

type AddD<TType> = TType extends "c" ? "d" : TType;
type WowWithD = AddD<Letters>;

const a: WowWithoutC = "a";
console.log(a);

const d: WowWithD = "d";
console.log(d);
