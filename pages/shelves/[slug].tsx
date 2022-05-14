import { useRouter } from "next/router";

export default function ShelfPage({}) {
  // TODO Implement
  const router = useRouter();
  const { slug } = router.query;

  return <main>Welcome {slug} Shelf</main>;
}
