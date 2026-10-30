<script setup>
import Header from './components/Header.vue'
import SobreMim from './components/SobreMim.vue'
import Experiencia from './components/Experiencia.vue'
import Formacao from './components/Formacao.vue'
import Contato from './components/Contato.vue'

const sobreMim = 'Jovem dinâmico, pontual (quando o capacitor de fluxo permite) e com vasta experiência em resolução de paradoxos temporais. Guitarrista talentoso com domínio de técnicas avançadas de shredding antes mesmo de serem inventadas. Experiente em lidar com figuras históricas, direção defensiva de veículos modificados e skate urbano. Nota: Não me chame de frangote.'

const experiencias = [
  {
    periodoEmpresa: '1985 – Presente | The Pinheads',
    cargo: 'Guitarrista Principal',
    descricao: 'Composição e performance de Rock \'n\' Roll. Responsável pela audição da "Batalha das Bandas" (mesmo sendo considerado "barulhento demais" por alguns juízes).'
  },
  {
    periodoEmpresa: '1955 – Baile Encanto sob o Mar',
    cargo: 'Músico Substituto (Guitarra)',
    descricao: 'Substituição emergencial do guitarrista Marvin Berry. Responsável pela introdução cultural do gênero Heavy Metal trinta anos antes do previsto.'
  },
  {
    periodoEmpresa: '1885 – Consultoria de Segurança Hill Valley (Velho Oeste)',
    cargo: 'Assistente de Ferreiro',
    descricao: 'Auxílio técnico em engenharia ferroviária improvisada e mediação de conflitos com a gangue de Buford "Cachorro Louco" Tannen.'
  },
  {
    periodoEmpresa: '1985 – Indústrias Biffco',
    cargo: 'Sobrevivente Urbano',
    descricao: 'Gestão de crises em ambientes distópicos e recuperação de artefatos esportivos (almanaques) para restauração da ordem cronológica.'
  }
]

const formacoes = [
  {
    periodoInstituicao: '1986 | Hill Valley High School',
    curso: 'Ensino Médio Completo',
    descricao: 'Foco em Artes e Música'
  },
  {
    periodoInstituicao: '1955 | Cultural Hill Valley',
    curso: 'Intercâmbio',
    descricao: 'Estudos intensivos sobre dinâmicas sociais da década de 50 e etiqueta de lanchonetes.'
  },
  {
    periodoInstituicao: '1985 | Engenharia Aplicada',
    curso: 'Workshop',
    descricao: 'Treinamento prático em sistemas de 1.21 Gigawatts e mecânica de DeLorean (sob mentoria do Dr. Emmett Brown).'
  },
  {
    periodoInstituicao: '2015 | Mobilidade Urbana Futurista',
    curso: 'Treinamento',
    descricao: 'Curso intensivo de pilotagem de Hoverboard em superfícies sólidas (atenção: pranchas não funcionam na água sem potência extra).'
  }
]

const contatos = [
  {
    tipo: 'ENDEREÇO',
    valor: 'Lyon Estates, Hill Valley, CA.'
  },
  {
    tipo: 'E-MAIL',
    valor: 'contato@delorean.com'
  },
  {
    tipo: 'TELEFONE',
    valor: '+55 (88) 9999 0000'
  }
]
</script>

<template>
  <div class="resume">
    <div class="resume__container">

      <Header
        nome="Marty McFly"
        subtitulo="Consultor de Cronologia e Especialista em Performance Musical"
      />

      <main class="resume__content">

        <div class="resume__left">
          <SobreMim :texto="sobreMim" />

          <Experiencia :experiencias="experiencias" />
        </div>

        <aside class="resume__right">
          <Formacao :formacoes="formacoes" />

          <Contato :contatos="contatos" />
        </aside>

      </main>

      <footer class="resume__footer">
        Copyright 2026 - todos os direitos reservados
      </footer>

    </div>
  </div>
</template>