interface Display {
  displayName: string;
}

interface Animal extends Display {
  name: string;
}

interface Human extends Display {
  firstName: string;
  lastName: string;
}

const getDisplayName = <T extends Display>(item: T): Display => {
  return {
    displayName: item.displayName,
  };
};

const animal: Animal = { name: "Tudor", displayName: "Tudor" };
const man: Human = {
  firstName: "Mario",
  lastName: "Lazzari",
  displayName: "ML",
};

const result = getDisplayName(animal);
const result2 = getDisplayName(man);
