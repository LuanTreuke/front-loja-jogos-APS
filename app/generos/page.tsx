"use client";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function GenerosPage() {
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    api.get("/generos").then(res => setGeneros(res.data));
  }, []);

  return (
    <div className="bg-white text-black min-h-screen flex items-center justify-center">
      <div className="container max-w-md mx-auto p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">Gêneros</h1>
        <table className="w-full border border-gray-300 bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-center">Nome</th>
            </tr>
          </thead>
          <tbody>
            {generos.map((g: any) => (
              <tr key={g.id} className="border-t border-gray-200">
                <td className="p-2 text-center">{g.nome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}