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
  "Tweyen",
  "Seofon",
] as const;

export const characterConstants = [
  {
    characterName: "Io",
    imageLink: "https://i.imgur.com/PudUfF0.png",
    warpathEnhancement: 0.15,
  },
  {
    characterName: "Captain",
    imageLink: "https://i.imgur.com/geo13SP.png",
    warpathEnhancement: 0,
  },
  {
    characterName: "Cagliostro",
    imageLink: "https://i.imgur.com/IqZeRf0.png",
    warpathEnhancement: 0.15,
  },
  {
    characterName: "Ferry",
    imageLink: "https://i.imgur.com/EJgYRkH.png",
    warpathEnhancement: 0.15,
  },
  {
    characterName: "Lancelot",
    imageLink: "https://i.imgur.com/oKdaSHy.png",
    warpathEnhancement: 0.1,
  },
  {
    characterName: "Rackam",
    imageLink: "https://i.imgur.com/DdUps1x.png",
    warpathEnhancement: 0.2,
  },
  {
    characterName: "Narmaya",
    imageLink: "https://i.imgur.com/VqA3bGx.png",
    warpathEnhancement: 0.15,
  },
  {
    characterName: "Vaseraga",
    imageLink: "https://i.imgur.com/LVUIWgV.png",
    warpathEnhancement: 0.3,
  },
  {
    characterName: "Siegfried",
    imageLink: "https://i.imgur.com/czIrhY4.png",
    warpathEnhancement: 0.4,
    warpathCondition: "Sp",
  },
  {
    characterName: "Vane",
    imageLink: "https://i.imgur.com/5N5Hbw0.png",
    warpathEnhancement: 0.3,
    warpathCondition: "Sp",
  },
  {
    characterName: "Id",
    imageLink: "https://i.imgur.com/vMskV4b.png",
    warpathEnhancement: 0.1,
    warpathCondition: "S2",
  },
  {
    characterName: "Charlotta",
    imageLink: "https://i.imgur.com/QmCqJSI.jpeg",
    warpathEnhancement: 0.1,
    warpathCondition: "Sp",
  },
  {
    characterName: "Zeta",
    imageLink: "https://i.imgur.com/olQJazl.png",
    warpathEnhancement: 0.15,
  },
  {
    characterName: "Ghandagoza",
    imageLink: "https://i.imgur.com/pn7UzVA.png",
    warpathEnhancement: 1,
    warpathCondition: "Raging Fist",
  },
  {
    characterName: "Rosetta",
    imageLink: "https://i.imgur.com/Z62jCzG.png",
    warpathEnhancement: 0.1,
    warpathCondition: "Rose Attacks",
  },
  {
    characterName: "Percival",
    imageLink: "https://i.imgur.com/rwPVg0q.png",
    warpathEnhancement: 0.3,
    warpathCondition: "Schlacht",
  },
  {
    characterName: "Katalina",
    imageLink: "https://i.imgur.com/WzWXQzT.png",
    warpathEnhancement: 0.25,
  },
  {
    characterName: "Eugen",
    imageLink: "https://i.imgur.com/alK5icy.png",
    warpathEnhancement: 0.25,
    warpathCondition: "Grenade",
  },
  {
    characterName: "Yodarha",
    imageLink: "https://i.imgur.com/Efr4Hhf.png",
    warpathEnhancement: 0,
  },
  {
    characterName: "Tweyen",
    imageLink: "https://i.imgur.com/deLpS4S.png",
    warpathEnhancement: 0.2,
    warpathCondition: "Ch",
  },
  {
    characterName: "Seofon",
    imageLink: "https://i.imgur.com/evkM9BQ.png",
    warpathEnhancement: 0.2,
  },
];

export function getCharacterImage(name: Character) {
  return characterConstants.find(
    (charImage) => charImage.characterName === name
  ) === undefined
    ? "https://i.imgur.com/ymvvOeh.png"
    : characterConstants.find((charImage) => charImage.characterName === name)
        ?.imageLink;
}
