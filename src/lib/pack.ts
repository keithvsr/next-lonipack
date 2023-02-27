export interface PackMember {
  id: number;
  name: string;
  profileImage: string;
  extraImages: string[];
  age?: number;
  description?: string;
}

const pack: PackMember[] = [
  {
    id: 1,
    name: "Shiloh",
    profileImage: "the-dogfather.png",
    extraImages: ["bwuh.png", "a-boy-and-his-toy.png", "big-ole-ears.png"],
    age: 25,
    description:
      "The original Shi-loni. Aggressively social. Very protective of his Loni \
    Pack. Bigger, smarter, more curious, and more headstrong than he has any \
    right to be.",
  },
  {
    id: 2,
    name: "Badger",
    profileImage: "bad-to-the-bone.png",
    extraImages: ["bodge-beachum.png"],
    age: 50,
    description:
      "One of, if not the, best doggos around. Equal parts insane and stately. \
    Will preen for treats, especially if he's allergic to them.",
  },
  {
    id: 3,
    name: "Shasta",
    profileImage: "lookit-that-mug.png",
    extraImages: ["the-cutest-face.png"],
    description:
      "The original non-family pack member. Cannot stand a tug toy \
    not being used. Jet engine in dog form.",
  },
  {
    id: 4,
    name: "Gus",
    profileImage: "regal-gus.png",
    extraImages: ["gus-is-a-pirate.png"],
    description:
      "Loves nothing more than a good perimeter check. Absolute \
    critical addition to any pack wrestling match.",
  },
  {
    id: 5,
    name: "Buoy",
    profileImage: "bubuness.png",
    extraImages: ["will-u-be-fren-or-gib-treat.png"],
    age: 30,
    description:
      "Too much, and yet not enough. Sweetest girl if you pass her \
    litmus test of the day.",
  },
  {
    id: 6,
    name: "Marge",
    profileImage: "lil-margum.png",
    extraImages: ["da-real-one.png"],
    description:
      "Honestly, who knows? A lady of mystery. Will melt \
    the coldest hearts with a tail wag.",
  },
];

export function getSortedPackMembers() {
  return [...pack].sort((a, b) => a.id - b.id);
}

export function getAllMemberNames() {
  return pack.map((member) => ({
    params: {
      name: member.name.toLowerCase(),
    },
  }));
}

export function getPackMember(name: string) {
  const packMember = pack.find((member) => member.name.toLowerCase() === name)!;

  return packMember;
}
