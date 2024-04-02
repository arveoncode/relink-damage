import { Character } from "@/types/character.types";

export const characters = [
  "Io",
  "Zeta",
  "Captain",
  "Narmaya",
  "Rosetta",
  "Cagliostro",
  "Ferry",
  "Lancelot",
  "Rackam",
  "Vaseraga",
  "Siegfried",
  "Vane",
  "Id",
  "Charlotta",
  "Ghandagoza",
  "Percival",
  "Katalina",
  "Eugen",
  "Yodarha",
] as const;

export const characterImages = [
  {
    characterName: "Io",
    imageLink: "https://i.imgur.com/PudUfF0.png",
  },
  {
    characterName: "Captain",
    imageLink: "https://i.imgur.com/geo13SP.png",
  },
  {
    characterName: "Cagliostro",
    imageLink: "https://i.imgur.com/IqZeRf0.png",
  },
  {
    characterName: "Ferry",
    imageLink: "https://i.imgur.com/EJgYRkH.png",
  },
  {
    characterName: "Lancelot",
    imageLink: "https://i.imgur.com/oKdaSHy.png",
  },
  {
    characterName: "Rackam",
    imageLink: "https://i.imgur.com/DdUps1x.png",
  },
  {
    characterName: "Narmaya",
    imageLink: "https://i.imgur.com/VqA3bGx.png",
  },
  {
    characterName: "Vaseraga",
    imageLink: "https://i.imgur.com/LVUIWgV.png",
  },
  {
    characterName: "Siegfried",
    imageLink: "https://i.imgur.com/czIrhY4.png",
  },
  {
    characterName: "Vane",
    imageLink: "https://i.imgur.com/5N5Hbw0.png",
  },
  {
    characterName: "Id",
    imageLink: "https://i.imgur.com/vMskV4b.png",
  },
  {
    characterName: "Charlotta",
    imageLink: "https://i.imgur.com/QmCqJSI.jpeg",
  },
  {
    characterName: "Zeta",
    imageLink: "https://i.imgur.com/olQJazl.png",
  },
  {
    characterName: "Ghandagoza",
    imageLink: "https://i.imgur.com/pn7UzVA.png",
  },
  {
    characterName: "Rosetta",
    imageLink: "https://i.imgur.com/Z62jCzG.png",
  },
  {
    characterName: "Percival",
    imageLink: "https://i.imgur.com/rwPVg0q.png",
  },
  {
    characterName: "Katalina",
    imageLink: "https://i.imgur.com/WzWXQzT.png",
  },
  {
    characterName: "Eugen",
    imageLink: "https://i.imgur.com/alK5icy.png",
  },
  {
    characterName: "Yodarha",
    imageLink: "https://i.imgur.com/Efr4Hhf.png",
  },
];

export function getCharacterImage(name: Character) {
  return characterImages.find(
    (charImage) => charImage.characterName === name
  ) === undefined
    ? "https://i.imgur.com/ymvvOeh.png"
    : characterImages.find((charImage) => charImage.characterName === name)
        ?.imageLink;
}
