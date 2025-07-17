"use client";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function JogosPage() {
  const [jogos, setJogos] = useState([]);
  const [plataformas, setPlataformas] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [plataformaId, setPlataformaId] = useState("");
  const [generoId, setGeneroId] = useState("");

  useEffect(() => {
    api.get("/plataformas").then(res => setPlataformas(res.data));
    api.get("/generos").then(res => setGeneros(res.data));
    buscarJogos();
  }, []);

  const buscarJogos = () => {
    api.get("/jogos", {
      params: {
        plataformaId: plataformaId || undefined,
        generoId: generoId || undefined,
      }
    }).then(res => setJogos(res.data));
  };

  useEffect(() => {
    buscarJogos();
  }, [plataformaId, generoId]);

  return (
    <div className="bg-white text-black min-h-screen flex items-center justify-center">
      <div className="container max-w-2xl mx-auto p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">Jogos</h1>
        <div className="flex gap-4 mb-4 justify-center">
          <select value={plataformaId} onChange={e => setPlataformaId(e.target.value)} className="border p-2 rounded">
            <option value="">Todas Plataformas</option>
            {plataformas.map((p: any) => (
              <option key={p.id} value={p.id}>{p.nome}</option>
            ))}
          </select>
          <select value={generoId} onChange={e => setGeneroId(e.target.value)} className="border p-2 rounded">
            <option value="">Todos Gêneros</option>
            {generos.map((g: any) => (
              <option key={g.id} value={g.id}>{g.nome}</option>
            ))}
          </select>
        </div>
        <table className="w-full border border-gray-300 bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-center">Nome</th>
              <th className="p-2 text-center">Plataforma</th>
              <th className="p-2 text-center">Gênero</th>
              <th className="p-2 text-center">Detalhes</th>
            </tr>
          </thead>
          <tbody>
            {jogos.map((j: any) => (
              <tr key={j.id} className="border-t border-gray-200">
                <td className="p-2 text-center">{j.nome}</td>
                <td className="p-2 text-center">{j.plataforma?.nome}</td>
                <td className="p-2 text-center">{j.genero?.nome}</td>
                <td className="p-2 text-center">
                  <a href={`/jogos/${j.id}`} className="text-green-800">Ver detalhes</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}