const arvoresEvolutivas = [
	undefined, // nao evolui
	[[1, 2, 3], ['Level 16', 'Level 32'], [`../../../pictures/evolutionSprites/rareCandy.png`, `../../../pictures/evolutionSprites/rareCandy.png`]], // Linha evolutiva bulbassaur
	[[4, 5, 6], ['Level 16', 'Level 36'], [`../../../pictures/evolutionSprites/rareCandy.png`, `../../../pictures/evolutionSprites/rareCandy.png`]], // Linha evolutiva charmander
	[[7, 8, 9], ['Level 16', 'Level 36'], [`../../../pictures/evolutionSprites/rareCandy.png`, `../../../pictures/evolutionSprites/rareCandy.png`]], // Linha evolutiva squirtle
	[[10, 11, 12], ['Level 7', 'Level 10'], [`../../../pictures/evolutionSprites/rareCandy.png`, `../../../pictures/evolutionSprites/rareCandy.png`]], // Linha evolutiva caterpie
	[[13, 14, 15], ['Level 7', 'Level 10'], [`../../../pictures/evolutionSprites/rareCandy.png`, `../../../pictures/evolutionSprites/rareCandy.png`]], // Linha evolutiva weedle
	[[16, 17, 18], ['Level 18', 'Level 36'], [`../../../pictures/evolutionSprites/rareCandy.png`, `../../../pictures/evolutionSprites/rareCandy.png`]], // Linha evolutiva pidgey
	[[19, 20], ['Level 20'], [`../../../pictures/evolutionSprites/rareCandy.png`, `../../../pictures/evolutionSprites/rareCandy.png`]], // Linha evolutiva rattata
	[[21, 22], ['Level 20'], [`../../../pictures/evolutionSprites/rareCandy.png`, `../../../pictures/evolutionSprites/rareCandy.png`]], // Linha evolutiva spearow
	[[23, 24], ['Level 22'], [`../../../pictures/evolutionSprites/rareCandy.png`, `../../../pictures/evolutionSprites/rareCandy.png`]], // linha evolutiva ekans
	[[25, 26], ['Pedra do raio'], [`../../../pictures/evolutionSprites/thunderStone.png`]], // linha evolutiva pikachu
	[[27, 28], ['Level 22'], [`../../../pictures/evolutionSprites/rareCandy.png`]], // linha evolutiva sandslash
	[[29, 30, 31], ['Level 16', 'Pedra da lua'], [`../../../pictures/evolutionSprites/rareCandy.png`, `../../../pictures/evolutionSprites/moonStone.png`]],
	[[32, 33, 34], ['Level 16', 'Pedra da lua'], [`../../../pictures/evolutionSprites/rareCandy.png`, `../../../pictures/evolutionSprites/moonStone.png`]],
	[[35, 36], ['Pedra da lua'], [`../../../pictures/evolutionSprites/moonStone.png`]],
	[[37, 38], ['Pedra do fogo'], [`../../../pictures/evolutionSprites/fireStone.png`]],
	[[39, 40], ['Pedra da lua'], [`../../../pictures/evolutionSprites/moonStone.png`]],
	[[41, 42], ['Level 22'], [`../../../pictures/evolutionSprites/rareCandy.png`]],
	[[43, 44, 45], ['Level 21', 'Pedra da folha'], [`../../../pictures/evolutionSprites/rareCandy.png`, `../../../pictures/evolutionSprites/leafStone.png`]],
	[[46, 47], ['Level 21'], [`../../../pictures/evolutionSprites/rareCandy.png`]],
	[[48, 49], ['Level 34'], [`../../../pictures/evolutionSprites/rareCandy.png`]],
	[[50, 51], ['Level 26'], [`../../../pictures/evolutionSprites/rareCandy.png`]],
	[[52, 53], ['Level 28'], [`../../../pictures/evolutionSprites/rareCandy.png`]],
	[[54, 55], ['Level 33'], [`../../../pictures/evolutionSprites/rareCandy.png`]],
	[[56, 57], ['Level 28'], [`../../../pictures/evolutionSprites/rareCandy.png`]],
	[[58, 59], ['Pedra do fogo'], [`../../../pictures/evolutionSprites/fireStone.png`]],
	[[60, 61, 62], ['Level 25', 'Pedra da água'], [`../../../pictures/evolutionSprites/rareCandy.png`, `../../../pictures/evolutionSprites/waterStone.png`]],
	[[63, 64, 65], ['Level 16', 'Troca'], [`../../../pictures/evolutionSprites/rareCandy.png`, `../../../pictures/evolutionSprites/tradeSprite.jpg`]],
	[[66, 67, 68], ['Level 28', 'Troca'], [`../../../pictures/evolutionSprites/rareCandy.png`, `../../../pictures/evolutionSprites/tradeSprite.jpg`]],
	[[69, 70, 71], ['Level 21', 'Pedra da folha'], [`../../../pictures/evolutionSprites/rareCandy.png`, `../../../pictures/evolutionSprites/leafStone.png`]],
	[[72, 73], ['Level 30'], [`../../../pictures/evolutionSprites/rareCandy.png`]],
	[[74, 75, 76], ['Level 25', 'Troca'], [`../../../pictures/evolutionSprites/rareCandy.png`, `../../../pictures/evolutionSprites/tradeSprite.jpg`]],
	[[77, 78], ['Level 40'], [`../../../pictures/evolutionSprites/rareCandy.png`]],
	[[79, 80], ['Level 32'], [`../../../pictures/evolutionSprites/rareCandy.png`]],
	[[81, 82], ['Level 30'], [`../../../pictures/evolutionSprites/rareCandy.png`]],
	[[84, 85], ['Level 31'], [`../../../pictures/evolutionSprites/rareCandy.png`]],
	[[86, 87], ['Level 34'], [`../../../pictures/evolutionSprites/rareCandy.png`]],
	[[88, 89], ['Level 38'], [`../../../pictures/evolutionSprites/rareCandy.png`]],
	[[90, 91], ['Pedra da água'], [`../../../pictures/evolutionSprites/waterStone.png`]],
	[[92, 93, 94], ['Level 25', 'Troca'], [`../../../pictures/evolutionSprites/rareCandy.png`, `../../../pictures/evolutionSprites/tradeSprite.jpg`]],
	[[96, 97], ['Level 26'], [`../../../pictures/evolutionSprites/rareCandy.png`]],
	[[98, 99], ['Level 28'], [`../../../pictures/evolutionSprites/rareCandy.png`]],
	[[100, 101], ['Level 30'], [`../../../pictures/evolutionSprites/rareCandy.png`]],
	[[102, 103], ['Pedra da folha'], [`../../../pictures/evolutionSprites/leafStone.png`]],
	[[104, 105], ['Level 28'], [`../../../pictures/evolutionSprites/rareCandy.png`]],
	[[109, 110], ['Level 35'], [`../../../pictures/evolutionSprites/rareCandy.png`]],
	[[111, 112], ['Level 42'], [`../../../pictures/evolutionSprites/rareCandy.png`]],
	[[116, 117], ['Level 32'], [`../../../pictures/evolutionSprites/rareCandy.png`]],
	[[118, 119], ['Level 33'], [`../../../pictures/evolutionSprites/rareCandy.png`]],
	[[120, 121], ['Pedra da água'], [`../../../pictures/evolutionSprites/waterStone.png`]],
	[[129, 130], ['Level 20'], [`../../../pictures/evolutionSprites/rareCandy.png`]],
	[[133, 134, 135, 136], ['Pedra da agua', 'Pedra do raio', 'Pedra do fogo'],
	[`../../../pictures/evolutionSprites/waterStone.png`, `../../../pictures/evolutionSprites/thunderStone.png`, `../../../pictures/evolutionSprites/fireStone.png` ]],
	[[133, 134], ['Pedra da agua'], [`../../../pictures/evolutionSprites/waterStone.png`]],
	[[133, 135], ['Pedra do raio'], [`../../../pictures/evolutionSprites/thunderStone.png`]],
	[[133, 136], ['Pedra do fogo'], [`../../../pictures/evolutionSprites/fireStone.png`]],
	[[138, 139], ['Level 40'], [`../../../pictures/evolutionSprites/rareCandy.png`]],
	[[140, 141], ['Level 40'], [`../../../pictures/evolutionSprites/rareCandy.png`]],
	[[147, 148, 149], ['Level 30', 'Level 55'], [`../../../pictures/evolutionSprites/rareCandy.png`, `../../../pictures/evolutionSprites/rareCandy.png`]],
]

const dadosAuxiliares = []

dadosAuxiliares[0] = [arvoresEvolutivas[0],
`
???
`]

dadosAuxiliares[1] = [arvoresEvolutivas[1],
`
Há uma semente de planta em sua parte 
traseira desde o dia de seu nascimento. 
A semente cresce lentamente.
`]

dadosAuxiliares[2] = [arvoresEvolutivas[1],
`
A luz solar fará a flor em suas costas 
crescer. Conforme Ivysaur for crescendo, 
essa flor irá desabrochar. Ela irá soltar 
um doce aroma quando florescer.
`]

