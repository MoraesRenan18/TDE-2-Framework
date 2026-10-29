const { createApp } = Vue;

createApp({
  data() {
    return {
      name: "Marty McFly",

      professionalTitle:
        "Consultor de Cronologia e Especialista em Performance Musical",

      profile:
        "Jovem dinâmico, pontual (quando o capacitor de fluxo permite) e com vasta experiência em resolução de paradoxos temporais. Guitarrista talentoso com domínio de técnicas avançadas de shredding antes mesmo de serem inventadas. Experiente em lidar com figuras históricas, direção defensiva de veículos modificados e skate urbano. Nota: Não me chame de frangote.",

      experience: [
        {
          id: 1,
          date: "1985 – Presente",
          company: "The Pinheads",
          role: "Guitarrista Principal",
          description:
            'Composição e performance de Rock \'n\' Roll. Responsável pela audição da "Batalha das Bandas" (mesmo sendo considerado "barulhento demais" por alguns juízes).'
        },
        {
          id: 2,
          date: "1955",
          company: "Baile Encanto sob o Mar",
          role: "Músico Substituto (Guitarra)",
          description:
            "Substituição emergencial do guitarrista Marvin Berry. Responsável pela introdução cultural do gênero Heavy Metal trinta anos antes do previsto."
        },
        {
          id: 3,
          date: "1885",
          company: "Consultoria de Segurança Hill Valley (Velho Oeste)",
          role: "Assistente de Ferreiro",
          description:
            'Auxílio técnico em engenharia ferroviária improvisada e mediação de conflitos com a gangue de Buford "Cachorro Louco" Tannen.'
        },
        {
          id: 4,
          date: "1985",
          company: "Indústrias Biffco",
          role: "Sobrevivente Urbano",
          description:
            "Gestão de crises em ambientes distópicos e recuperação de artefatos esportivos (almanaques) para restauração da ordem cronológica."
        }
      ],

      education: [
        {
          id: 1,
          year: "1986",
          institution: "Hill Valley High School",
          type: "Ensino Médio Completo",
          description: "Foco em Artes e Música."
        },
        {
          id: 2,
          year: "1955",
          institution: "Cultural Hill Valley",
          type: "Intercâmbio",
          description:
            "Estudos intensivos sobre dinâmicas sociais da década de 50 e etiqueta de lanchonetes."
        },
        {
          id: 3,
          year: "1985",
          institution: "Engenharia Aplicada",
          type: "Workshop",
          description:
            "Treinamento prático em sistemas de 1.21 Gigawatts e mecânica de DeLorean (sob mentoria do Dr. Emmett Brown)."
        },
        {
          id: 4,
          year: "2015",
          institution: "Mobilidade Urbana Futurista",
          type: "Treinamento",
          description:
            "Curso intensivo de pilotagem de Hoverboard em superfícies sólidas (atenção: pranchas não funcionam na água sem potência extra)."
        }
      ],

      contact: {
        address: "Lyon Estates, Hill Valley, CA.",
        email: "contato@delorean.com",
        phone: "+55 (88) 9999 0000",
        phoneLink: "+558899990000"
      }
    };
  }
}).mount("#app");
