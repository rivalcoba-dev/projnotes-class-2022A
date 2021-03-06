// URL: Get /
const index = (req, res) => {
  // Calculando emojie
  const emojieDataset = [
    'π»',
    'π¨βπ»',
    'π',
    'π',
    'π¦Ί',
    'π’',
    'π',
    'π',
    'π',
    'β₯',
  ];
  const emojie =
    emojieDataset[Math.floor(Math.random() * emojieDataset.length)];
  // View-Models
  const viewModel = {
    title: 'Index Controller Working!!!',
    author: 'Ivan Rivalcoba',
    emojie,
  };
  res.render('home/indexView', viewModel);
};

// URL: Get /about
const about = (req, res) => {
  res.render('home/aboutView', {
    name: 'PhD Ivan Rivalcoba',
    email: 'jorge.rr@gamadero.tecnm.mx',
    url: 'https://github.com/rivalcoba-dev',
    description:
      'AplicaciΓ³n que te permite registrar ideas de proyectos. PwpcII-2022A',
    version: '0.0.alpha',
  });
};

export default {
  // Action Methods
  index,
  about,
};