dadosAuxiliares[3] = [arvoresEvolutivas[1],
`
Há uma grande flor nas costas do Venusaur. 
A flor tem cores vivas está sempre em 
abundância de nutrição e luz solar. 
O aroma da flor acalma as emoções das pessoas.
`]

dadosAuxiliares[4] = [arvoresEvolutivas[2],
`
Charmander, Pokémon Lagarto, desde de 
seu nascimento Charmander possui uma 
chama que queima na ponta de sua cauda. 
Essa chama simboliza sua alegria e saúde, 
se ela se apagar, Charmander morrerá.
`]

dadosAuxiliares[5] = [arvoresEvolutivas[2],
`
Charmeleon impiedosamente destrói seus
inimigos usando suas garras afiadas. Se
encontrar um inimigo forte, ele se torna 
agressivo. Nesse estado excitado, a chama 
na ponta de sua cauda brilha com uma cor 
branca azulada.
`]

dadosAuxiliares[6] = [arvoresEvolutivas[2],
`
Charizard voa pelo céu em busca de
oponentes poderosos. Ele respira um
calor tão grande que derrete qualquer
coisa. No entanto, nunca dá um sopro
ardente a qualquer oponente mais fraco
que ele.
`]

dadosAuxiliares[7] = [arvoresEvolutivas[3],
`
A concha de Squirtle não é apenas usada
para proteção. A forma arredondada da
concha e as ranhuras na superfície ajudam 
a minimizar a resistência na água,permitindo 
que este Pokémon nade em alta velocidade
`]

dadosAuxiliares[8] = [arvoresEvolutivas[3],
`
Sua cauda é grande e coberta com um
pêlo rico e grosso. A cauda torna-se cada
vez mais profunda na cor à medida que
Wartortle envelhece. Os arranhões em
Sua concha são uma evidência da dureza
deste Pokémon como um lutador.
`]

dadosAuxiliares[9] = [arvoresEvolutivas[3],
`
Blastoise tem bicos de água que se
projetam de sua concha. Os bicos de
água são muito precisos. Eles podem
disparar balas de água com precisão
suficiente para atingir latas vazias 
a uma distância de mais de 60 metros.
`]

dadosAuxiliares[10] = [arvoresEvolutivas[4],
`
Caterpie tem um apetite voraz. Ele pode
devorar folhas maiores que seu corpo
diante dos seus olhos. De sua antena,
este Pokémon libera um odor terrivelmente 
forte.
`]

dadosAuxiliares[11] = [arvoresEvolutivas[4],
`
A concha que cobre o corpo deste
Pokémon é tão dura quanto uma laje de
ferro. Metapod não se move muito. Ele
fica parado porque está preparando suas
entranhas suaves para a evolução dentro
da casca dura.
`]

dadosAuxiliares[12] = [arvoresEvolutivas[4],
`
Butterfree tem uma capacidade superior
para procurar mel delicioso de flores.
Pode até procurar, extrair e transportar
mel de flores que estão desabrochando a
mais de 10 quilômetros do ninho.
`]

dadosAuxiliares[13] = [arvoresEvolutivas[5],
`
Weedle tem um olfato extremamente agudo. 
Ele é capaz de distinguir seus tipos 
favoritos de folhas daqueles de que não
gosta, apenas farejando] com sua grande 
tromba vermelha (nariz
`]

dadosAuxiliares[14] = [arvoresEvolutivas[5],
`
Kakuna permanece praticamente imóvel enquanto 
se agarra a uma árvore. No entanto, por dentro, 
é extremamenteocupado, enquanto se prepara para 
a sua evolução futura. Isso é evidente pelo quão 
quente a concha fica ao ser tocada.
`]

dadosAuxiliares[15] = [arvoresEvolutivas[5],
`
Beedrill é extremamente territorial. Ninguém 
deve se aproximar de seu ninho, isso é para 
sua própria segurança. Se irritados, eles 
atacarão em um enxame furioso.
`]

dadosAuxiliares[16] = [arvoresEvolutivas[6],
`
Pidgey tem um senso de direção
extremamente nítido. Ela é capaz de
voltar para o seu ninho de forma infalível,
por mais longe que possa ser removida
de seu ambiente familiar.
`]

dadosAuxiliares[17] = [arvoresEvolutivas[6],
`
Pidgeotto reivindica uma grande área
como seu próprio território. Este Pokémon
voa, patrulhando seu espaço de vida. Se
seu território é violado, não mostra
piedade de punir completamente o
inimigo com suas garras afiadas.

`]

dadosAuxiliares[18] = [arvoresEvolutivas[6],
`
Este Pokémon tem uma plumagem
deslumbrante de penas maravilhosamente
brilhantes. Muitos treinadores são
cativados pela impressionante beleza das
penas em sua cabeça, obrigando-os a
escolher Pidgeot como seu Pokémon.
`]

dadosAuxiliares[19] = [arvoresEvolutivas[7],
`
Seus dentes crescem continuamente ao
longo de sua vida. Se seus incisivos
ficarem muito longos, esse Pokémon se
torna incapaz de comer e morre de fome.
`]

dadosAuxiliares[20] = [arvoresEvolutivas[7],
`
As presas fortes de Raticate crescem
constantemente. Para mantê-los
triturados, roem pedras e troncos. Pode
até mastigar as paredes das casas. Seus
bigodes são essenciais para manter o seu
equilíbrio. Não importa o quão amigável
você seja, ele ficará com raiva e o
morderá se tocar em seus bigodes.
`]

dadosAuxiliares[21] = [arvoresEvolutivas[8],
`
Seu grito alto pode ser ouvido a mais de
800 metros de distância. Se seu grito alto e
agudo for ouvido ecoando por toda parte, é
um sinal de que eles estão alertando um ao
outro sobre o perigo.
`]

dadosAuxiliares[22] = [arvoresEvolutivas[8],
`
Não há nenhum problema em voar
continuamente por um dia inteiro
carregando uma carga pesada. O medo é
reconhecido pelo pescoço longo e pelo bico
alongado. Eles são convenientemente
modelados para capturar presas no solo ou
na água. Ele habilmente move seu bico
longo e magro para colher presas.
`]

dadosAuxiliares[23] = [arvoresEvolutivas[9],
`
Ekans se enrola em espiral enquanto
descansa. Assumindo essa posição, ele
pode responder rapidamente a uma ameaça
de qualquer direção com um brilho na
cabeça erguida. Quanto mais velho fica,
mais cresce. A noite, envolve seu corpo
comprido em volta dos galhos das árvores
para descansar.
`]

dadosAuxiliares[24] = [arvoresEvolutivas[9],
`
Este Pokémon é terrivelmente forte para
contrair as coisas com seu corpo. Pode até
achatar tambores de óleo de aço. Uma vez
que Arbok envolve seu corpo em torno de
seu inimigo, é impossível escapar do abraço
esmagador.
`]

dadosAuxiliares[25] = [arvoresEvolutivas[10],
`
É de sua natureza armazenar eletricidade.
Ele se sente estressado de vez em quando
se não conseguir descarregar. Completamente 
sua eletricidade.
`]

dadosAuxiliares[26] = [arvoresEvolutivas[10],
`
A medida que a eletricidade se acumula
dentro de seu corpo, ela se torna mais
agressiva. Uma teoria é que o acúmulo de
eletricidade está realmente causando
estresse.

`]

dadosAuxiliares[27] = [arvoresEvolutivas[11],
`
Sandshrew tem uma pele muito seca que é
extremamente resistente. Ele pode rolar
virando uma bola que repele qualquer
ataque do inimigo. A noite, ele se enterra
na areia do deserto para dormir.
`]

dadosAuxiliares[28] = [arvoresEvolutivas[11],
`
O corpo do Sandslash é coberto por pontas
duras, que são seções endurecidas de sua
pele. Uma vez por ano, os picos antigos
caem, para serem substituídos por novos
picos que crescem por baixo dos antigos.
Graças às suas garras grossas, é bom em
escalar árvores. Existem muitos Sandslash
que se estacionam nas árvores e vão
dormir.
`]

dadosAuxiliares[29] = [arvoresEvolutivas[12],
`
Suas farpas altamente tóxicas se
desenvolveram como proteção para este
Pokémon de corpo pequeno. Quando
enfurecido, libera uma toxina horrível do
chifre.
`]

dadosAuxiliares[30] = [arvoresEvolutivas[12],
`
Quando Nidorina está com seus amigos ou
famiíliares, eles mantêm suas farpas
afastadas para evitar se machucar. Este
Pokémon parece ficar nervoso se separado
dos outros. A fêmea tem um temperamento
Suave. Emite gritos ultrassônicos que têm o
poder de confundir os inimigos.
`]

