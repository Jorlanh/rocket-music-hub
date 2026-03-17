import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Loader2 } from "lucide-react";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();

  // 1. Mostra loader enquanto o useAuth decide se o usuário existe
  if (isLoading) {
    return (
      <div className="h-screen bg-black text-emerald-500 flex flex-col items-center justify-center gap-4">
        <Loader2 className="w-10 h-10 animate-spin" />
        <p className="font-mono text-sm tracking-widest animate-pulse font-bold">
          SINCRONIZANDO COM A ÓRBITA...
        </p>
      </div>
    );
  }

  // 2. Se terminou de carregar e NÃO tem usuário, redireciona para a raiz pública
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // 3. Se tem usuário, libera o acesso à página
  return <>{children}</>;
}