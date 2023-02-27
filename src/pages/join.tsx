import { useRouter } from "next/router";

export default function Join() {
  const router = useRouter();
  setTimeout(() => router.push("/"), 5000);

  return <>Coming soon! (maybe lol 🤪)</>;
}
