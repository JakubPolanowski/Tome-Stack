import { useRouter } from "next/router";

// TODO Implement

export default function PageP({}) {
  const router = useRouter();
  const { slug } = router.query;

  return <main>Welcome to {slug}</main>;
}
