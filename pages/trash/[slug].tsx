import { useRouter } from "next/router";

export default function TrashItem({}) {
  // TODO Implement
  const router = useRouter();
  const { slug } = router.query;

  return <main>Welcome {slug} trash item</main>;
}
