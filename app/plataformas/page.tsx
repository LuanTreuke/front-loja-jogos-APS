"use client";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function PlataformasPage() {
  const [plataformas, setPlataformas] = useState([]);

  useEffect(() => {
    api.get("/plataformas").then(res => setPlataformas(res.data));
  }, []);

  return (
    <div className="bg-white text-black min-h-screen flex items-center justify-center">
      <div className="container max-w-md mx-auto p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">Plataformas</h1>
        <table className="w-full border border-gray-300 bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-center">Nome</th>
            </tr>
          </thead>
          <tbody>
            {plataformas.map((p: any) => (
              <tr key={p.id} className="border-t border-gray-200">
                <td className="p-2 text-center">{p.nome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}