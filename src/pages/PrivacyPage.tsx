const PrivacyPage = () => (
  <div className="container mx-auto px-4 py-12 max-w-3xl">
    <h1 className="text-3xl font-display font-bold text-foreground mb-8">Política de Privacidade</h1>
    <div className="prose prose-invert max-w-none space-y-6 text-sm text-muted-foreground leading-relaxed">
      <p>Última atualização: 16 de Março de 2026</p>
      <h2 className="text-lg font-display font-semibold text-foreground">1. Informações Coletadas</h2>
      <p>Coletamos informações que você fornece diretamente (nome, email, foto de perfil) e dados de uso da plataforma (reproduções musicais, interações, preferências).</p>
      <h2 className="text-lg font-display font-semibold text-foreground">2. Dados do Spotify</h2>
      <p>Ao conectar sua conta do Spotify, acessamos seu histórico de reproduções recentes para rastreamento estatístico (scrobbling). Não armazenamos suas credenciais do Spotify.</p>
      <h2 className="text-lg font-display font-semibold text-foreground">3. Uso dos Dados</h2>
      <p>Utilizamos seus dados para: fornecer estatísticas personalizadas, gerar recomendações via IA, exibir conquistas e manter o ranking da comunidade.</p>
      <h2 className="text-lg font-display font-semibold text-foreground">4. Compartilhamento</h2>
      <p>Suas estatísticas de perfil são públicas por padrão. Reviews, listas e atividades são visíveis para outros usuários conforme suas configurações de privacidade.</p>
      <h2 className="text-lg font-display font-semibold text-foreground">5. Segurança</h2>
      <p>Implementamos medidas técnicas e organizacionais para proteger seus dados, incluindo criptografia de dados em trânsito e em repouso.</p>
      <h2 className="text-lg font-display font-semibold text-foreground">6. Cookies</h2>
      <p>Utilizamos cookies essenciais para autenticação e preferências. Cookies de terceiros podem ser usados para exibição de anúncios relevantes.</p>
      <h2 className="text-lg font-display font-semibold text-foreground">7. Contato</h2>
      <p>Para questões sobre privacidade, entre em contato: privacy@rocketmusic.com</p>
    </div>
  </div>
);

export default PrivacyPage;