dadosAuxiliares[31] = [arvoresEvolutivas[12],
`
O corpo de Nidoqueen é envolvido em
escamas extremamente duras. É hábil em
enviar inimigos voando com agressões
severas. Este Pokémon é mais forte quando
defende seus filhotes. Se ficar excitada, as
agulhas se arrepiam para fora.
`]

dadosAuxiliares[32] = [arvoresEvolutivas[13],
`
O Nidoran macho desenvolveu músculos
para mover seus ouvidos. Graças a eles, os
ouvidos podem ser movidos livremente em
qualquer direção. Mesmo o menor som não
escapa à atenção deste Pokémon.
`]

dadosAuxiliares[33] = [arvoresEvolutivas[13],
`
Seu chifre é mais duro que um diamante.
Se sente uma presença hostil, todas as
farpas nas costas se arrepiam de uma só
vez e desafia o inimigo com toda a sua
força. Ele tem uma disposição violenta e
apunhala os inimigos com seu chifre, que
exala veneno após o impacto.
`]

dadosAuxiliares[34] = [arvoresEvolutivas[13],
`
A cauda grossa de Nidoking possui poder
enormemente destrutivo. Com um balanço,
pode derrubar uma torre de transmissão de
metal. Uma vez que este Pokémon se
enfurece, não há como detê-lo.
`]

dadosAuxiliares[35] = [arvoresEvolutivas[14],
`
Em todas as noites de lua cheia, eles saeem
para brincar. Quando o amanhecer chega,
os cansados Clefairy's dormem aninhados
um no outro em montanhas profundas e
tranquilas. Voa usando as asas nas costas
para coletar o luar. Este Pokémon é difícil
de ser encontrado.
`]

dadosAuxiliares[36] = [arvoresEvolutivas[14],
`
Clefable usa suas asas para pular
levemente, como se estivesse voando. Seu
passo saltitante permite que ele ande sobre
a água. Nas noites tranquilas e iluminadas
pelo luar; passeia pelos lagos. Sua audição
é tão aguda que pode ouvir um alfinete cair
a mais de 800 metros de distância. Um
tímido Pokémon de fada que raramente é
visto, ele corre e se esconde a todo
momento em que sente a presença de
pessoas.
`]

dadosAuxiliares[37] = [arvoresEvolutivas[15],
`
Dentro do corpo de Vulpix queima uma
chama que nunca se apaga. Durante o dia,
quando as temperaturas aumentam, este
Pokémon libera chamas da boca para
impedir que seu corpo fique muito quente.
A medida que se desenvolve, sua única
cauda branca ganha cor e se divide em
seis. E bastante quente e fofinho.
`]

dadosAuxiliares[38] = [arvoresEvolutivas[15],
`
Ninetales lança uma luz sinistra de seus
olhos vermelhos brilhantes para obter
controle total sobre a mente de seu inimigo.
Diz-se que este Pokémon vive por mil anos.
Diz a lenda que Ninetales surgiu quando
nove bruxos possuindo poderes sagrados se
fundiram em um só. Este Pokémon é
altamente inteligente - ele pode entender a
fala humana.
`]

dadosAuxiliares[39] = [arvoresEvolutivas[16],
`
Quando este Pokémon canta, nunca pára
para respirar. Se estiver em uma batalha
contra um oponente que não adormeça
facilmente, o Jigglypuff não pode respirar,
colocando em risco sua vida. Ele cativa os
inimigos com seus enormes olhos redondos
e os leva a dormir cantando uma melodia
Ssuave.
`]

dadosAuxiliares[40] = [arvoresEvolutivas[16],
`
Wigglytuff tem olhos grandes como pires. A
superfície dos olhos está sempre coberta
por uma fina camada de lágrimas. Se
alguma poeira entrar nos olhos do
Pokémon, ela será rapidamente removida.
O corpo de Wigglytuff é muito flexível. Ao
inalar profundamente, este Pokémon pode
se inflar aparentemente sem fim. Uma vez
inflado, o Wigglytuff salta levemente como
um balão.
`]

dadosAuxiliares[41] = [arvoresEvolutivas[17],
`
O Zubat permanece silenciosamente imóvel
em um local escuro durante o dia claro.
Isso ocorre porque a exposição prolongada
ao sol faz com que seu corpo se torne
ligeiramente queimado. Não tem globos
oculares, por isso não pode ver. Ele verifica
seus arredores através das ondas
ultrassônicas que emite da boca.
`]

dadosAuxiliares[42] = [arvoresEvolutivas[17],
`
Suas presas perfuram facilmente até peles
grossas de animais. Adora se deliciar com o
sangue das pessoas e dos Pokémon. Ele
voa na escuridão e ataca por trás. Uma vez
que começa a sugar sangue, ele não para
até ficar cheio. Voa à noite em busca de
presas.
`]

dadosAuxiliares[43] = [arvoresEvolutivas[18],
`
Oddish procura solo fértil e rico em
nutrientes para se plantar. Durante o dia,
enquanto é plantado, acredita-se que os
pés deste Pokémon mudam de forma e se
tornam semelhantes às raízes das árvores,
além de suas folhas ficarem mais
brilhantes. Se exposto ao luar; ele começa a
se mover. Anda por toda parte à noite para
espalhar suas sementes.
`]

dadosAuxiliares[44] = [arvoresEvolutivas[18],
`
Gloom libera uma fragrância suja do pistilo
de sua flor. Quando confrontado com o
perigo, o fedor piora. Se este Pokémon
estiver calmo e seguro, ele não liberará seu
aroma fedido habitual. Ele secreta um mel
pegajoso em sua boca, parecido com uma
baba. Embora doce, cheira muito repulsivo
para chegar muito perto.
`]

dadosAuxiliares[45] = [arvoresEvolutivas[18],
`
Suas pétalas são as maiores do mundo.
Espalha diabolicamente o pólen causador
de alergias de suas pétalas. Nas estações
em que produz mais pólen, o ar ao redor de
um Vileplume fica amarelo com o pó
enquanto caminha. O pólen é altamente
tóxico e causa paralisia.
`]

dadosAuxiliares[46] = [arvoresEvolutivas[19],
`
Paras tem cogumelos parasitas crescendo
nas costas, chamados 'tochukaso'. Eles
crescem grandes, atraindo nutrientes deste
Pokémon. Eles são altamente valorizados
como remédio para prolongar a vida
humana e dos Pokémon.
`]

dadosAuxiliares[47] = [arvoresEvolutivas[19],
`
O Parasect é conhecido por infestar grandes
árvores em massa e drenar nutrientes do
tronco e raízes inferiores. Quando uma
árvore infestada morre, elas se movem para
outra árvore ao mesmo tempo. O cogumelo
grande nas costas o controla. Muitas vezes
briga por território com os Shiinotic. Seus
esporos venenosos também são usados na
medicina tradicional.
`]

dadosAuxiliares[48] = [arvoresEvolutivas[20],
`
Diz-se que todo seu pelo fino e rígido, que
cobre todo o corpo, evoluiu para sua auto
proteção. Possui olhos grandes que nunca
deixam de detectar presas minúsculas. Vive
nas sombras de árvores altas onde come
insetos. É atraído pela luz durante a noite.
`]

dadosAuxiliares[49] = [arvoresEvolutivas[20],
`
As asas são cobertas com escamas
semelhantes a poeira. Toda vez que bate as
asas, perde poeira altamente tóxica. As
escamas que cobrem suas asas são
codificadas por cores para indicar os tipos
de veneno que ela possui. E um Pokémon
que só se torna ativo à noite. Suas presas
favoritas são pequenos insetos que se
reúnem em torno das luzes da rua, atraídos
pela luz na escuridão.
`]

dadosAuxiliares[50] = [arvoresEvolutivas[21],
`
Diglett são criados na maioria das fazendas.
O motivo é simples: onde quer que esse
Pokémon se enterre, o solo fica
perfeitamente cultivado para qualquer
plantação. Este solo é ideal para o cultivo
de vegetais deliciosos. Viaja através de
túneis que escava no subsolo. Odeia a luz
do sol e só sai depois que o sol se põe.
`]

dadosAuxiliares[51] =  [arvoresEvolutivas[21],
`
Dugtrio são na verdade trigêmeos que
emergiram de um corpo. Como resultado,
cada trigêmeo pensa exatamente como os
outros dois trigêmeos. Eles trabalham
cooperativamente para escavar sem parar.
Extremamente poderosos, eles podem
cavar até o solo mais difícil a uma
profundidade de mais de 100 quilômetros.
`]

dadosAuxiliares[52] = [arvoresEvolutivas[22],
`
Meowth retira suas garras afiadas em suas
patas para esqueirar-se lentamente sem dar
Dassos incriminadores. Por alguma razão,
este Pokémon adora moedas brilhantes que
brilham com luz. Ele adora moedas, então,
se você der uma, poderá fazer amizade com
Meowth facilmente. Mas é inconstante,
então você não pode contar com essa
amizade duradoura.
`]

