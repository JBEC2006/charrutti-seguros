/**
 * Glosario de seguros.
 *
 * Migrado íntegro de /glosario.html del sitio actual: 107 términos. En el sitio
 * del cliente esta página existe, no está en ningún menú, y se llega solo desde
 * un link suelto de la home. Es contenido bueno que nadie encuentra.
 *
 * QUÉ SE TOCÓ
 * -----------
 * Solo erratas y puntuación: "po la Compañìa" → "por la compañía", "loas
 * consecuencias" → "las consecuencias", "riego" → "riesgo", "Cia." → "compañía",
 * mayúsculas sostenidas y espacios dobles. Las definiciones no se reescriben:
 * son términos técnicos y cambiar la redacción cambia el significado.
 *
 * QUÉ NO SE TOCÓ Y HAY QUE REVISAR
 * --------------------------------
 * Varias definiciones citan la ley 17.418, que es la Ley de Seguros ARGENTINA,
 * no la uruguaya. Otra menciona la "Superintendencia de Seguros y Reaseguros",
 * que tampoco es el regulador uruguayo —acá es la Superintendencia de Servicios
 * Financieros del BCU—. Y una lista impuestos argentinos (ingresos brutos, tasa
 * de superintendencia).
 *
 * Es casi seguro que el glosario original se armó a partir de una fuente
 * argentina. No se corrige por nuestra cuenta: no podemos verificar cuál es la
 * cita uruguaya equivalente de cada definición, y un dato legal mal cambiado es
 * peor que uno mal citado. Las entradas afectadas llevan `revisar` y la página
 * las muestra marcadas. Es una consulta concreta para Charrutti.
 */

export type TerminoGlosario = {
  termino: string;
  definicion: string;
  /** Si está, la entrada se muestra con un marcador de pendiente al lado. */
  revisar?: string;
};

const CITA_ARGENTINA =
  "Pendiente: cita la ley 17.418, que es la ley de seguros argentina. Confirmar la norma uruguaya equivalente.";

