export function getParticipantImage(name: string): string {
  const words = name.toLowerCase().split(" ")

  if (words.includes("e")) {
    return "/images/placeholder.jpg"
  }

  if (words.includes('aline') || words.includes('wirley')) {
    return "/images/aline.webp"
  } else if (words.includes('amanda')) {
    return "/images/amanda.webp"
  } else if (words.includes('antonio') || words.includes('antônio') || words.includes('sapato')) {
    return "/images/cara-de-sapato.webp"
  } else if (words.includes('bruna') || words.includes('griphao')) {
    return "/images/bruna-griphao.webp"
  } else if (words.includes('bruno')) {
    return "/images/bruno.webp"
  } else if (words.includes('cezar')) {
    return "/images/cezar.webp"
  } else if (words.includes('cristian')) {
    return "/images/cristian.webp"
  } else if (words.includes('domitila') || words.includes('barros')) {
    return "/images/domitila-barros.webp"
  } else if (words.includes('fred') && !(words.includes('nicácio') || words.includes('nicacio'))) {
    return "/images/fred.webp"
  } else if (words.includes('nicácio') || words.includes('nicacio')) {
    return "/images/fred-nicacio.webp"
  } else if (words.includes('gabriel') && !words.includes('santana')) {
    return "/images/gabriel.webp"
  } else if (words.includes('gabriel') || words.includes('santana')) {
    return "/images/gabriel-santana.webp"
  } else if (words.includes('gustavo')) {
    return "/images/gustavo.webp"
  } else if (words.includes('key') || words.includes('alves')) {
    return "/images/key-alves.webp"
  } else if (words.includes('larrisa')) {
    return "/images/larrisa.webp"
  } else if (words.includes('marilia') || words.includes('marília')) {
    return "/images/marilia.webp"
  } else if (words.includes('marvvila')) {
    return "/images/marvvila.webp"
  } else if (words.includes('mc') || words.includes('guime') || words.includes('guimê')) {
    return "/images/mc-guime.webp"
  } else if (words.includes('paula')) {
    return "/images/paula.webp"
  } else if (words.includes('ricardo')) {
    return "/images/ricardo.webp"
  } else if (words.includes('sarah')) {
    return "/images/sarah.webp"
  } else if (words.includes('tina')) {
    return "/images/tina.webp"
  } else {
    return "/images/placeholder.jpg"
  }
}