dadosAuxiliares[53] = [arvoresEvolutivas[22],
`
Persian tem seis bigodes ousados que lhe
conferem uma aparência de resistência. Os
bigodes percebem os movimentos do ar
para determinar o que há nas proximidades
do Pokémon. Torna-se dócil se agarrado
pelos bigodes. Tem um temperamento
violento. Ele atacará qualquer coisa que
olhe nos olhos. Suas garras afiadas causam
feridas profundas.
`]

dadosAuxiliares[54] = [arvoresEvolutivas[23],
`
Psyduck usa um poder misterioso. Quando
faz isso, este Pokémon gera ondas cerebrais
que supostamente são vistas apenas em
pessoas que dormem. Essa descoberta
gerou polêmica entre os estudiosos.
Oprimido por habilidades enigmáticas, sofre
uma dor de cabeça constante.
`]

dadosAuxiliares[55] = [arvoresEvolutivas[23],
`
Golduck é o nadador mais rápido entre
todos os Pokémon. Nada sem esforço,
mesmo em um mar agitado e tempestuoso.
As vezes, resgata pessoas de navios —
naufragados que se debatem em alto mar. E
um excelente Pokémon salva vidas de
pessoas e Pokémon que estão em perigo no
mar!
`]

dadosAuxiliares[56] = [arvoresEvolutivas[24],
`
Quando Mankey começa a tremer e sua
respiração nasal fica áspera, é um sinal
claro de que está ficando com raíiva. No
entanto, como entra em uma fúria iminente
quase instantaneamente, é impossível
, alguém fugir de sua ira.
E extremamente mal-humorado. Grupos
deles atacarão qualquer alvo acessível sem
motivo.
`]

dadosAuxiliares[57] = [arvoresEvolutivas[24],
`
Quando Primeape fica furioso, sua
circulação sanguínea é aumentada. Por sua
vez, seus músculos são fortalecidos. No
entanto, também se torna muito menos
inteligente ao mesmo tempo. Os vasos
sanguíneos no cérebro são mais resistentes
que os de outros Pokémon, portanto, ele
pode permanecer saudável, apesar da
constante fúria.
`]

dadosAuxiliares[58] = [arvoresEvolutivas[25],
`
Growlithe tem um excelente olfato. Uma
vez que cheira qualquer coisa, este
Pokémon não esquece o perfume, não
importa o quê. Ele usa seu sentido olfativo
avançado para determinar as emoções de
outros seres vivos. Parece bonito, mas
quando você se aproxima do Growlithe de
outro treinador, ele latirá para você e o
morde.
`]

dadosAuxiliares[59] = [arvoresEvolutivas[25],
`
Arcanine é conhecido por sua alta
velocidade. Diz-se que é capaz de percorrer
mais de 10.000 quilômetros em um único
dia e noite. O fogo que arde violentamente
dentro do corpo deste Pokémon é sua fonte
de energia. Sua casca magnífica transmite
uma sensação de majestade. Quem o ouve
não pode deixar de rastejar diante dele.
`]

dadosAuxiliares[60] = [arvoresEvolutivas[26],
`
Poliwag tem uma pele muito fina. E possível
ver as entranhas em espiral do Pokémon
através da pele. Ainda não é muito bom
para caminhar. Seus treinadores devem
treinar esse Pokémon para andar todos os
dias. A direção do redemoinho em seus
estômagos difere dependendo de onde eles
moram. Os aficionados da Poliwag podem
diferenciá-los rapidamente.
`]

dadosAuxiliares[61] = [arvoresEvolutivas[26],
`
A superfície do corpo da Poliwhirl está
sempre molhada e escorregadia com um
fluido viscoso. Por causa dessa cobertura
escorregadia, ele pode facilmente
escorregar e deslizar para fora das garras
de qualquer inimigo em batalha. Ele marcha
sobre a terra em busca de Pokémon insetos
para comer. Em seguida, leva-os para
debaixo d'água para que eles possam
comer onde é seguro.
`]

dadosAuxiliares[62] = [arvoresEvolutivas[26],
`
Os músculos fortes e desenvolvidos do
Poliwrath nunca se cansam, por mais que
exercite. E tão incansavelmente forte que
este Pokémon pode nadar de um lado para
o outro sem esforço. Poliwrath na região de
Alola são nadadores fortes que usam o
peito. Muitas crianças aprendem a nadar
imitando Poliwrath.
`]

dadosAuxiliares[63] = [arvoresEvolutivas[27],
`
Abra precisa dormir dezoito horas por dia.
Caso contrário, este Pokémon perde sua
capacidade de usar poderes telecinéticos.
Se for atacado, Abra escapa usando o
Teleport enquanto ele ainda está dormindo.
Se decide se teletransportar aleatoriamente,
evoca a ilusão de que criou cópias de si
mesmo.
`]

dadosAuxiliares[64] = [arvoresEvolutivas[27],
`
Kadabra tem uma colher de prata na mão.
A colher é usada para amplificar as ondas
alfa em seu cérebro. Sem a colher, diz-se
que o Pokémon está limitado à metade da
quantidade usual de seus poderes
telecinéticos. Existe uma teoria de que este
Pokémon era um garoto que não conseguia
controlar seus poderes psíquicos e acabou
se transformando nesse Pokémon.
`]

dadosAuxiliares[65] = [arvoresEvolutivas[27],
`
O cérebro de Alakazam cresce
continuamente, multiplicando infinitamente
as células cerebrais. Este cérebro incrível dá
a este Pokémon um QI
surpreendentemente alto de 5.000. Ele tem
uma memória completa de tudo o que
ocorreu no mundo. Diz-se que as colheres
apertadas em suas mãos foram criadas por
seus poderes psíquicos.
`]

dadosAuxiliares[66] = [arvoresEvolutivas[28],
`
Os músculos de Machop são especiais, eles
nunca ficam doloridos, por mais que sejam
usados em exercícios. Este Pokémon tem
poder suficiente para arremeçar uma
centena de humanos adultos. E um
Pokémon fitness padrãozinho, adora malhar.
A medida que olha para os músculos, que
continuam a inchar dia após dia, torna-se
cada vez mais dedicado ao seu
treinamento.
`]

dadosAuxiliares[67] = [arvoresEvolutivas[28],
`
O Machoke realiza musculação todos os
dias, ao mesmo tempo em que ajuda
pessoas com trabalho duro, é exigente
fisicamente. Nos dias de folga, esse
Pokémon vai para os campos e montanhas
para se exercitar e treinar. Os músculos
completamente tonificados de Machoke
possuem a mesma dureza que a do aço.
`]

dadosAuxiliares[68] = [arvoresEvolutivas[28],
`
Machamp tem o poder de lançar qualquer
coisa de lado. No entanto, tentar fazer
qualquer trabalho que exija cuidado e
destreza faz com que seus braços se
enrosquem. Este Pokémon tende a entrar
em ação antes de pensar. Se ele agarra o
inimigo com seus quatro braços, a batalha
termina. O infeliz inimigo é jogado para
longe no horizonte.
`]

dadosAuxiliares[69] = [arvoresEvolutivas[29],
`
O corpo fino e flexível do Bellsprout permite
que ele se curve e balance para evitar
qualquer ataque, por mais forte que seja.
Da sua boca, este Pokémon cospe um fluido
corrosivo que derrete até ferro. Prefere
ambientes quentes e úmidos. É rápido em
capturar presas com suas videiras.
`]

dadosAuxiliares[70] = [arvoresEvolutivas[29],
`
Weepinbell tem um gancho grande na
extremidade traseira. A noite, o Pokémon se
conecta a um galho de árvore e vai dormir.
Se ele se move durante o sono, pode
acordar e se encontrar no chão. Quando
está com fome, engole qualquer coisa que
se mexa. Sua presa infeliz é dissolvida por
ácidos fortes.
`]

dadosAuxiliares[71] = [arvoresEvolutivas[29],
`
Victreebel tem uma longa videira que se
estende de sua cabeça. Esta videira é
ondulada e sacudida como se fosse um
animal para atrair presas. Quando uma
presa desavisada se aproxima, esse
Pokémon o engole inteiro. Atrai as presas
com o doce aroma do mel. Engolida inteira,
a presa é dissolvida em um dia, ossos e
tudo.
`]

dadosAuxiliares[72] = [arvoresEvolutivas[30],
`
O corpo do Tentacool é basicamente
composto de água. Se for removido do mar,
seca como pergaminho. Se este Pokémon
ficar desidratado, coloque-o novamente no
mar. Absorve a luz do sol e a refrata usando
água dentro de seu corpo para convertê-lo
em energia do feixe. Este Pokémon lança
raios do pequeno ór/%ãa redondo acima dos
olhos.
`]

dadosAuxiliares[73] = [arvoresEvolutivas[30],
`
Tentacruel tem grandes esferas vermelhas
em sua cabeça. Os orbes brilham antes de
atacar a vizinhança com uma forte explosão
ultrassônica. A explosão deste Pokémon cria
ondas violentas ao seu redor. Possui
tentáculos que podem ser livremente
alongados e encurtados à sua vontade. Ele
prende a presa com seus tentáculos e a
enfraquece, dosando-a com uma toxina
dura. Pode pegar até 80 presas ao mesmo
tempo.
`]

