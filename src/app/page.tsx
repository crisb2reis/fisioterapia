import { LeadForm } from '@/components/LeadForm';

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-primary">
            <span className="material-symbols-outlined text-3xl">healing</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Fisio Premium</h2>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#sobre">Sobre</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#servicos">Serviços</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#depoimentos">Depoimentos</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#contato">Contato</a>
        </nav>
        <a href="#contato" className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-2.5 text-sm font-bold transition-colors inline-block text-center">
          Agendar Consulta
        </a>
      </header>

      <main className="flex-1 flex flex-col">
        {/* HERO */}
        <section className="relative px-6 py-12 md:py-24 max-w-[1200px] w-full mx-auto">
          <div
            className="flex flex-col justify-end gap-8 rounded-xl bg-slate-900 overflow-hidden relative min-h-[500px] md:min-h-[600px] p-8 md:p-16"
            style={{
              backgroundImage: "linear-gradient(to right, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.4) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAAq2cNmA1vmWmmm__6XglQqXgiIKSz7E9_YfWMhVw9tQoC75LKBOxVh_zPbf9qewvLSYbPW3XsbF3yxytj0b2A6Rb9qOXpafQ795j4oFAMJuGwNHviLDEiT3r_UvvXmsszdXw1yATNYFA8CKjXMUth3MBDcRZjw8vW5ErUrix59lxLL_Nby_L-x2FKBrzWjBX_O-3aoLhVTZ--iZSFHz9ue2HvLxwtoCVzzYoEpDPQCfW6GFaETw-sD3JI14ztzrdsnWNpGe6wKiQ')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="max-w-2xl relative z-10 flex flex-col items-start gap-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                Recupere sua mobilidade e viva sem dor
              </h1>
              <p className="text-lg text-slate-200 font-medium">
                Tratamento personalizado focado na sua reabilitação completa e alta performance.
              </p>
              <a href="#contato" className="bg-secondary hover:bg-secondary/90 text-slate-900 rounded-full px-8 py-4 text-base md:text-lg font-bold transition-colors mt-4 shadow-lg shadow-secondary/20 inline-block text-center">
                Comece sua recuperação
              </a>
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="py-16 px-6 bg-white dark:bg-slate-900">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col gap-4 text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Nossos Diferenciais</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Oferecemos uma abordagem completa e exclusiva para o seu bem-estar.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: 'assignment', title: 'Avaliação Detalhada', desc: 'Análise biomecânica completa' },
                { icon: 'person_search', title: 'Tratamento Personalizado', desc: 'Protocolos únicos para você' },
                { icon: 'bolt', title: 'Reabilitação Rápida', desc: 'Foco em resultados ágeis' },
                { icon: 'emoji_events', title: 'Alta Performance', desc: 'Prevenção e fortalecimento' },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-slate-800/50 flex flex-col gap-4 hover:shadow-md transition-shadow">
                  <span className="material-symbols-outlined text-4xl text-primary">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOBRE A PROFISSIONAL */}
        <section className="py-16 px-6" id="sobre">
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div
              className="rounded-xl overflow-hidden aspect-[4/5] bg-slate-200"
              style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1mz-jHueMippKBxcjLZ0nklTnJ2q0IruD-GvlqlQsZuLfieHYJfIOVNmPBTubHLTcUWbLKeigDS-210RBaVFg0KE1r2XpD9lxcKXBEXhxK1aHG_BDZQI09WV3xaLe3kgrTzrrgTL_J_Nc8MNvcbZPpNOE9MYhOPXG5WN5ioz3H46ivfHe3o37IGmal7bkh6lz4ANn1-pdmYIh51RlvCKiEsRv1h1tiEZRMdHpEu8tjjR7R7aeNQZzvnB7z8vp6v59YADuKijdoiI')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Sobre a Profissional</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Especialista em fisioterapia esportiva e ortopédica com mais de 10 anos de experiência transformando a vida de pacientes com dor crônica e lesões complexas.
              </p>
              <ul className="flex flex-col gap-4 mt-2">
                {[
                  "Formação em Fisioterapia pela USP",
                  "Especialização em Traumato-Ortopedia",
                  "Certificação em Osteopatia D.O."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">check_circle</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section className="py-16 px-6 bg-slate-50 dark:bg-slate-900/50" id="servicos">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col gap-4 text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Nossos Serviços</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Especialidades focadas na sua recuperação e qualidade de vida.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Ortopedia',
                  desc: 'Tratamento especializado de lesões musculares, tendíneas e articulares para recuperação total da função.',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNgrH2QO63HLakHTB4syX41Q8zDqVAaYsIX_RBviL9tFmyjbVcHwldp4H7YvpFSpTD2uCFnargy9QpDoDkHVrj2vCFFH1q917V0PvCgKGrA9CAeD_fQb3cNfUsv-O4hHL0sHhZ_LsybUkF7D8WPw3pM1aN06eeCoBVZos64S02a-F_EYDAw2JyUdpCMAuG70goyLNjpg67FIroO6mxuEMMD5rVTkvGLiVi1LETeMmZb110hDdNXtmmcetS_1v8cFfBCTUVJaas6BE'
                },
                {
                  title: 'Esportiva',
                  desc: 'Acompanhamento preventivo e curativo para atletas amadores e de alto rendimento buscando performance.',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKC8tFr1Mdh0vtnwLw15HHubi6MZKryk-xXoRgR6qA0Qo5Fjb-Cf8tKCx2UmV1vKW-6sQxuItPmt6OCv5_OtT2CqaIQ3PU4rxiG6tDlO9R7FoA14uDs28S5FDH7ZymRfV1R1I-f-BSLj5XjT_58Lk6SNkCVxvGPA99GmiTVxjc0gDNqqG24xhtfdTo-I03NmLD-aZ3suLr3_quYxFH1H5B79wqUWR7v0F6yS3_8YkwhvtG1F5csabCw5Ww9EML_WEIrLR-TLHYXJE'
                },
                {
                  title: 'Pós-Operatório',
                  desc: 'Reabilitação segura, gradual e acelerada após procedimentos cirúrgicos ortopédicos.',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMuLES4P9EhW3UvgoCKl3c0kYW2Ob28etprQNZuPoVH9ooVarfE7XG4hXCv9fhD9IDUenleIZ3uFo-7YyAmYj66FFEMlbkS-f_frzokcJmUgqf8iULH12TOI4omElCAX7tqTZSq4XQf4Cl2Zfb-sT-CxaYz7sLyvJqPZM5Npta81K9wW3c79BZCfAmTB1Bz66jcU-4Y8lywD1Caq-Z1Bhr1b917sLg5hMPDBen2LjEyvfH_ezXMikZOopnVxD89RJicZ4rXLhavJ4'
                }
              ].map((svc, i) => (
                <div key={i} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all flex flex-col gap-4">
                  <div
                    className="rounded-lg aspect-video bg-slate-200 mb-2 overflow-hidden"
                    style={{ backgroundImage: `url('${svc.img}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  ></div>
                  <h3 className="text-xl font-bold text-primary">{svc.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LOCAIS DE DOR */}
        <section className="py-16 px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Onde você sente dor?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['Cervical', 'Ombro', 'Lombar', 'Joelho', 'Tornozelo'].map((regiao, i) => (
                <a key={i} href="#contato" className="px-6 py-3 rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary/5 text-slate-800 dark:text-slate-200 font-medium transition-colors">
                  {regiao}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="py-16 px-6 bg-white dark:bg-slate-900" id="depoimentos">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">O que dizem nossos pacientes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  text: 'Após meses de dor no ombro, encontrei a solução aqui. O atendimento é excepcional e personalizado.',
                  name: 'Mariana Costa',
                  desc: 'Recuperação de Ombro',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-Zt2huoX1gCEGPlyvWgJBEUq7YqFdEaisjfRYoQmMQgr7sQnthNmxmhJK-fFJ3NWvJwkpqskIM7MGF8g3ssVSQPhMmFZJAesBt27iQ1HaokMzxWxKdAEUkU7oRnr3zr6ivpm3E9IQ1bSsd7qCxmmWkf6MuQq6uVO0quEIccPxVJIRRTt99S8kBG1qR7hcXP9uCWByTiB4Vk4rR1nTIbZZ6u0a7SqT_fjLBYjobsWg8mNC8ZjZ-Ypmu5BiVdT2geEn_xN7c6UUPso'
                },
                {
                  text: 'Voltei a correr maratonas sem dor no joelho. Profissionalismo incrível da equipe.',
                  name: 'Carlos Silva',
                  desc: 'Fisioterapia Esportiva',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhG63QgJD-85sAm8aAAUyy-xywOmjeuaDbjjgDStnVv7oJNE4UhwO1WPpbhWm6awyQfJKoZsQHvXooEp-XD8xo47u7Vxk-UWN9VmY_t90ELSCeg5k8JUU_hu4bpffJwtg48cY8WSorziu8lUUMLnuDeRdICkvuMmfp1gm-dASji1Sckj3NKJgRKok8abKYWIb-a5Z6E7gCh-9UINrI77QxPw-R-2ay7XrV8LWK6ONXqP1Y02yY7SecMSmd4YcDnuLiZr8E8p09q0w'
                },
                {
                  text: 'Recuperação pós-operatória rápida e segura. Recomendo de olhos fechados.',
                  name: 'Ana Paula',
                  desc: 'Pós-Operatório',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOtfS6gR72Myuq9mcOO2TkbENQrH9JG_j4e5wd2TlmJXvivu8Fmiq-UIkGCgecOpW4aaegXl19bJsn7nuc5si37BpELbZmzBPNl6NMv6lyInEcmjYUnDbzNzDDS99erCk0BL_FSzCKcw556mYxzi8wFS0XrCSGfGtPA2891cEXh9hG652kQXDxrYWqA2it8F6nNaqZk0XZlx6bVLidfWMre1k6b3M_HCDRLGSd0mVThT5y-HuR0fYQZ8WcMoMEE84-Azh5qjsyLho'
                }
              ].map((dep, i) => (
                <div key={i} className="p-6 rounded-xl bg-background-light dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                  <div className="flex text-amber-400 mb-4">
                    {Array(5).fill(0).map((_, i) => <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 italic">"{dep.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-300" style={{ backgroundImage: `url('${dep.img}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div>
                      <p className="font-bold text-sm">{dep.name}</p>
                      <p className="text-xs text-slate-500">{dep.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CALL TO ACTION / FORM */}
        <section className="py-20 px-6" id="contato">
          <div className="max-w-[1000px] mx-auto bg-primary rounded-xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent"></div>
            <div className="relative z-10 flex flex-col items-center text-center gap-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Pronto para iniciar sua recuperação?</h2>
              <p className="text-primary-100 text-white/80 max-w-lg">Deixe seus dados e nossa equipe entrará em contato para agendar sua primeira avaliação.</p>

              <LeadForm />

            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-background-dark text-white pt-12">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 pb-12">
          {/* Col 1 */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-widest text-white leading-tight">CLÍNICA<br /><span className="text-3xl text-secondary">REACTIVE</span></span>
            </div>
            <div className="flex gap-2">
              <a href="#" className="bg-primary hover:bg-primary/90 p-2 text-white flex items-center justify-center w-8 h-8 rounded-sm"><span className="text-sm font-bold">f</span></a>
              <a href="#" className="bg-primary hover:bg-primary/90 p-2 text-white flex items-center justify-center w-8 h-8 rounded-sm"><span className="material-symbols-outlined text-sm">photo_camera</span></a>
            </div>
            <div className="mt-2">
              <h4 className="text-secondary font-bold text-xl mb-2">Endereço</h4>
              <p className="text-sm text-white/90">Rua dos Macunis, 474 - Alto de Pinheiros</p>
              <p className="text-sm text-white/90">São Paulo - SP - CEP 05444-001</p>
              <div className="flex gap-2 mt-2 text-white">
                <span className="material-symbols-outlined text-lg text-secondary">location_on</span>
                <span className="material-symbols-outlined text-lg text-secondary">directions_car</span>
              </div>
            </div>
          </div>
          {/* Col 2 */}
          <div className="flex flex-col gap-4 mt-2 md:mt-12">
            <h4 className="text-secondary font-bold text-xl">Canais de atendimento</h4>
            <p className="text-sm text-white/90 flex items-center gap-2">(11) 97655-8574 <span className="material-symbols-outlined text-sm text-secondary">chat</span></p>
            <p className="text-sm text-white/90">contato@reactive.com.br</p>
          </div>
          {/* Col 3 */}
          <div className="flex flex-col gap-2 mt-2 md:mt-12">
            <h4 className="text-secondary font-bold text-xl mb-2">Especialidades</h4>
            {['Fisioterapia', 'Medicina', 'Estética', 'Massagem', 'Nutrição', 'Pilates', 'Treinamento Funcional'].map(esp => (
              <p key={esp} className="text-sm text-white/90 mb-1">{esp}</p>
            ))}
          </div>
        </div>
        <div className="bg-primary text-white py-4 px-6 text-xs font-medium">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
            <p>Clínica Reactive 2020 - Todos os Direitos Reservados ©</p>
            <p>Desenvolvido por: <strong className="font-bold">OP1 Marketing Digital</strong></p>
          </div>
        </div>
      </footer>
    </>
  );
}
