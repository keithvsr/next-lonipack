import Image from "next/image";

import type { PackMember } from "~/lib/pack";

export default function Member({ packMember }: { packMember: PackMember }) {
  return (
    <article>
      <h1>{packMember.name}</h1>
      <Image
        priority
        src={`/images/${packMember.name.toLowerCase()}/${
          packMember.profileImage
        }`}
        height={220}
        width={220}
        alt={packMember.name}
      />
      {packMember.description ? (
        <div>
          <p>{packMember.description}</p>
        </div>
      ) : (
        <></>
      )}
    </article>
  );
}
