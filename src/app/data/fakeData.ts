type FakeRow = {
  id: string;
  photo: string;
  title: string;
  description: string;
};

export const fakeData: FakeRow[] = [
  {
    id: '1',
    photo:
      'https://assets-blog.hostgator.com.br/wp-content/uploads/2021/03/logo-angular-768x387.webp',
    title: 'Saiu a nova versão do Angular',
    description: 'Angular 5.0 sairá em 2035, afirma CTO da Google',
  },
  {
    id: '2',
    photo:
      'https://imagens.ebc.com.br/6cBKvd2Gn_bpUzjMP8ZFsNjqBWI=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/dolar_moeda_0803221211.jpg?itok=39fSIBWo',
    title: 'Dolar tem queda histórica',
    description:
      'O dólar apresentou uma queda gigantesca após ações tomadas pelo novo presidente da Austrália John Doe',
  },
  {
    id: '3',
    photo:
      'https://ravel.com.br/blog/wp-content/uploads/2022/08/Hackers-do-dia-a-dia-Capa.jpg',
    title: 'Hacker de 18 anos pega pisão perpétua',
    description:
      'O hacker ficará em prisão hospitalar por tempo indeterminado após causar prejuízos milionários para diversas empresas como...',
  },
  {
    id: '4',
    photo:
      'https://m.media-amazon.com/images/I/61aUBxqc5PL._AC_UF1000,1000_QL80_.jpg',
    title: 'Novo MacBook explode ao ficar ligado por mais de 5 horas',
    description:
      'Isso é possível graças a tecnologia de chips M2 utilizados pela Apple Inc...',
  },
];
