import Link from "next/link";
export default function Menu() {
  return (
    <nav className="bg-green-900 text-white px-6 py-6 flex gap-8">
      <Link href="/jogos">Jogos</Link>
      <Link href="/plataformas">Plataformas</Link>
      <Link href="/generos">Gêneros</Link>
    </nav>
  );
}