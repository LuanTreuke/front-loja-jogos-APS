"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import api from "../../services/api";

export default function JogoDetalhes() {
  const { id } = useParams();
  const router = useRouter();
  const [jogo, setJogo] = useState<any>(null);

  useEffect(() => {
    api.get(`/jogos/${id}`).then(res => setJogo(res.data));
  }, [id]);

  if (!jogo) return <div>Carregando...</div>;

  return (
    <div className="bg-white text-black min-h-screen container max-w-md mx-auto p-8 rounded shadow relative">
      <button
        type="button"
        onClick={() => router.back()}
        className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-black cursor-pointer"
        aria-label="Fechar"
      >
        ×
      </button>
      <h1 className="text-2xl font-bold mb-4">{jogo.nome}</h1>
      <div className="mb-2"><b>Plataforma:</b> {jogo.plataforma?.nome}</div>
      <div className="mb-2"><b>Gênero:</b> {jogo.genero?.nome}</div>
      <a href="/jogos" className="text-green-800 mt-4 block">Voltar para lista</a>
    </div>
  );
}