export const glosario: TerminoGlosario[] = [
  {
    termino: "Accidente",
    definicion:
      "Es el acontecimiento inesperado, repentino e involuntario que pueda ser causa de daños a las personas o a las cosas, independientemente de su voluntad.",
  },
  {
    termino: "Aceptación de póliza",
    definicion:
      "El asegurado tiene un plazo de 30 días para aceptar la póliza recibida. Dentro de dicho plazo puede revisarla, objetarla, hacer modificar su contenido y rechazarla.",
  },
  {
    termino: "Actuario",
    definicion:
      "Es el titulado académico profesional cuya función es resolver las cuestiones de índole financiera, técnica, matemática y estadística de las empresas de seguro.",
  },
  {
    termino: "Agencia",
    definicion:
      "Oficina donde se realizan las funciones de contratación de la producción de seguros. También puede ejercer otras funciones, tales como la emisión de pólizas y la liquidación de los siniestros.",
  },
  {
    termino: "Agente",
    definicion:
      "Es la persona física o jurídica que, estando vinculada a una entidad aseguradora mediante un contrato de agencia de seguros, se dedica a la mediación o producción de seguros y a la conservación de la cartera conseguida, mediante las gestiones comerciales y administrativas precisas para la obtención de los contratos de seguro que la integran y su mantenimiento en vigor.",
  },
  {
    termino: "Agravación del riesgo",
    definicion:
      "Modificación o alteración posterior a la celebración del contrato que, aumentando la posibilidad de un evento, afecta a un determinado riesgo. El tomador del seguro o asegurado deberá, durante el curso del contrato, comunicar al asegurador todas las circunstancias que agraven el riesgo. Solo se debe denunciar la agravación que obedezca a motivos específicamente previstos en el contrato.",
  },
  {
    termino: "Anticipo",
    definicion:
      "Consiste en la obligación de la aseguradora de dar un adelanto a cuenta de una futura indemnización. Una vez reconocido el derecho del asegurado o de su derechohabiente, cuando el procedimiento para establecer la prestación no se hubiese terminado un mes después de notificado el siniestro, y a pedido del asegurado, el asegurador tiene la obligación de otorgarle un anticipo o pago a cuenta, que no podrá ser inferior al 50% de la estimación reconocida u ofrecida.",
  },
  {
    termino: "Anualidad",
    definicion:
      "Es el período de doce meses por el que se contratan normalmente las pólizas de seguro. Se denomina prorrogable cuando tácitamente se renuevan los contratos al término de la primera anualidad.",
  },
  {
    termino: "Arbitraje",
    definicion:
      "Determinación por peritos imparciales del valor de los bienes o de la extensión del daño. Es la fórmula prevista normalmente en las pólizas para resolver las diferencias entre el asegurador y el asegurado respecto a la valoración de un siniestro.",
  },
  {
    termino: "Asegurable",
    definicion:
      "Persona o bien que reúne las características predeterminadas para poder ser objeto de la cobertura del seguro.",
  },
  {
    termino: "Asegurado",
    definicion:
      "Es la persona titular del interés sobre cuyo riesgo se toma el seguro. En sentido estricto, es la persona sobre la cual recae la cobertura.",
  },
  {
    termino: "Asegurador",
    definicion:
      "Es la empresa que asume la cobertura del riesgo, previamente autorizada a operar como tal por la Superintendencia de Seguros y Reaseguros.",
    revisar:
      "Pendiente: en Uruguay el regulador es la Superintendencia de Servicios Financieros del BCU. Confirmar la redacción con Charrutti.",
  },
  {
    termino: "Avería gruesa",
    definicion:
      "Daño producido intencionadamente en un buque o en las mercancías que transporta para evitar otros mayores en el propio buque o en su carga. Su cuantía se distribuye proporcionalmente entre las partes beneficiadas de esa conducta intencionada: dueño del buque, propietario de las mercancías, asegurador, fletador.",
  },
  {
    termino: "Beneficiario",
    definicion:
      "Persona física o jurídica a favor de quien se extiende la póliza. Normalmente se utiliza en los seguros de vida y de accidentes personales.",
  },
  {
    termino: "Broker organizador",
    definicion:
      "Es aquel intermediario autorizado expresamente por la compañía de seguros. Posee una producción importante y una oficina cuya ocupación principal es organizar corredores de seguros, y tiene a cargo la gestión de relacionamiento entre el corredor y la compañía. De estar autorizados, pueden emitir pólizas, avisos de vencimiento y otras tareas atinentes a la cartera que manejan.",
  },
  {
    termino: "Caducidad",
    definicion:
      "Son pérdidas de derechos por incumplimiento de cargas y obligaciones. Puede ser por cargas y obligaciones anteriores o posteriores al siniestro.",
  },
  {
    termino: "Capital",
    definicion:
      "En lenguaje empresarial se da este nombre al conjunto de dinero y otros activos que necesita una sociedad para operar. Capital asegurado: el monto pagadero en caso de siniestro, previamente estipulado en las condiciones de póliza.",
  },
  {
    termino: "Carencia",
    definicion:
      "Período durante el cual el asegurado paga primas pero no recibe la cobertura prevista en la póliza. Se extiende desde el inicio del contrato hasta una fecha posterior determinada. Solo se aplica en los seguros de vida y de enfermedad, para evitar fraudes y antiselección.",
  },
  {
    termino: "Caso fortuito",
    definicion:
      "De acuerdo a nuestro código civil, es el que no ha podido preverse o que, previsto, no ha podido evitarse.",
  },
  {
    termino: "Certificado de cobertura",
    definicion:
      "Instrumento emitido por la compañía de seguros donde se especifica la cobertura del seguro solicitado. Normalmente se emite, cuando lo solicita el asegurado, mientras el contrato o póliza está en proceso de emisión.",
  },
  {
    termino: "Certificado individual de seguro",
    definicion:
      "Es el documento por el cual se prueba la existencia de una póliza de seguro colectivo, y en el que deben figurar los elementos que la identifican: suma asegurada, vigencia, datos personales del asegurado, beneficiarios.",
  },
  {
    termino: "Cesionario",
    definicion:
      "Persona a quien el asegurado ha transferido o cedido por escrito el derecho a recibir todo o parte de la indemnización que corresponda por los riesgos cubiertos en caso de siniestro.",
  },
  {
    termino: "Coaseguro",
    definicion:
      "Es cuando la cobertura de un riesgo se comparte entre dos o más aseguradores, estableciéndose una relación contractual entre cada coasegurador y el asegurado.",
  },
  {
    termino: "Cobertura",
    definicion:
      "Es lo establecido por escrito en el contrato de seguro o póliza, donde se fijan las condiciones generales, las particulares, el detalle del bien asegurado y el costo, y que sirven para enunciar todos los derechos y obligaciones de las partes contratantes.",
  },
  {
    termino: "Condiciones generales",
    definicion:
      "Son las que establece la ley y corresponden al ramo individual contratado.",
    revisar: CITA_ARGENTINA,
  },
  {
    termino: "Condiciones particulares",
    definicion:
      "Prevalecen sobre las generales. Especifican los datos del asegurado y del riesgo, y pueden incluir coberturas que se excluyen en las condiciones generales de la póliza.",
  },
  {
    termino: "Contratante",
    definicion:
      "Es la persona que suscribe la póliza de seguro con la empresa aseguradora.",
  },
  {
    termino: "Contrato",
    definicion:
      "Pacto o convenio entre dos o más partes por el que se obligan sobre una materia o cosa determinada, y a cuyo cumplimiento pueden ser compelidas.",
  },
  {
    termino: "Contrato de seguro",
    definicion:
      "Hay contrato de seguro cuando el asegurador se obliga, mediante el pago de una prima o cotización, a resarcir un daño o cumplir la prestación convenida si ocurre el evento previsto.",
  },
  {
    termino: "Corredor",
    definicion:
      "Es la persona física o jurídica que realiza la actividad mercantil de mediación en seguros privados, sin mantener contrato de agencia ni vínculos que supongan afección con entidades aseguradoras o pérdida de independencia respecto a estas, y ofreciendo asesoramiento profesional imparcial a quienes demandan la cobertura de los riesgos a que se encuentran expuestos sus personas, patrimonios, intereses o responsabilidades.",
  },
  {
    termino: "Culpa grave",
    definicion:
      "Es la actuación intencional probada por parte del asegurado para que se produzca el siniestro. El asegurador queda liberado si el tomador o el beneficiario provoca el siniestro dolosamente o por culpa grave. Quedan excluidos los actos realizados para precaver el siniestro o atenuar sus consecuencias, o por un deber de humanidad generalmente aceptado.",
    revisar: CITA_ARGENTINA,
  },
  {
    termino: "Daño",
    definicion:
      "Es la pérdida personal o material producida a consecuencia directa de un siniestro.",
  },
  {
    termino: "Denuncia de siniestro",
    definicion:
      "Consiste en la comunicación del hecho ocurrido. El tomador o derechohabiente debe comunicar al asegurador el suceso del siniestro dentro de los plazos estipulados por la compañía.",
  },
  {
    termino: "Depreciación",
    definicion:
      "Es la disminución de valor que sufre el objeto asegurado a consecuencia del transcurso del tiempo.",
  },
  {
    termino: "Derecho de emisión",
    definicion:
      "Monto que cobran las aseguradoras para cubrir los gastos de emisión del contrato de seguro.",
  },
  {
    termino: "Edad actuarial",
    definicion:
      "Es la edad del asegurado, en el seguro de vida, a efectos de la tarificación del riesgo.",
  },
  {
    termino: "Endoso",
    definicion:
      "Son todas las modificaciones, inclusiones, exclusiones y correcciones que se realizan en un contrato de seguro.",
  },
  {
    termino: "Entidad aseguradora",
    definicion:
      "Nombre con el que se designa, en general, a la empresa o sociedad dedicada a la práctica del seguro.",
  },
  {
    termino: "Esperanza de vida",
    definicion:
      "Es el promedio de años de vida restantes para un grupo de personas de cierta edad, según una tabla particular de mortalidad.",
  },
  {
    termino: "Exclusión de seguro",
    definicion:
      "Decisión, que generalmente corresponde a la entidad aseguradora, en virtud de la cual no quedan incluidos en las garantías de la póliza determinados riesgos o, quedando incluidos estos, las garantías del contrato no surten efecto cuando concurren respecto a ellos determinadas circunstancias o condiciones preestablecidas.",
  },
  {
    termino: "Franquicia",
    definicion:
      "Es el monto que se encuentra a cargo del asegurado en caso de producirse el siniestro. Limitación que la ley o el pacto ponen a la cuantía de las indemnizaciones debidas por el asegurador o a los supuestos de su responsabilidad. También las limitaciones que excluyen la reclamación del asegurado cuando el siniestro no alcanza un determinado porcentaje del valor asegurado.",
  },
  {
    termino: "Garantía",
    definicion:
      "Es el límite estipulado en el contrato de seguro por el que el asegurador se hace cargo de las consecuencias económicas de un siniestro.",
  },
  {
    termino: "Hurto",
    definicion:
      "Apropiación de una cosa ajena, con ánimo de lucro, sin emplear fuerza en las cosas ni intimidación o violencia en las personas.",
  },
  {
    termino: "Incapacidad",
    definicion:
      "Imposibilidad de las personas para el desarrollo de sus actividades normales. Puede ser total, parcial o temporal.",
  },
  {
    termino: "Indemnización",
    definicion:
      "Es la cantidad que contractualmente está obligado a pagar el asegurador en caso de producirse un siniestro garantizado por la póliza.",
  },
  {
    termino: "Índice de frecuencia",
    definicion:
      "Es el promedio del número de siniestros que registra una póliza durante un año de seguro, o el promedio anual de siniestros de una cartera.",
  },
  {
    termino: "Infraseguro",
    definicion:
      "Es cuando el valor que el asegurado ha atribuido al bien o bienes asegurados en una póliza resulta inferior al que realmente tienen.",
  },
  {
    termino: "Interés asegurable",
    definicion:
      "Es el interés económico, legal y sustancial de quien desee contratar una póliza a los fines de cubrir un riesgo. Es el objeto del contrato.",
  },
  {
    termino: "Interés técnico",
    definicion:
      "Porcentaje mínimo de rentabilidad que un asegurador garantiza en las bases técnicas de cada modalidad del seguro de vida.",
  },
  {
    termino: "Lesión corporal",
    definicion: "Es igual a daño en las personas.",
  },
  {
    termino: "Lucro cesante",
    definicion:
      "Consiste en la pérdida de ganancias como consecuencia de determinados hechos que interrumpen el funcionamiento normal diario de una persona o empresa.",
  },
  {
    termino: "Mediador de seguros",
    definicion:
      "Persona natural o jurídica que realiza profesionalmente la mediación de seguros. Se clasifican en agentes y corredores. No pueden asumir directa o indirectamente la cobertura de ninguna clase de riesgos ni tomar a su cargo, en todo o en parte, la siniestralidad objeto del seguro, siendo nulo todo pacto en contrario.",
  },
  {
    termino: "Medida de la prestación",
    definicion:
      "Modalidad de contratación de una póliza de seguros. Por ejemplo: a primer riesgo absoluto, a primer riesgo relativo, a prorrata.",
  },
  {
    termino: "Mercado monetario",
    definicion:
      "Aquel en el que se negocian activos financieros a corto plazo, entre un día y doce o dieciocho meses. También se pueden incluir activos con plazo superior, como bonos bancarios o emisiones del sector público, toda vez que gozan de reducido riesgo y elevada liquidez en mercados secundarios. Son mercados caracterizados por una gran liquidez y un riesgo reducido.",
  },
  {
    termino: "Nulidad",
    definicion:
      "Expresado en forma jurídica, es como si nunca hubiera existido. El ejemplo más claro es la inexistencia del riesgo.",
  },
  {
    termino: "Objeto del seguro",
    definicion:
      "Es la compensación del perjuicio económico sufrido por el patrimonio a consecuencia de un siniestro.",
  },
  {
    termino: "Ocupante",
    definicion:
      "Persona transportada en un vehículo de motor, o que se encuentre en su interior o sobre él cuando permanezca detenido por incidencias de la circulación.",
  },
  {
    termino: "Participación en utilidades",
    definicion:
      "Característica de los seguros de vida. Reconoce al asegurado una participación en los beneficios de la compañía aseguradora obtenidos en un determinado período.",
  },
  {
    termino: "Peritación",
    definicion:
      "Es la función desarrollada por quienes, con carácter profesional, hacen la tasación o valoración de las consecuencias económicas de un siniestro.",
  },
  {
    termino: "Perito",
    definicion: "Es la persona encargada de la peritación.",
  },
  {
    termino: "Plazo de gracia",
    definicion:
      "Período durante el cual están en vigor las coberturas de la póliza aunque no se hayan pagado las primas correspondientes. Por lo general es de un mes a partir de la fecha de vencimiento del pago de la prima.",
  },
  {
    termino: "Pluralidad de seguros",
    definicion:
      "Es cuando un mismo interés asegurable se asegura contra el mismo riesgo en dos o más aseguradoras.",
  },
  {
    termino: "Póliza",
    definicion:
      "Documento que instrumenta el contrato de seguro, en el que se reflejan las normas que de forma general, particular o especial regulan las relaciones contractuales convenidas entre el asegurador y el asegurado.",
  },
  {
    termino: "Premio",
    definicion:
      "Está compuesto por la prima pura más una suma determinada para gastos y utilidad del asegurador, gastos especiales de emisión y administración, coeficientes de financiación del pago, comisión del productor y los importes destinados al pago de tasas, impuestos y contribuciones que gravan el contrato y la operación de seguros.",
  },
  {
    termino: "Prescripción",
    definicion: "Consiste en la pérdida de los derechos por el transcurso del tiempo.",
  },
  {
    termino: "Prima",
    definicion:
      "Aportación económica que ha de satisfacer el contratante o asegurado a la entidad aseguradora en concepto de contraprestación por la cobertura de riesgo que esta le ofrece. Desde el punto de vista jurídico es el elemento real más importante del contrato de seguro, porque su naturaleza, constitución y finalidad lo hacen esencial y típico de dicho contrato.",
  },
  {
    termino: "Prima nivelada",
    definicion: "Aquella que permanece invariable durante la vigencia del riesgo.",
  },
  {
    termino: "Prima pura",
    definicion:
      "Es el costo del seguro que establece una compañía, calculado sobre la base de cálculos actuariales y estadísticos teniendo en cuenta la frecuencia y la intensidad, y excluyendo los gastos internos o externos que tenga dicha aseguradora.",
  },
  {
    termino: "Propuesta de seguro",
    definicion:
      "Instrumento mediante el cual se especifican todos los datos del asegurado, las características del bien asegurable, las especificaciones de la cobertura que se solicita y la suma asegurada, para que sea analizada por la compañía con el fin de aceptar o rechazar la cobertura de dicho riesgo. La propuesta forma parte del contrato.",
  },
  {
    termino: "Ramo",
    definicion:
      "Modalidad o modalidades relativas a riesgos homogéneos asumidos por el asegurador, tales como el ramo de vida, de automóviles o de incendio.",
  },
  {
    termino: "Ramos",
    definicion: "Son las áreas que una entidad aseguradora está autorizada a operar.",
  },
  {
    termino: "Reasegurado",
    definicion:
      "Se llama así a la empresa aseguradora que ha cedido un riesgo o un conjunto de ellos a otra empresa de seguros o reaseguros, mediante un contrato de participación en dichos riesgos.",
  },
  {
    termino: "Reasegurador",
    definicion: "Es la empresa que da o acepta una cobertura de reaseguro.",
  },
  {
    termino: "Reaseguro",
    definicion:
      "Es la operación realizada por el asegurador por la que transfiere parte de los riesgos asumidos al reasegurador, pero sigue siendo el único obligado respecto al asegurado o tomador del seguro.",
  },
  {
    termino: "Recargo financiero",
    definicion:
      "Porcentaje que aplican las aseguradoras sobre las primas para financiar el pago de la póliza de seguros.",
  },
  {
    termino: "Rescisión",
    definicion:
      "Finalización del contrato de seguro anterior a la fecha establecida en la póliza.",
  },
  {
    termino: "Reservas",
    definicion:
      "Es la provisión constituida por las compañías aseguradoras para atender las obligaciones contraídas con sus asegurados.",
  },
  {
    termino: "Retención",
    definicion:
      "Es la parte de la producción que la compañía aseguradora retiene para sí, cediendo el excedente a la reaseguradora.",
  },
  {
    termino: "Reticencia",
    definicion:
      "Toda declaración falsa o toda reticencia de circunstancias conocidas por el asegurado, aun hechas de buena fe, que a juicio de peritos hubiese impedido el contrato o modificado sus condiciones si el asegurador hubiese sido cerciorado del verdadero estado del riesgo, hace nulo el contrato.",
  },
  {
    termino: "Reticencia dolosa",
    definicion:
      "Es cuando el asegurado oculta una información intencionalmente o de mala fe, o emite una falsa declaración hacia la compañía de seguros. Da derecho a la compañía a rechazar el siniestro.",
  },
  {
    termino: "Riesgo",
    definicion:
      "Contingencia o posibilidad de que suceda un daño, desgracia o contratiempo. Siniestro eventual garantizado por las compañías de seguros mediante el pago de una prima. Riesgo no asegurable: aquellos que las compañías no cubren por ser contrarios a la ley.",
  },
  {
    termino: "Robo",
    definicion:
      "Es la apropiación de una cosa ajena, con ánimo de lucro, mediante fuerza en las cosas o violencia o intimidación en las personas.",
  },
  {
    termino: "Salvamento",
    definicion:
      "Se denomina así tanto al hecho de procurar evitar los daños durante el siniestro como al de los objetos que, después de ocurrido, hayan resultado indemnes.",
  },
  {
    termino: "Seguro",
    definicion:
      "Jurídicamente es un instituto por el cual el asegurador se obliga, mediante el cobro de una prima, a abonar dentro de los límites pactados un capital u otras prestaciones convenidas, en caso de que se produzca el evento cuyo riesgo es objeto de cobertura. El seguro brinda protección frente a un daño inevitable e imprevisto, tratando de reparar materialmente, en parte o en su totalidad, sus consecuencias. El seguro no evita el riesgo: resarce al asegurado, en la medida de lo convenido, de los efectos dañosos que el siniestro provoca.",
  },
  {
    termino: "Seguro a primer riesgo absoluto",
    definicion:
      "Si se contrata un seguro con esta modalidad, la indemnización del siniestro será hasta el valor del daño sufrido, con la suma asegurada como tope máximo.",
  },
  {
    termino: "Seguro a primer riesgo relativo",
    definicion:
      "En esta modalidad figura no solo la suma asegurada sino también la suma que el asegurado declara como valor asegurable. En caso de siniestro se determina el daño real y además el valor a riesgo, realizando un inventario. Si este coincide con la suma asegurada, se liquida a primer riesgo absoluto; en caso contrario, se liquida a prorrata.",
  },
  {
    termino: "Seguro a prorrata",
    definicion:
      "Si se contrata un seguro con esta modalidad, la indemnización del siniestro parcial será consecuencia de la relación entre el valor asegurado y el valor real del bien al momento del siniestro.",
  },
  {
    termino: "Seguro colectivo o grupal",
    definicion:
      "Es aquel contrato que reúne a un grupo de personas unidas por un vínculo o interés común previo a la adhesión al seguro, pero diferente a la motivación de contratarlo, que cumple las condiciones de asegurabilidad y cuya cobertura se realiza mediante contrato único suscrito por el asegurador y el contratante.",
  },
  {
    termino: "Seguro de personas",
    definicion:
      "Son aquellos en los que por lo general el asegurado es una persona física. Por ejemplo, el seguro de vida.",
  },
  {
    termino: "Seguro obligatorio",
    definicion:
      "Son aquellos impuestos por el Estado, tales como los de accidentes de trabajo y enfermedades profesionales.",
  },
  {
    termino: "Seguros patrimoniales",
    definicion:
      "Son aquellos que cubren bienes o situaciones sobre el patrimonio de los asegurados. Por ejemplo, el seguro automotor.",
  },
  {
    termino: "Sellados e impuestos",
    definicion:
      "Costos impositivos que genera la emisión de un contrato de seguro.",
    revisar:
      "Pendiente: el original enumera impuestos que no son uruguayos (ingresos brutos, tasa de superintendencia). Confirmar con Charrutti cuáles corresponden acá.",
  },
  {
    termino: "Siniestro",
    definicion:
      "Es la concreción del riesgo tal como ha sido previsto en el contrato, cuyo acaecimiento genera en el asegurador la obligación de indemnizar.",
  },
  {
    termino: "Sobreseguro",
    definicion:
      "Es cuando el interés asegurable está asegurado por un valor superior al real. En tal caso la compañía aseguradora solo está obligada a indemnizar hasta la suma del daño sufrido, y no hasta el valor que estaba asegurado.",
  },
  {
    termino: "Solicitud de seguro",
    definicion:
      "Es el documento donde se determina la naturaleza del riesgo a asegurar, sus características y el importe que se desea asegurar. A través de este, el asegurador acepta o rechaza el riesgo tras el estudio de la propuesta.",
  },
  {
    termino: "Subrogación",
    definicion:
      "Los derechos que correspondan al asegurado contra un tercero en razón del siniestro se transfieren al asegurador hasta el monto de la indemnización abonada. El asegurado es responsable de todo acto que perjudique este derecho del asegurador. La subrogación es inaplicable en los seguros de personas.",
  },
  {
    termino: "Suma asegurada",
    definicion:
      "Monto máximo por el cual una aseguradora fija su responsabilidad frente al asegurado, y que debe estar expresado en el contrato de seguro. Puede estar expresada en distintos tipos de moneda.",
  },
  {
    termino: "Tarifa",
    definicion:
      "Exposición resumida de una materia, agrupada por peligrosidad de riesgos, que permite establecer la tasa de prima a aplicar a cada ramo, determinando además los recargos o rebajas aplicables a cada caso particular. Habitualmente se expresa por mil. A mayor peligrosidad del riesgo, mayor tasa de prima.",
  },
  {
    termino: "Tasa de prima",
    definicion:
      "Es el tanto por ciento o por mil que se aplica a cada uno de los valores asegurados para obtener la prima de riesgo.",
  },
  {
    termino: "Tasa interna de retorno",
    definicion:
      "Manera de evaluar el rendimiento de un bono en función del precio al cual se lo compra, suponiendo que se lo conserve hasta su vencimiento. Iguala el valor actual de los egresos provocados por una inversión con el valor actual de los ingresos que produce. Ofrece una medición en términos relativos de la rentabilidad de una inversión.",
  },
  {
    termino: "Tomador",
    definicion:
      "Es la persona que contrata el seguro con el asegurador y se obliga al pago de la prima. Frecuentemente es también el asegurado.",
  },
  {
    termino: "Valor tasado",
    definicion:
      "Es la tasación que realizan personas idóneas sobre un bien; por ejemplo, en un seguro de joyas. Esa tasación determina la suma asegurada y, cuando se produce el siniestro, la suma a indemnizar.",
  },
  {
    termino: "Valor venal",
    definicion:
      "Es el valor de venta del objeto o bien asegurado inmediatamente antes de la producción del siniestro.",
  },
  {
    termino: "Vencimiento de póliza",
    definicion: "Es la fecha pactada en el contrato para su finalización.",
  },
  {
    termino: "Vicio oculto",
    definicion: "Consiste en el defecto o daño preexistente.",
  },
  {
    termino: "Vicio propio",
    definicion:
      "Se da cuando se origina una pérdida, destrucción o daño ocasionado por la propia naturaleza del bien asegurado. No es indemnizable el daño producido por vicio propio del bien asegurado.",
  },
  {
    termino: "Vigencia",
    definicion:
      "Período por el cual se contrata el seguro. Es obligatorio que figure en la póliza o contrato de seguro.",
  },
];

/**
 * Texto sin tildes y en minúscula, para agrupar por letra y para que el
 * buscador encuentre "indice" escribiendo sin tilde, que es como se escribe
 * en un teclado apurado.
 */
export const normalizar = (t: string) =>
  t
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

/** Inicial de un término, sin tildes, para el índice A-Z. */
export const inicial = (t: string) => normalizar(t)[0].toUpperCase();

/** Las letras que efectivamente tienen términos. */
export const letrasGlosario = [
  ...new Set(glosario.map((t) => inicial(t.termino))),
].sort();
