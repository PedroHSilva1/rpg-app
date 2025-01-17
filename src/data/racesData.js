export const races = [
    {
      id: 1,
      nome: "Humano",
      image: require("../assets/images/racesImages/humano.jpg"),
      descricao: `  Nos confins da maioria dos mundos, os humanos são a mais jovem das raças comuns, chegando mais tarde no cenário mundial e com uma vida curta, se comparados aos anões, elfos e dragões.

  Talvez seja por causa de suas vidas mais curtas que eles se esforcem para alcançar o máximo que podem nos anos que têm.

  Ou talvez eles sintam que têm algo a provar às raças mais antigas, e é por esta razão que eles constroem seus poderosos impérios através da conquista e do comércio.

  O que quer que os motive, os humanos são os inovadores, os realizadores e os pioneiros dos mundos. `,
      traits: ["Determinação", "Versatilidade"],
      
    },
    {
      id: 2,
      nome: "Elfo",
      image: require("../assets/images/racesImages/elfo.jpg"),
      descricao: `  Elfos são um povo mágico de graça sobrenatural, vivendo no mundo sem pertencer inteiramente à ele. 
      
  Eles vivem em lugares de beleza etérea, no meio de antigas florestas ou em torres prateadas brilhando com luz feérica, onde uma música suave ecoa através do ar e fragrâncias suaves flutuam na brisa.
  
  Elfos amam a natureza e a magia, a arte e o estudo, a música e a poesia, e as coisas boas do mundo.`,
      traits: ["Visão no Escuro", "Graça Élfica"],
     
    },
    {
      id:201,
      nome:"Elfo da Floresta",
      descricao:` Como um elfo da floresta, você possui sentidos e intuição aguçados, seus pés ágeis guiam-no rápida e furtivamente através de suas florestas nativas.
      
  Os elfos da floresta (também chamados de elfos selvagens, elfos verdes ou elfos do bosque) são reclusos e desconfiados dos não elfos.

  A pele dos elfos da floresta tende a ser de matiz cobreada, algumas vezes com traços esverdeados. Seu cabelo geralmente é castanho ou negro, mas ocasionalmente podem ser loiros ou cor de cobre. Seus olhos são verdes, castanhos ou cor de avelã. `,
      subRaceOf:2,
      traits: ["Máscara da Natureza","Pés Ligeiros"]
    },
    {
      id:202,
      nome:"Elfo Negro (Drow)",
      descricao:` Descendentes de uma antiga sub-raça de elfos de pele negra, os drow foram banidos da superfície do mundo por seguirem a deusa Lolth pelo caminho do mal e corrupção.

Agora, eles construíram sua própria civilização nas profundezas do Subterrâneo, moldados pelo Caminho de Lolth.
      
Também conhecidos como elfos negros, os drow possuem pele negra similar a obsidiana polida e cabelos brancos opacos ou amarelo pálido.
      
Normalmente eles possuem olhos muito pálidos (tão pálidos que são confundidos com olhos brancos) com tons de lilás, prata, rosa, vermelho e azul. Eles costumam ser menores e mais magros que a maioria dos elfos. Aventureiros drow são raros e a raça não existe em todo o mundo. Verifique com seu Mestre se a raça drow está disponível como personagem de jogador. `,
      subRaceOf:2,
      traits: ["Sensibilidade à Luz Solar","Magia Drow"]
    },
    {
      id: 3,
      nome: "Anão",
      image: require("../assets/images/racesImages/anao.jpg"),
      descricao: `  Uma injustiça cometida contra um anão é uma ofensa para todo seu clã. 
      
  O que começa como uma busca por vingança de um único anão, pode se tornar a ambição de todo um clã. `,
      traits: ["Visão no Escuro", "Graça Élfica"],
     
    },
    {
      id: 301,
      nome: "Anão da Colina",
      descricao: ` Como um anão da colina, você tem sentidos aguçados, maior intuição e notável resiliência. `,
      subRaceOf:3,
      traits: ["Tenacidade Anã"],
     
    },
    {
      id: 302,
      nome: "Anão da Montanha",
      descricao: `Como um anão da montanha, você é forte e resistente, acostumados a uma vida difícil em terrenos difíceis. Você, provavelmente tem a descendência daqueles mais altos (para um anão) e tende a possuir uma coloração mais clara. `,
      subRaceOf:3,
      traits: ["Treinamento Anão com Armaduras"],
     
    },
    {
      id: 4,
      nome: "Halfling",
      image: require("../assets/images/racesImages/halfling.jpg"),
      descricao: `  Os confortos de um lar são os objetivos da maioria dos halflings: um lugar para viver em paz e sossego, longe de monstros saqueadores e embates de exércitos, com um fogo aceso e uma refeição generosa, e também uma bebida fina e boa conversa.

  Embora alguns halflings vivam seus dias em remotas comunidades agrícolas, outros formam bandos nômades que viajam constantemente, atraídos pela estrada afora e o vasto horizonte para descobrir as maravilhas de novas terras e povos.

  Mas mesmo esses halflings andarilhos amam a paz, a comida, uma lareira e um lar, mesmo que o lar seja em uma carruagem, empurrada ao longo de uma estrada de terra, ou uma balsa flutuando rio abaixo. `,
      traits: ["Visão no Escuro", "Graça Élfica"],
     
    },
    {
      id:401 ,
      nome: "Pés Leves",
      descricao: `  Como um halfling pés-leves, você pode esconder-se facilmente, mesmo usando apenas outras pessoas como cobertura. Você geralmente é afável e se dá muito bem com os outros. Nos Reinos Esquecidos, os halflings pésleves espalharam-se até os lugares mais distantes e são a variedade mais comum.

  Pés-leves são mais propensos à vontade de viajar do que os outros halflings, e muitas vezes vivem ao lado de outras raças ou levam uma vida nômade. No mundo de Greyhawk, estes halflings são chamados pés-peludos ou companheiros altos. `,
      subRaceOf:4,
      traits: ["Furtividade Natural"],
     
    },
    {
      id:402 ,
      nome: "Robusto",
      descricao: `Um halfling robustos é mais resistente do que a média de sua raça e possui certa resistência aos venenos. Alguns dizem que os robustos têm sangue dos anões.`,
      subRaceOf:4,
      traits: ["Resiliência dos Robustos"],
     
    },
    {
      id: 5,
      nome: "Draconato",
      image: require("../assets/images/racesImages/draconato.jpg"),
      descricao: `  Descendentes de dragões, como seus nomes demonstram, os draconatos andam orgulhosamente pelo mundo que os saúda com um temor incompreensível.

  Moldados por deuses dracônicos ou pelos próprios dragões, draconatos originalmente nasceram de ovos de dragão como uma raça única, combinando os melhores atributos de dragões e humanos.

  Alguns draconatos são servos fieis de dragões verdadeiros, outros formas as fileiras de soldados em grandes guerras e ainda existem os que encontram-se à toa, sem um objetivo claro na vida. `,
      traits: ["Visão no Escuro", "Graça Élfica"],
     
    },
    {
      id: 6,
      nome: "Gnomo",
      image: require("../assets/images/racesImages/gnomo.jpg"),
      descricao: `  Um zumbido constante de atividades permeia a vizinhança onde os gnomos formam suas comunidades privadas.

  Barulhos estrondosos pontuam o zumbido: um tilintar de engrenagens moendo aqui, uma pequena explosão ali, um grito de surpresa ou comemoração e, principalmente, muitas gargalhadas.

  Gnomos regozijam a vida, apreciando cada momento de invento, exploração, investigação, criação e brincadeira. `,
      traits: ["Visão no Escuro", "Graça Élfica"],
     
    },
    {
      id:601 ,
      nome: "Gnomo da Floresta",
      descricao: `Como um gnomo da floresta, você possui um traquejo natural com ilusões e velocidade e furtividade naturais.
      
Gnomos da floresta são raros e reservados. Eles vivem em comunidades escondidas em florestas silvestres, usando suas ilusões e truques para se
      esconderem das ameaças ou para mascarar sua fuga antes de serem detectados.

 Gnomos da floresta tendem a ser amigáveis com outros povos da floresta espirituosos e eles tem nos elfos e fadas bondosas como seus mais importantes aliados. Os gnomos também fazem amizade com pequenos animais silvestres e contam com eles para obter informações sobre ameaças que estejam perambulando por suas terras. `,
      subRaceOf:6,
      traits: ["Ilusionista Nato","Falar com Bestas Pequenas"],
     
    },
    {
      id:602 ,
      nome: "Gnomo das Rochas",
      descricao: `Como um gnomo das rochas, você possui uma inventividade e resistência naturais acima dos outros gnomos. A maioria dos gnomos são gnomos das rochas`,
      subRaceOf:6,
      traits: ["Conhecimento de Artífice","Engenhoqueiro"],
     
    },
    {
      id: 7,
      nome: "Meio-Elfo",
      image: require("../assets/images/racesImages/meioelfo.jpg"),
      descricao: `  Vagando entre dois mundos mas, na verdade, não pertencendo a nenhum dos dois, meio-elfos combinam o que alguns dizem ser as melhores qualidades dos seus parentes elfos e humanos: a curiosidade, inventividade e ambição humanas temperadas pelos sensos refinados, amor a natureza e gostos artísticos dos elfos.

  Alguns meio-elfos vivem entre os humanos, separados por suas diferenças emocionais e físicas, vendo seus amigos e amores envelhecer enquanto o tempo malmente os toca.

  Outros vivem entre os elfos, crescendo impacientes à medida que atingem a maturidade nos reinos élficos intermináveis, enquanto seus amigos continuam a viver como crianças.

  Muitos meio-elfos, incapazes de se encaixar em nenhuma dessas sociedades, escolhem uma vida solitária, vagando ou se juntando a outros desafortunados e adentrando uma vida de aventura. `,
      traits: ["Visão no Escuro", "Graça Élfica"],
     
    },
    {
      id: 8,
      nome: "Meio-Orc",
      image: require("../assets/images/racesImages/meioorc.jpg"),
      descricao: `  Quer estejam unidos sob a liderança de um poderoso bruxo ou estejam lutando por um impasse após anos de conflito, tribos orcs e humanas as vezes formam alianças, unindo forças em uma vasta horda para o pavor das terras civilizadas próximas.

  Quando essas alianças são seladas através do casamento, os meio-orcs nascem.

  Alguns meio-orcs crescem e se tornam orgulhosos comandantes de tribos orcs, seu sangue humano concedem a eles um diferencial perante seus rivais orcs de sangue puro.

  Alguns arriscam sair pelo mundo para provar seu valor entre os humanos e outras raças mais civilizadas.

  Muitos desses se tornam aventureiros, adquirindo renome pelos seus poderosos feitos e notoriedade por seus costumes bárbaros e fúria selvagem. `,
      traits: ["Visão no Escuro", "Graça Élfica"],
     
    },
    {
      id: 9,
      nome: "Tiefling",
      image: require("../assets/images/racesImages/tiefling.jpg"),
      descricao: `  Ser recebido com olhares e cochichos, sofrer violência e insultos nas ruas, ver a desconfiança e medo em cada olhar: esse é o fardo do tiefling.

  E para completar tudo, os tieflings sabem que isso é graças ao pacto feito gerações atrás que infundiu a essência de Asmodeus – senhor supremo dos Nove Infernos – em sua linhagem.

  Sua aparência e natureza não é culpa deles, mas é o resultado de um pecado ancestral, pelo qual eles, seus filhos e os filhos de seus filhos serão eternamente responsabilizados. `,
      traits: ["Visão no Escuro", "Graça Élfica"],
     
    }

]