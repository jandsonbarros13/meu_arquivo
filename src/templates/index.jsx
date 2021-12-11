import './styles.css'

function Home() {
  return (
    <>
      < div className="body">
        <div>
          <h1 className="titulo">Algoritimos de fila simples(Fifo)</h1>
          <p className="p1"> Uma fila é um tipo especial de lista linear em que as inserções são realizadas num extremo
            enquanto as remoções são feitas no outro.</p> O extremo em que os elementos são inseridos é
          denominado final da fila e aquele em que são removidos é denominado começo da fila.
          <p className="p2">A ordem de saída dos elementos corresponde diretamente à ordem de entrada dos mesmos
            na fila, de modo que os primeiros elementos que entram serão os primeiros a sair, caracterizando
            uma estrutura FIFO (First-In/First-Out).
            A palavra queue, da língua inglesa, significa fila. As duas operações básicas que
            uma fila suporta são:</p>
          <p className="p3">Assim como nas pilhas a manipulação é feita apenas nas extremidades da estrutura, não
            havendo inserção e remoção no meio dela, podemos implementar as filas de maneira estáticasequencial ou dinâmica-encadeada.
            Ao tentarmos implementar uma Fila Estática Sequencial, deparamos com dois problemas:
            as inserções são feitas sempre no fim da fila e as remoções no começo. Como é inviável
            o deslocamento de todos os elementos para a esquerda na remoção, existirão espaços em
            branco no início da fila que não podem ser reaproveitados, pois a inserção é sempre à direita;
            quando inserimos elementos até ela ficar cheia (fim=MAX), temos que não há mais
            possibilidades de inserção. Porém, mesmo que removamos todos os elementos, ainda
            assim ela vai achar que está cheia por não ter possibilidade de inserção e vazia por não
            ter mais elementos.</p>
          <p className="p4"> Para resolver o primeiro problema, podemos criar uma Fila Circular, em que, após o último
            elemento voltar para a primeira posição e se estiver disponível para inserção, podemos colocar
            mais elementos.</p>
          <p className="p5"> O segundo problema, para descobrir se a Fila está cheia ou vazia, basta criar um contador de
            elementos e, se estiver zerado, é porque a fila está vazia e, se estiver com MAX, ela está cheia.
            Sendo assim, a melhor solução também é implementar apenas com alocação DinâmicaEncadeada. Para criarmos uma Fila Dinâmica, ainda vamos usar a notação na qual cada
            elemento da Fila será um nó contendo um dado e o endereço do próximo nó da Fila através de
            Listas Simplesmente Encadeadas. Porém, a Fila, por ser uma estrutura FIFO, deve manipular as
            duas extremidades (começo e final), pois as inserções são feitas no final da Fila e as remoções
            no começo. Além disso, usaremos um contador para armazenar a quantidade de elementos que
            a Fila possui.</p>
        </div>
        <div className="container">
          <h1>Veja também pipeline</h1>
          <p>Bastante importante para o conteudo a pipeline, consiste em uma cadeia de elementos de processamento - processos, threads, funções - dispostos de modo que a saída de cada elemento seja a entrada do próximo; Geralmente, uma certa quantidade de buffer é fornecida entre elementos consecutivos.</p>
          <p>Confira nos proximos blogs.</p>
        </div>
      </div>
      <div className="rodape">
        <aside className="contatos">
          <h2> Contato:</h2>
          <li><a href="https://www.facebook.com/jandson.barros.73/">Facebook</a></li>
          <li><a href="https://www.instagram.com/pedrobarros0/">Instagram</a></li>
        </aside>

      </div>
    </>


  );
}

export default Home;