dadosAuxiliares[74] = [arvoresEvolutivas[31],
`
Quanto mais um Geodude vive, mais suas
bordas ficam lascadas e desgastadas,
tornando-a mais arredondada em sua
aparência. No entanto, o coração deste
Pokémon permanecerá duro e àáspero para
sempre. Geralmente é encontrado perto de
trilhas nas montanhas e afins. Se você pisar
em um por acidente, ele ficará com
bastante raiva.
`]

dadosAuxiliares[75] = [arvoresEvolutivas[31],
`
Rochas são a comida favorita de Graveler.
Este Pokémon escalará uma montanha da
base até o cume, banqueteando-se com
pedras o tempo todo. Ao atingir o pico, ele
volta ao fundo. Rola descidas para se
mover. Ele rola sobre qualquer obstáculo
sem diminuir a velocidade ou mudar de
direção.
`]

dadosAuxiliares[76] = [arvoresEvolutivas[31],
`
Golem vive nas montanhas. Se houver um
grande terremoto, esses Pokémon virão
rolando das montanhas em massa até o
sopé abaixo. Mesmo a dinamite não pode
prejudicar seu corpo duro e parecido com
uma rocha. Ele se esconde apenas uma vez
por ano. Quando Golem envelhece, eles
param de derramar suas conchas. Aqueles
que viveram muito, muito tempo têm
conchas verdes de musgo.
`]

dadosAuxiliares[77] = [arvoresEvolutivas[32],
`
Ponyta é muito fraco ao nascer mal
conseguindo se levantar. Este Pokémon se
torna mais forte tropeçando e caindo para
acompanhar seu pai. E capaz dar saltos
incrivelmente altos. Seus cascos e pernas
resistentes absorvem o impacto de um
pouso forçado.
`]

dadosAuxiliares[78] = [arvoresEvolutivas[32],
`
Rapidash geralmente pode ser visto
casualmente galopando nos campos e
planícies. No entanto, quando esse
Pokémon fica sério, suas crinas ardentes
brilham e brilham à medida que galopam
até 240 km/h. Adora correr. Se vir algo mais
rápido que ele, perseguirá em alta
velocidade.
`]

dadosAuxiliares[79] = [arvoresEvolutivas[33],
`
Slowpoke usa sua cauda para capturar
presas mergulhando-a na água ao lado de
um rio. No entanto, esse Pokémon
geralmente esquece o que está fazendo e
muitas vezes passa dias inteiros apenas
vagando à beira da água. Sua cauda longa
frequentemente se rompe. No entanto, ele
realmente não sente dor e a cauda volta a
crescer, então o Slowpoke não é
particularmente incomodado.
`]

dadosAuxiliares[80] = [arvoresEvolutivas[33],
`
A cauda de Slowbro tem um Shellder
firmemente preso com uma mordida. Como
resultado, a cauda não pode mais ser usada
para pescar. Isso faz com que Slowbro nade
de má vontade e pegue presas. Ele se abre
enquanto olha para o mar. Com o veneno
de Shellder fluindo através de seu corpo,
ele se torna ainda mais especial.
`]

dadosAuxiliares[81] = [arvoresEvolutivas[34],
`
Magnemite se liga às linhas de energia para
se alimentar de eletricidade. Se sua casa
tiver uma queda de energia, verifique seus
disjuntores. Você pode encontrar um
grande número desse Pokémon agarrado à
caixa de disjuntores. Flutua no ar emitindo
ondas eletromagnéticas das unidades em
seus lados. Essas ondas bloqueiam a
gravidade. Este Pokémon se torna incapaz
de flutuar se seu suprimento elétrico
interno estiver esgotado.
`]

dadosAuxiliares[82] = [arvoresEvolutivas[34],
`
Magneton emite uma força magnética
poderosa que é fatal para dispositivos
mecânicos. Como resultado, grandes
cidades soam sirenes para alertar os
cidadãos sobre surtos em larga escala deste
Pokémon. Na verdade, essa evolução são
três Magnemites ligados um no outro por
magnetismo. Um grupo pode desencadear
uma tempestade magnética.
`]

dadosAuxiliares[83] = [arvoresEvolutivas[0],
`
Eles vivem onde as plantas crescem.
Farfetch'd raramente são vistos, então
acredita-se que seus números estejam
entrando em extinção. Não pode viver sem
o nabo de alho-poró que segura. É por isso
que defende o caule dos atacantes com sua
vida.
`]

dadosAuxiliares[84] = [arvoresEvolutivas[35],
`
As duas cabeças de Doduo nunca dormem
ao mesmo tempo. Suas duas cabeças se
revezam no sono, para que uma sempre
possa vigiar os inimigos enquanto a outra
dorme. Suas asas curtas dificultam o vôo.
Em vez disso, este Pokémon corre em alta
velocidade com suas pernas desenvolvidas.
`]

dadosAuxiliares[85] = [arvoresEvolutivas[35],
`
Cuidado se as três cabeças de Dodrio
estiverem olhando em três direções
separadas. E um sinal claro de que está em
guarda. Não chegue perto deste Pokémon
Se ele estiver cauteloso, ele pode decidir
dar um selinho em você. Aparentemente, as
cabeças não são as únicas partes do corpo
que Dodrio possui três. Também possui três
conjuntos de corações e pulmões, sendo
capaz de percorrer longas distâncias sem
descanso.
`]

dadosAuxiliares[86] = [arvoresEvolutivas[36],
`
Seel caça presas no mar gelado sob as
camadas de gelo. Quando precisa respirar,
faz um buraco no gelo com a seção
acentuadamente saliente da cabeça. Graças
à sua gordura espessa, os mares frios não o
incomodam de forma alguma, mas se
cansam facilmente em águas mornas. Adora
condições de frio congelante. Aprecia nadar
em um clima frio de cerca de -14 graus ºF.
`]

dadosAuxiliares[87] = [arvoresEvolutivas[36],
`
Dewgong adora adormecer no gelo
amargamente frio. A visão deste Pokémon
dormindo em uma geleira foi erroneamente
considerada uma sereia por um marinheiro
há muito tempo. Adora tomar banhos de sol
na praia após as refeições. O aumento da
temperatura corporal ajuda na digestão. .
Todo o seu corpo é branco como a neve. E
um Pokémon imaculado pelo frio intenso,
por isso é apaixonado por águas geladas.
`]

dadosAuxiliares[88] = [arvoresEvolutivas[37],
`
O corpo lamacento e emborrachado de
Grimer pode ser forçado através de
qualquer abertura, por menor que seja.
Este Pokémon entra em canos de esgoto
para beber água suja. Feito de lodo
congelado. Cheira muito podre ao toca-lo.
Mesmo as ervas daninhas não crescerão em
`]

dadosAuxiliares[89] = [arvoresEvolutivas[37],
`
Do corpo de Muk escoa um fluido imundo
que emite um fedor horrível e dobrador de
nariz. Apenas uma gota do fluido corporal
deste Pokémon pode tornar uma piscina
estagnada e rançosa com seu insuportável
fedor. A comida favorita deste Pokémon é
algo repugnantemente e imundo. Nas
cidades sujas onde as pessoas pensam que
não jogam lixo nas ruas, Muk certamente se
reunirá.
`]

dadosAuxiliares[90] = [arvoresEvolutivas[38],
`
A noite, esse Pokémon usa sua língua larga
para cavar um buraco na areia do fundo do
mar e depois dormir nela. Enquanto dorme,
Shellder fecha sua concha, mas deixa a
língua para fora. A dureza de sua concha
supera a dureza de um diamante! Nos
tempos passados, as pessoas usavam as
conchas para fazer escudos.
`]

dadosAuxiliares[91] = [arvoresEvolutivas[38],
`
Cloyster é capaz de nadar no mar. Isso é
feito engolindo água e depois jateando em
direção à parte traseira. Este Pokémon
dispara espinhos de sua concha usando o
mesmo sistema. Sua casca dura não pode
ser quebrada, nem mesmo por uma bomba.
O conteúdo do shell permanece
desconhecido.
`]

dadosAuxiliares[92] = [arvoresEvolutivas[39],
`
Gastly é amplamente composto de matéria
gasosa. Quando exposto a um vento forte,
o corpo gasoso diminui rapidamente.
Grupos deste Pokémon agrupam-se sob os
beirais das casas para escapar da
devastação do vento.
`]

dadosAuxiliares[93] = [arvoresEvolutivas[39],
`
Haunter é um Pokémon perigoso. Se um
acena para você enquanto flutua na
escuridão, você nunca deve se aproximar
dele. Este Pokémon tentará lamber você
com a língua e roubar sua vida. É perigoso
Ssair sozinho nas noites em que você está se
sentindo triste. Haunter irá te pegar e você
não poderá voltar para casa. Tem medo da
luz e deleita-se com a escuridão. Pode estar
à beira da extinção em cidades que ficam
fortemente iluminadas à noite.
`]

