export const getLanguagesList = (lang) => {
  return lang === 'french'
    ? [
        { name: 'Français', level: 'Natif' },
        { name: 'Arabe', level: 'Natif' },
        { name: 'Anglais', level: 'Courant' },
        { name: 'Espagnol', level: 'Intermédiaire' },
      ]
    : [
        { name: 'French', level: 'Native' },
        { name: 'Arabic', level: 'Native' },
        { name: 'English', level: 'Fluent' },
        { name: 'Spanish', level: 'Intermediate' },
      ];
};
