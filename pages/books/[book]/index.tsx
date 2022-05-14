import { useRouter } from "next/router";

// TODO Implement

export default function BookP({}) {
  const router = useRouter();
  const { slug } = router.query;

  return <main>Welcome to {slug} book</main>;
}