dadosAuxiliares[94] = [arvoresEvolutivas[39],
`
As vezes, em uma noite escura, sua sombra
lançada por uma luz da rua repentina e
surpreendentemente o ultrapassa. Na
verdade, é um Gengar passando por você,
fingindo ser sua sombra. Se você se sentir
atacado por um calafrio repentino, é
evidência de um Gengar se aproximando
onde não há escapatória. Aparentemente,
deseja um companheiro de viagem. Como
já foi humano, tenta criar um vínculo
tirando a vida de outros humanos.
`]

dadosAuxiliares[95] = [arvoresEvolutivas[0],
`
Onix tem um Ímã em seu cérebro. Ele atua
como uma bússola para que este Pokémon
não perca a direção enquanto estiver em
tunelamento. A medida que envelhece, seu
corpo se torna cada vez mais redondo e
suave. Ao cavar o solo, absorve muitos
objetos duros. E isso que torna seu corpo
tão sólido. Ele perfura rapidamente o solo a
80 km/h, contorcendo e girando todo seu
corpo robusto e maciço.
`]

dadosAuxiliares[96] = [arvoresEvolutivas[40],
`
Se seu nariz coçar enquanto você dorme, é
um sinal claro de que um desses Pokémon
está em cima de seu travesseiro e tentará
comer seu sonho pelas narinas. Um
Pokémon que se nutre comendo sonhos
alheios, acredita-se que ele compartilha
ancestralidade comum com os Pokémon
Munna e Musharna.
`]

dadosAuxiliares[97] = [arvoresEvolutivas[40],
`
Hypno segura um pêndulo na mão. O
movimento de arco e o brilho do pêndulo
embalam o inimigo em um profundo estado
de hipnose. Enquanto este Pokémon
procura presas, ele pole o pêndulo. Embora
seja um Pokémon extremamente perígoso,
as pessoas que precisam de um bom sono
profundo o chamam de seu salvador.
Existem alguns Hypno que ajudam médicos
com pacientes que não conseguem dormir à
noite em hospitais.
`]

dadosAuxiliares[98] = [arvoresEvolutivas[41],
`
Krabby vive nas praias, escavadas dentro de
buracos cavados na areia. Em praias
arenosas com pouco alimento, esses
Pokémon podem ser vistos brigando entre
si por território. Suas pinças são excelentes
armas. As vezes eles se separam durante a
batalha, mas crescem rapidamente. Se
sentir o perigo se aproximando, ele se
esconde com bolhas da boca para
parecerem maiores e assustarem inimigos.
`]

dadosAuxiliares[99] = [arvoresEvolutivas[41],
`
Kingler tem uma garra forte e enorme. Ele
agita essa enorme garra no ar para se
comunicar com os outros. No entanto,
como a garra é muito pesada, o Pokémon
se cansa rapidamente. Uma garra cresceu
maciçamente e é tão dura quanto o aço.
Tem força de 10.000 cavalos de potência.
No entanto, é muito pesado.
`]

dadosAuxiliares[100] = [arvoresEvolutivas[42],
`
Voltorb foi avistado pela primeira vez em
uma empresa que fabrica PokéBolas. A
ligação entre esse avistamento e o fato
desse Pokémon ser muito semelhante a
uma Pokébola permanece um mistério.
Voltorb é extremamente sensível, explode
ao menor choque. Há rumores de que ele
foi criado quando uma Pokébola foi exposta
a um poderoso pulso de energia.
`]

dadosAuxiliares[101] = [arvoresEvolutivas[42],
`
O Electrode consome eletricidade na
atmosfera. Nos dias em que um raio atinge,
você pode ver este Pokémon explodindo em
todo o lugar por comer muita eletricidade.
Uma das características do Electrode é sua
atração pela eletricidade. E um Pokémon
problemático que se reúne principalmente
em usinas de energia elétrica para se
alimentar de eletricidade que acaba de ser
gerada.
`]

dadosAuxiliares[102] = [arvoresEvolutivas[43],
`
Seus seis ovos usam telepatia para se
comunicar entre si. Acredita-se que carrega
genes de plantas e os genes de outras
espécies. Embora sejam do mesmo
tamanho que outros Exeggcute, os
produzidos em Alola são bastante pesados.
Suas conchas estão cheias.
`]

dadosAuxiliares[103] = [arvoresEvolutivas[43],
`
O exeggutor veio originalmente dos
trópicos. Suas cabeças ficam cada vez
maiores com a exposição à forte luz do sol.
Diz-se que quando as cabeças caem, elas
se agrupam no chão para formar um
Exeggcute. Seus gritos são muito
barulhentos. Isso ocorre porque cada uma
de suas cabeças tem sua própria vontade e
pensam diferente. Eles usam a telepatia
para discutir seus planos antes de chegar a
uma decisão conjunta.
`]

dadosAuxiliares[104] = [arvoresEvolutivas[44],
`
O crânio que usa na cabeça é o de sua mãe
morta. Segundo alguns, ele evoluirá quando
chegar a um acordo com a dor de sua
morte. Ele sempre anseia pela mãe que
nunca mais o verá. Vendo uma semelhança
de sua mãe na lua cheia, ele chora. As
manchas no crânio que usa são de suas
lágrimas.
`]

dadosAuxiliares[105] = [arvoresEvolutivas[44],
`
Marowak é a forma evoluída de um Cubone
que superou sua tristeza pela perda de sua
mãe e se tornou um Pokémon durão. O
espírito temperado e endurecido deste
Pokémon não é facilmente quebrado.
Originalmente, era fraco e tímido. Após a
evolução, seu temperamento torna-se
violento e ele passa a usar os ossos como
armas.
`]

dadosAuxiliares[106] = [arvoresEvolutivas[0],
`
As pernas de Hitmonlee se contraem e se
esticam livremente. Usando essas pernas
de mola, ele se curva sobre os inimigos com
chutes devastadores. Após a batalha,
esfrega as pernas e relaxa os músculos
para superar a fadiga. Este Pokémon tem
um incrível senso de equilíbrio. Pode chutar
em sucessão a partir de qualquer posição.
`]

dadosAuxiliares[107] = [arvoresEvolutivas[0],
`
Diz-se que Hitmonchan possui o espírito de
um boxeador que estava trabalhando em
direção a um campeonato mundial. Este
Pokémon tem um espírito indomável e
nunca desistirá diante das adversidades.
Seus socos cortam o ar. Eles são lançados a
uma velocidade tão alta que até um leve
arranhão pode causar queimaduras.
`]

dadosAuxiliares[108] = [arvoresEvolutivas[0],
`
Sempre que o Lickitung se deparar com
algo novo, ele irá infalivelmente dar uma
lambida. Esse Pokémon memoriza as coisas
pela textura e pelo sabor. E um pouco
desconcertado por coisas azedas. Ser
lambido por sua lingua comprida e coberta
de saliva deixa uma sensação de
formigamento. Ao estender sua língua sua
cauda é retraída.
`]

dadosAuxiliares[109] = [arvoresEvolutivas[45],
`
Se Koffing ficar agitado, ele aumenta a
toxicidade de seus gases internos e os jorra
de todo o corpo. Este Pokémon também
pode inflar demais seu corpo redondo e
explodir. Koffing contém substâncias
tóxicas. Ele mistura as toxinas com o lixo
bruto para desencadear uma reação
química que resulta em um gás venenoso
terrivelmente poderoso. Quanto mais alta a
temperatura, mais gás é fabricado por este
Pokémon.
`]

dadosAuxiliares[110] = [arvoresEvolutivas[45],
`
Weezing adora os gases emitidos pelo lixo
podre da cozinha. Este Pokémon encontrará
uma casa suja e mal cuidada e fará dela
seu lar. A noite, quando as pessoas da casa
estão dormindo, ele vai para o lixo. Weezing
encolhe e infla alternadamente seus corpos
gêmeos para misturar gases tóxicos em seu
interior. Quanto mais os gases são
misturados, mais poderosas as toxinas se
tornam. O Pokémon também se torna mais
apodrecido.
`]

dadosAuxiliares[111] = [arvoresEvolutivas[46],
`
Rhyhorn corre em linha reta, esemagando
tudo em seu caminho. Ele não se incomoda
nem mesmo se bater de cabeça em um
bloco de aço. Este Pokémon pode sentir um
pouco de dor com a colisão do dia seguinte,
no entanto. O cérebro de Rhyhorn é muito
pequeno. E tão denso que, ao correr, ele
esquece o motivo pelo qual começou a
funcionar. Parece que às vezes se lembra
quando destrói alguma coisa.
`]

dadosAuxiliares[112] = [arvoresEvolutivas[46],
`
O chifre de Rhydon pode esmagar até
diamantes não lapidados. Um golpe violento
de sua cauda pode derrubar um edifício. A
pele deste Pokémon é extremamente
resistente. Mesmo os golpes de canhão
diretos não deixam um arranhão. Rhydon
tem um chifre que serve de broca. E usado
para destruir rochas e pedregulhos. Este
Pokémon ocasionalmente bate em fluxos de
magma, mas a pele semelhante a uma
armadura o impede de sentir o calor.
`]

