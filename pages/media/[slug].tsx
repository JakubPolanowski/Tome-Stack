import { useRouter } from "next/router";

// TODO Implement

export default function Media({}) {
  const router = useRouter();
  const { slug } = router.query;

  return <main>This should open selected media {slug}</main>;
}
