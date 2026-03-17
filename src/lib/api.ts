const BASE_URL = 'http://localhost:8080/api';

export async function apiFetch(endpoint: string, options: RequestInit = {}) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    credentials: 'include', // ESSENCIAL PARA O SPRING SECURITY
  });

  if (response.status === 401) {
    window.location.href = '/'; // Redireciona se a sessão cair
  }

  return response.json();
}