dadosAuxiliares[113] = [arvoresEvolutivas[0],
`
Chansey põôe ovos nutricionalmente
excelentes todos os dias. Os ovos são tão
delíciosos que são devorados fácil e
avidamente, mesmo por aquelas pessoas
que já perderam o apetite. Esses Pokémon
não são apenas corredores rápidos, mas
também são poucos em número, portanto,
qualquer pessoa que encontrar um, teve
muita sorte no mundo Pokémon.
`]

dadosAuxiliares[114] = [arvoresEvolutivas[0],
`
As vinhas de Tangela se quebram
facilmente se forem agarradas. Isso
acontece sem dor, permitindo uma fuga
rápida. As vinhas perdidas são substituidas
por vinhas recém-cultivadas no dia
seguinte. Sua identidade é obscurecida por
massas grossas vinhas azuis por cima de
todo o seu corpo. Diz-se que as vinhas
nunca param de crescer.
`]

dadosAuxiliares[115] = [arvoresEvolutivas[0],
`
Se você encontrar um jovem Kangaskhan
brincando sozinho, nunca deve perturbá-lo
ou tentar pegá-lo. A mãe do bebê Pokémon
com certeza está na área, e ela ficará
violentamente furiosa com você. Cria seus
filhotes na bolsa da barriga. Não fugirá de
nenhuma luta para manter seus filhotes
sempre protegidos.
`]

dadosAuxiliares[116] = [arvoresEvolutivas[47],
`
Horsea come pequenos insetos e musgo
das rochas. Se a corrente do oceano se
torna mais rápida, este Pokémon se ancora
enrolando sua cauda em rochas ou corais
para evitar que seja levado pela água. Se
Horsea perceber o perigo, ele irá borrifar
reflexivamente uma densa tinta preta de
sua boca e tentar escapar. Este Pokémon
nada batendo habilmente a barbatana de
suas costas.
`]

dadosAuxiliares[117] = [arvoresEvolutivas[47],
`
Seadra dorme depois de se contorcer entre
os galhos de coral. Aqueles que tentam
coletar corais são ocasionalmente picados
pelas farpas venenosas deste Pokémon,
caso não percebam. Seadra gera
redemoinhos girando todo seu corpo. Os
redemoinhos são fortes o suficiente para
engolir até barcos de pesca. Este Pokémon
enfraquece a presa com essas correntes, e
então a engole inteira.
`]

dadosAuxiliares[118] = [arvoresEvolutivas[48],
`
Goldeen é um Pokémon muito bonito com
barbatanas que ondulam elegantemente na
água. No entanto, não baixe a gquarda em
torno deste Pokémon, ele pode atingir você
com força com seu chifre. Goldeen adora
nadar livremente em rios e lagoas. Se um
desses Pokémon for colocado em um
aquário, ele irá quebrar até o vidro mais
grosso com um aríete de seu chifre e
escapar.
`]

dadosAuxiliares[119] = [arvoresEvolutivas[48],
`
No outono, os machos Seaking podem ser
vistos realizando danças de corte no leito
do rio para cortejar as fêmeas. Durante esta
temporada, a coloração do corpo deste
Pokémon fica mais bonita. Seaking é muito
protetor de seus ovos. O macho e a fêmea
se revezam para patrulhar o ninho e os
Oovos. A guarda de ovos por esses Pokémon
dura mais de um mês.
`]

dadosAuxiliares[120] = [arvoresEvolutivas[49],
`
A seção central de Staryu tem um órgão
denominado de núcleo que brilha em
vermelho vivo. Se você for a uma praia no
final do verão, os núcleos brilhantes desses
Pokémon parecem estrelas no céu. Staryu
aparentemente se comunica com as
estrelas no céu noturno piscando o núcleo
vermelho no centro de seu corpo. Se partes
de seu corpo forem rasgadas, este
Pokémon simplesmente regenera as peças
e membros que o faltam.
`]

dadosAuxiliares[121] = [arvoresEvolutivas[49],
`
]A seção central de Starmie (o núcleo) brilhantensamente em sete cores. Devido à sua
natureza luminosa, este Pokémon recebeu o
apelido de “a joia do mar“. Starmie nada na
água girando seu corpo em forma de
estrela como se fosse a hélice de um
navio.
`]

dadosAuxiliares[122] = [arvoresEvolutivas[0],
`
O Mr. Mime é um mestre da pantomima
(representação de uma história exclusivamente
através de gestos, exp]ressões faciais e movimentos
de uma dança ou drama Seus gestos e
movimentos convencem os observadores de
que algo invisível realmente existe. Uma vez
que os observadores estão convencidos, a
coisa invisível começa a existir como se
fosse real. A largura de suas mãos pode
não ser coincidência muitos cientistas
acreditam que suas palmas aumentaram
especificamente para pantomima.
`]

dadosAuxiliares[123] = [arvoresEvolutivas[0],
`
Scyther é incrivelmente rápido. Sua
velocidade incrível aumenta a eficácia das
foices gêmeas em seus antebraços. As
foices deste Pokémon são tão eficazes que
podem cortar troncos grossos com um
único golpe. Ele confunde sua presa com
seus movimentos rápidos de ninja. Então,
em um instante, ele os fende com suas
foices.
`]

dadosAuxiliares[124] = [arvoresEvolutivas[0],
`
Jynx caminha ritmicamente, balançando e
balançando os quadris como se estivesse
dançando. Seus movimentos são tão
atraentes que as pessoas que o veem são
compelidas a balançar os quadris sem se
preocupar com o que estão fazendo. Seus
gritos estranhos soam como linguagem
humana. Existem alguns músicos que
compôõem canções para Jynx cantar.
`]

dadosAuxiliares[125] = [arvoresEvolutivas[0],
`
Quando uma tempestade chega, gangues
deste Pokémon competem entre si para
escalar alturas que provavelmente serão
atingidas por raios. Algumas cidades do
mundo Pokémon usam Electabuzz no lugar
dos pára-raios. Metade de todos os apagões
repentinos são causados por Electabuzz se
reunindo em usinas de energia elétrica e
engolindo eletricidade.
`]

dadosAuxiliares[126] = [arvoresEvolutivas[0],
`
Na batalha, Magmar sopra chamas
intensamente quentes por todo o corpo
para intimidar seu oponente. As explosões
de fogo deste Pokémon criam ondas de
calor que incendiam a grama e as árvores
ao redor. Quando irritado, ele jorra fogo
brilhante por todo o corpo. Ele não se
acalma até que seu oponente seja reduzido
a cinzas.
`]

dadosAuxiliares[127] = [arvoresEvolutivas[0],
`
Pinsir é incrivelmente forte. Ele pode
agarrar um inimigo com o dobro de seu
peso em seus chifres e levantá-lo
facilmente. Os movimentos deste Pokémon
tornam-se lentos em locais frios. Ele agarra
sua presa com as pinças e as divide. Um
golpe sólido de seus chifres é suficiente
para partir uma grande árvore. Seu maior
rival em Alola é o Pokémon Vikavolt.
`]

dadosAuxiliares[128] = [arvoresEvolutivas[0],
`
Este Pokémon não fica satisfeito a menos
que esteja furioso o tempo todo. Se não
houver oponente para Tauros lutar, ele irá
atacar árvores grossas e derrubá-las para
se acalmar. Historicamente, pessoas em
áreas de todo o mundo montaram em
Tauros, mas dizem que a prática começou
em Alola. Quando está prestes a atacar,
chicoteia seu próprio corpo repetidamente
com suas três longas caudas. Uma vez que
mira em seu inimigo, ele faz uma investida
violenta.
`]

dadosAuxiliares[129] = [arvoresEvolutivas[50],
`
Magikarp é uma desculpa patética para um
Pokémon que só é capaz de bater e
espirrar. No entanto, é na verdade um
Pokémon muito resistente que pode
sobreviver em qualquer corpo d'água, não
importa o quão poluído esteja. Esse
comportamento levou os cientistas a
fazerem pesquisas sobre ele. Embora fraco
e indefeso, este Pokémon é incrivelmente
fértil. Eles existem em tantas multidões que
você logo se cansará de vê-los.
`]

dadosAuxiliares[130] = [arvoresEvolutivas[50],
`
Quando Magikarp evolui para Gyarados,
suas células cerebrais sofrem uma
transformação estrutural. Diz-se que essa
transformação é a culpada pela natureza
violenta desse Pokêmon. Depois que
Gyarados começa a se alastrar, seu sangue
ferozmente violento não se acalma até que
tenha queimado tudo. Existem registros do:
ataques deste Pokémon que duraram por
um mês inteiro. Conta-se a história de uma
cidade que irritou Gyarados. Antes do sol
nascer no dia seguinte, as chamas
consumiram totalmente a cidade, sem
deixar vestígios.
`]

