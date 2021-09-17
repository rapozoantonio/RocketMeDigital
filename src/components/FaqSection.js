import React from "react";

const FaqSection = () => {
  return (
    <section className="faq_area bg_color sec_pad">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 pr_50">
            <div className="faq_tab">
              <h4 className="f_p t_color3 f_600 f_size_22 mb_40">
                Navegação Rápida
              </h4>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="digital-tab"
                    data-toggle="tab"
                    href="#digital"
                    role="tab"
                    aria-controls="digital"
                    aria-selected="true"
                  >
                    Presença Digital
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="ecomm-tab"
                    data-toggle="tab"
                    href="#ecomm"
                    role="tab"
                    aria-controls="ecomm"
                    aria-selected="false"
                  >
                    Ecommerce
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="orgtraff-tab"
                    data-toggle="tab"
                    href="#orgtraff"
                    role="tab"
                    aria-controls="orgtraff"
                    aria-selected="false"
                  >
                    Tráfego Orgânico
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="paytraff-tab"
                    data-toggle="tab"
                    href="#paytraff"
                    role="tab"
                    aria-controls="paytraff"
                    aria-selected="false"
                  >
                    Tráfego Pago
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="tab-content faq_content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="digital"
                role="tabpanel"
                aria-labelledby="digital-tab"
              >
                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">
                  Entenda a importância da presença digital para o seu negócio
                </h3>
                <div id="accordion">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          O que a presença digital significa para você?
                          <i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Sua “presença digital” se refere a como você ou seu
                        negócio aparecem online; é o que as pessoas encontram
                        quando procuram por você ou seu negócios na internet.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Quais são os benefícios de uma presença digital?
                          <i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <ul>
                          <li>Maior Audiência</li>
                          <li>Maior Acessibilidade</li>
                          <li>Gerar Mais Confiança</li>
                          <li>Publicidade Gratuita</li>
                          <li>Construção de Marca</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Como posso melhorar minha presença digital?
                          <i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <ul>
                          <li>Complete seus perfis sociais</li>
                          <li>Inclua links para amostras dos seus trabalhos</li>
                          <li>Utilize as recomendações do LinkedIn</li>
                          <li>
                            Adicione links sociais à sua assinatura de e-mail
                          </li>
                          <li>
                            <strong>
                              Dica Bônus: Considere a criação de um blog ou site
                              pessoal
                            </strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingfour">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapsefour"
                          aria-expanded="false"
                          aria-controls="collapsefour"
                        >
                          Como verifico minha presença digital?
                          <i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapsefour"
                      className="collapse"
                      aria-labelledby="headingfour"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Comece examinando o seu nome ou de seu negócio em vários
                        mecanismos de pesquisa para ver o que aparece nos
                        resultados. Experimente o Google, Bing, Yahoo e
                        DuckDuckGo. Quando você estiver pesquisando no Google,
                        lembre-se de fazê-lo enquanto estiver desconectado de
                        suas contas do Google.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="ecomm"
                role="tabpanel"
                aria-labelledby="ecomm-tab"
              >
                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">
                  Como criar um ecommerce
                </h3>
                <div id="accordion3">
                  <div className="card">
                    <div className="card-header" id="heading10">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#collapse10"
                          aria-expanded="true"
                          aria-controls="collapse10"
                        >
                          O que é um ecommerce e como funciona?
                          <i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse10"
                      className="collapse show"
                      aria-labelledby="heading10"
                      data-parent="#accordion3"
                    >
                      <div className="card-body">
                        E-commerce é a compra e venda de bens e serviços pela
                        Internet. O comércio eletrônico pode ser um substituto
                        para as lojas físicas, embora algumas empresas optem por
                        manter ambas.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading11">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse11"
                          aria-expanded="false"
                          aria-controls="collapse11"
                        >
                          Qual é a importância do ecommerce?
                          <i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse11"
                      className="collapse"
                      aria-labelledby="heading11"
                      data-parent="#accordion3"
                    >
                      <div className="card-body">
                        O comércio eletrônico é uma grande parte da economia e é
                        vital para as empresas que vendem seus produtos ou
                        serviços online. O comércio eletrônico oferece às
                        empresas a capacidade de alcançar mais clientes.Com
                        tantas pessoas fazendo suas compras online e utilizando
                        a internet, é o mercado de crescimento mais rápido.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading12">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse12"
                          aria-expanded="false"
                          aria-controls="collapse12"
                        >
                          O que é um ecommerce na prática?
                          <i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse12"
                      className="collapse"
                      aria-labelledby="heading12"
                      data-parent="#accordion3"
                    >
                      <div className="card-body">
                        Um e-commerce é um espaço digital que pode vender
                        produtos e serviços variados por meio da internet. Nesse
                        tipo de negócio, o atendimento e o processo de compra
                        podem ser feitos virtualmente, garantindo mais
                        comodidade e praticidade para o consumidor.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading13">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse13"
                          aria-expanded="false"
                          aria-controls="collapse13"
                        >
                          Por que ter um E-commerce?<i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse13"
                      className="collapse"
                      aria-labelledby="heading13"
                      data-parent="#accordion3"
                    >
                      <div className="card-body">
                        Com uma loja virtual e uma boa logística, os clientes
                        podem estar em qualquer lugar do mundo. Para tanto, é
                        indicado ampliar a variedade de canais pelos quais o
                        consumidor pode se comunicar com a empresa.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading14">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse14"
                          aria-expanded="false"
                          aria-controls="collapse14"
                        >
                          Por que investir em e-commerce para o meu negócio?
                          <i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse14"
                      className="collapse"
                      aria-labelledby="heading14"
                      data-parent="#accordion3"
                    >
                      <div className="card-body">
                        Vender o seu produto a partir de um plataforma de
                        comércio eletrônico permite que você obtenha informações
                        valiosas sobre seus clientes e adapte seu marketing e
                        seleção de produtos de acordo com as reais necessidades
                        do cliente. Com a estratégia certa, você pode avaliar e
                        medir a eficácia de seus canais de vendas, mix de
                        produtos e engajamento, superando a concorrência.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="orgtraff"
                role="tabpanel"
                aria-labelledby="orgtraff-tab"
              >
                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">
                  O que é tráfego orgânico e como você pode aproveitá-lo?
                </h3>
                <div id="accordion4">
                  <div className="card">
                    <div className="card-header" id="heading15">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#collapse15"
                          aria-expanded="true"
                          aria-controls="collapse15"
                        >
                          O que é tráfego orgânico?<i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse15"
                      className="collapse show"
                      aria-labelledby="heading15"
                      data-parent="#accordion4"
                    >
                      <div className="card-body">
                        O termo “tráfego orgânico” é usado para se referir aos
                        visitantes que chegam ao seu site como resultado de
                        resultados de pesquisas não pagas (“orgânicas”). O
                        tráfego orgânico é o oposto do tráfego pago, que define
                        as visitas geradas por anúncios pagos. Os visitantes
                        considerados orgânicos encontram o seu site após usar um
                        mecanismo de busca como o Google ou o Bing, portanto,
                        não são “encaminhados” por nenhum outro site.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading16">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse16"
                          aria-expanded="false"
                          aria-controls="collapse16"
                        >
                          Por que o tráfego orgânico é importante?
                          <i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse16"
                      className="collapse"
                      aria-labelledby="heading16"
                      data-parent="#accordion4"
                    >
                      <div className="card-body">
                        Os usuários que visitam seu site a partir dos resultados
                        orgânicos de um mecanismo de pesquisa têm uma intenção
                        muito específica e, se você puder fornecer a eles uma
                        solução ou responder à sua pergunta, eles têm maior
                        probabilidade de converter.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading17">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse17"
                          aria-expanded="false"
                          aria-controls="collapse17"
                        >
                          O tráfego orgânico é melhor que o tráfego pago?
                          <i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse17"
                      className="collapse"
                      aria-labelledby="heading17"
                      data-parent="#accordion4"
                    >
                      <div className="card-body">
                        O tráfego orgânico é amplamente considerado a fonte de
                        tráfego mais valiosa por ser a fonte mais confiável para
                        quem está pesquisando uma compra ou serviço. A
                        desvantagem da pesquisa orgânica é que leva tempo para
                        ser indexado e realmente começar a gerar tráfego a
                        partir dessa origem.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading18">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse18"
                          aria-expanded="false"
                          aria-controls="collapse18"
                        >
                          Como posso saber se um site tem tráfego orgânico?
                          <i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse18"
                      className="collapse"
                      aria-labelledby="heading18"
                      data-parent="#accordion4"
                    >
                      <div className="card-body">
                        Existem várias ferramentas de verificação de tráfego
                        gratuitas e pagas que você pode usar. Dito isso, vamos
                        dar uma olhada nas melhores ferramentas para verificar
                        quanto tráfego um site recebe.
                        <ul>
                          <li>SEMRush</li>
                          <li>SimilarWeb</li>
                          <li>Google Search Console</li>
                          <li>Serpstat</li>
                          <li>Ahrefs</li>
                          <li>MonsterInsights</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading19">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse19"
                          aria-expanded="false"
                          aria-controls="collapse19"
                        >
                          Tráfego orgânico vs Tráfego direto
                          <i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse19"
                      className="collapse"
                      aria-labelledby="heading19"
                      data-parent="#accordion4"
                    >
                      <div className="card-body">
                        Tráfego orgânico é qualquer tráfego que vem de
                        mecanismos de pesquisa e é obtido, não pago. O tráfego
                        direto a um site ocorre quando um visitante chega
                        diretamente a um site, sem ter clicado em um link de
                        outro site ou utilizado mecanismos de pesquisa.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="paytraff"
                role="tabpanel"
                aria-labelledby="paytraff-tab"
              >
                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">
                  O que significa tráfego pago?
                </h3>
                <div id="accordion6">
                  <div className="card">
                    <div className="card-header" id="heading24">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#collapse24"
                          aria-expanded="true"
                          aria-controls="collapse24"
                        >
                          O tráfego pago vale a pena?<i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse24"
                      className="collapse show"
                      aria-labelledby="heading24"
                      data-parent="#accordion6"
                    >
                      <div className="card-body">
                        Quando se trata de publicidade, o tráfego pago tem
                        muitos benefícios e pode ajudar você e seu negócio a
                        melhorar sua exposição e conversões. Um dos muitos
                        benefícios do tráfego pago é o fato de ser praticamente
                        instantâneo. Você pode configurar uma campanha de
                        anúncios pagos em questão de minutos e colocá-la em
                        execução instantaneamente.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading25">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse25"
                          aria-expanded="false"
                          aria-controls="collapse25"
                        >
                          Como funciona o tráfego pago?
                          <i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse25"
                      className="collapse"
                      aria-labelledby="heading25"
                      data-parent="#accordion6"
                    >
                      <div className="card-body">
                        No tráfego pago, você recebe visitas dos clientes que
                        pagou por promoções de publicidade. Você pode acessar
                        serviços de tráfego pago de diversas plataformas, como
                        mecanismos de pesquisa ou plataformas de mídia social.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading26">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse26"
                          aria-expanded="false"
                          aria-controls="collapse26"
                        >
                          Você deveria comprar fontes de tráfego pago para seu
                          site?
                          <i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse26"
                      className="collapse"
                      aria-labelledby="heading26"
                      data-parent="#accordion6"
                    >
                      <div className="card-body">
                        Simplificando, sim, mas há algumas exceções; Existem
                        vários tipos de tráfego pago, sendo os principais o
                        tráfego de anúncios e o marketing pago por clique.
                        Embora ambos possam fornecer excelentes resultados para
                        o seu negócio e gerar muito tráfego, ambos também estão
                        sujeitos a altos níveis de fraude. A única maneira de
                        impedir esse tipo de fraude é se a rede de anunciantes
                        melhorar sua detecção de fraude, o que é muito
                        improvável de acontecer. Isso deixa você com duas
                        opções: continuar comprando impressões na esperança de
                        obter um clique ou investir em um tipo diferente de
                        tráfego pago que lhe forneça melhores resultados.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FaqSection;
