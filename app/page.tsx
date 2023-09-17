import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center font-copy">
      <section className="px-4 text-center md:text-left">
        <h1 className="mb-4 font-heading text-4xl tracking-tighter  md:text-8xl">
          Lucio Poveda Bertos
        </h1>
        <h2 className="mb-2 text-sm md:text-lg">
          ARGENTINEAN INNOVATIVE DEVELOPER LIVING IN SPAIN
        </h2>
        <footer>
          <ul className="flex justify-center gap-4 md:justify-start">
            <li>
              <Link
                className="text-sm underline md:text-base"
                href={"https://x.com/luciopoveda"}
                rel="nofollow"
              >
                X
              </Link>
            </li>
            <li>
              <Link
                className="text-sm underline md:text-base"
                href={"https://ar.linkedin.com/in/luciopoveda"}
                rel="nofollow"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                className="text-sm underline md:text-base"
                href={"https://github.com/kohm/"}
                rel="nofollow"
              >
                GitHub
              </Link>
            </li>
          </ul>
        </footer>
      </section>
    </main>
  );
}