dadosAuxiliares[131] = [arvoresEvolutivas[0],
`
As pessoas levaram Lapras quase à
extinção. A noite, diz-se que este Pokémon
canta melancolicamente enquanto busca o
que poucos outros de sua espécie ainda
permanecem. Sua alta inteligência permite
compreender a fala humana. Quando está
de bom humor, canta com sua bela voz.
Gosta de nadar com humanos nas costas.
Na região de Alola, é um importante meio
de transporte fluvial.
`]

dadosAuxiliares[132] = [arvoresEvolutivas[0],
`
Ditto reorganiza sua estrutura celular para
se transformar em outras formas. No
entanto, se tentar se transformar em algo
contando com sua memoória, esse Pokémon
consegue errar os detalhes. Com sua
surpreendente capacidade de metamorfose,
pode conviver com qualquer coisa. Ele não
se dá bem com seu colega Ditto. Ditto
aparentemente tem seus próprios pontos
fortes e fracos quando se trata de
transformações.
`]

dadosAuxiliares[133] = [arvoresEvolutivas[51],
`
Eevee tem uma composição genética
instável que sofre uma mutação repentina
devido ao ambiente em que vive. A
radiação de várias pedras evolutivas do
mundo Pokémon faz com que este
Pokémon evolua em várias formas e tipos.
`]

dadosAuxiliares[134] = [arvoresEvolutivas[52],
`
Vaporeon sofreu uma mutação espontânea
e cultivou barbatanas e brânquias que lhe
permitem viver debaixo d'água. Este
Pokémon tem a capacidade de controlar
livremente a água. Sua composição celular
é semelhante às moléculas de água. Como
resultado, não pode ser visto quando
derrete na água. Prefere praias bonitas.
`]

dadosAuxiliares[135] = [arvoresEvolutivas[53],
`
As células de Jolteon geram um baixo nível
de eletricidade. Esse poder é amplificado
pela eletricidade estática de sua pelagem,
permitindo que o Pokémon solte raios. O
pelo eriçado é feito de agulhas carregadas
com eletricidade. Um Pokémon sensível que
facilmente fica triste ou com raiva. Toda vez
que seu humor muda, ele cobra energia.
`]

dadosAuxiliares[136] = [arvoresEvolutivas[54],
`
O pelo macio de Flareon tem um objetivo
funcional, liberar calor no ar para que seu
corpo não fique excessivamente quente. A
temperatura corporal deste Pokémon pode
subir para um máximo de 1.650 graus
Fahrenheit. Quando pega presas ou
encontra berrys, sopra fogo nelas até que
estejam bem cozidas e depois as engole.
`]

dadosAuxiliares[137] = [arvoresEvolutivas[0],
`
Porygon é capaz de se reverter inteiramente
de volta aos dados do programa e entrar no
ciberespaço (espaço ]das comunicações por
redes de computação Este Pokémon é
protegido contra cópia, portanto não pode
ser duplicado por cópia. Foi construído há
20 anos por cientistas que sonhavam em
explorar o espaço. Seus sonhos ainda não
se realizaram.
`]

dadosAuxiliares[138] = [arvoresEvolutivas[55],
`
Omanyte é um dos Pokémon antigos e já
extintos que foram regenerados a partir de
fósseis por pessoas. Se atacado por um
inimigo, ele se retira dentro de sua casca
dura. Este Pokémon usa o ar armazenado
em sua concha para afundar e subir na
água e nada torcendo seus 10 tentáculos
de maneira inteligente.
`]

dadosAuxiliares[139] = [arvoresEvolutivas[55],
`
Omastar usa seus tentáculos para capturar
suas presas. Acredita-se que tenha se
extinguido porque sua concha ficou muito
grande e pesada, fazendo com que seus
movimentos se tornassem muito lentos e
pesados. Seus tentáculos são altamente
desenvolvidos como se fossem mãos e pés.
Assim que prende a presa, ela morde.
`]

dadosAuxiliares[140] = [arvoresEvolutivas[56],
`
Kabuto é um Pokémon que foi regenerado
a partir de um fóssil. No entanto, em
casos extremamente raros, exemplos
vivos foram descobertos. O Pokémon não
mudou em nada por 300 milhões de anos.
Este Pokémon foi extinto em praticamente
todos os lugares, exceto em algumas áreas 
específicas. Ele se protege com sua casca dura.
`]

dadosAuxiliares[141] = [arvoresEvolutivas[56],
`
Os Kabutops nadavam debaixo d'água
para caçar suas presas nos tempos
antigos. Aparentemente, o Pokémon
estava evoluindo de morador de água
para morar em terra, como é evidente
desde o início da mudança em suas
brânquias e pernas. Na água, ele enfia os
membros para se tornar mais compacto,
depois balança a concha para nadar
rápido.
`]

dadosAuxiliares[142] = [arvoresEvolutivas[0],
`
Aerodactyl é um Pokémon da era dos
dinossauros. Foi regenerado a partir de
material genético extraído de âmbar
Imagina-se que tenha sido o rei dos céus
nos tempos antigos. Usou suas presas de
serra para rasgar suas presas antes de
comê-las. Voa com gritos agudos.
`]

dadosAuxiliares[143] = [arvoresEvolutivas[0],
`
O dia típico de Snorlax consiste em nada
mais do que comer e dormir. E um
Pokémon tão dócil que há crianças que
usam sua barriga expansiva como um
lugar para brincar. Come quase 900 quilos
de comida todos os dias. Começa a
cochilar enquanto come e continua a
comer mesmo enquanto dorme. Até o
veneno de Muk não passa de uma pitada
de tempero na língua de Snorlax.
`]

dadosAuxiliares[144] = [arvoresEvolutivas[0],
`
Articuno é um Pokémon pássaro lendário
que pode controlar o gelo. O bater de
Suas asas esfria totalmente o ar. Como
resultado, diz-se que quando este
Pokémon voa, a neve cai. Com sua cauda
longa de trás, sua forma voadora é
magnífica. Congela a água que está
contida no ar do inverno e faz nevar.
`]

dadosAuxiliares[145] = [arvoresEvolutivas[0],
`
Zapdos é um Pokémon lendário de
pássaros que tem a capacidade de
controlar a eletricidade. Geralmente vive
em nuvens de trovoada. O Pokémon ganha 
poder se for atingido por raios. Diz-se 
que este Pokémon lendário pássaro aparece 
quando o céu fica escuro e os raios caem.
`]

dadosAuxiliares[146] = [arvoresEvolutivas[0],
`
Moltres é um Pokémon pássaro lendário
que tem a capacidade de controlar o
fogo. Se este Pokémon for ferido, é dito
que ele mergulha seu corpo no magma
derretido de um vulcão para queimar e
curar a si próprio. Diz-se que este
lendário Pokémon traz o início da
primavera para as terras invernais que o
visita. Moltres espalha brasas a cada
batida de suas asas. E uma visão
emocionante de se ver!
`]

dadosAuxiliares[147] = [arvoresEvolutivas[57],
`
Dratini muda constantemente e descama
sua pele velha. Faz isso porque a energia
da vida dentro de seu corpo aumenta
constantemente para atingir níveis
incontroláveis. Após uma luta de 10
horas, um pescador foi capaz de puxá-lo
e confirmar sua existência no mundo
Pokémon.
`]

dadosAuxiliares[148] = [arvoresEvolutivas[57],
`
Dragonair armazena uma enorme
quantidade de energia dentro de seu
corpo. Diz-se que altera as condições
climáticas nas proximidades,
descarregando energia dos cristais no
pescoço e na cauda. Diz-se que vive em
mares e lagos. Mesmo que não tenha
asas, foi visto voando ocasionalmente.
`]

dadosAuxiliares[149] = [arvoresEvolutivas[57],
`
Dragonite é capaz de circular o globo em
apenas 16 horas. E um Pokémon de bom
coração que leva navios perdidos e
afundando em uma tempestade à
segurança da terra. Diz-se que sua
inteligência corresponde à dos humanos.
`]

dadosAuxiliares[150] = [arvoresEvolutivas[0],
`
Mewtwo é um Pokémon que foi criado por
manipulação genética. No entanto,
embora o poder científico dos humanos
tenha criado o corpo desse Pokémon, eles
não conseguiram dotar Mewtwo de um
coração compassivo. Como suas
habilidades de batalha foram elevadas ao
nível máximo, ele pensa apenas em
derrotar seus inimigos, independente de
quem seja.
`]

dadosAuxiliares[151] = [arvoresEvolutivas[0],
`
Diz-se que Mew possui a composição
genética de todos os Pokémon. Ele é
capaz de se tornar invisível à vontade, por
isso evita a percepção, mesmo que se
aproxime das pessoas. Quando é visto
detalhadamente através de um microscópio, 
os cabelos curtos, finos e delicados 
deste Pokémon mítico podem ser vistos.
`]

export default dadosAuxiliares