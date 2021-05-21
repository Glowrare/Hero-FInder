export default {
  async findHero(context, payload) {
    const searchName = payload;
    const api = context.getters.apiKey;

    const Url = `https://superheroapi.com/api.php/${api}/search/${searchName}`;

    //show loading spinner
    context.commit('searchComplete', false);

    const res = await fetch(Url);
    const jsonData = await res.json();

    //display result box
    context.commit('searchComplete', true);
    //set search name
    context.commit('heroName', searchName);

    if (jsonData.response === 'success') {
      const data = await jsonData.results;

      const heroes = [];

      //Loop through API object response and push to results array
      for (const key in data) {
        const hero = {
          id: data[key].id,
          name: data[key].name,
          fullName: data[key].biography['full-name'],
          alterEgos: data[key].biography['alter-egos'],
          aliases: data[key].biography['aliases'],
          placeOfBirth: data[key].biography['place-of-birth'],
          firstAppearance: data[key].biography['first-appearance'],
          publisher: data[key].biography['publisher'],
          alignment: data[key].biography['alignment'],
          gender: data[key].appearance['gender'],
          race: data[key].appearance['race'],
          height: data[key].appearance['height'][0],
          weight: data[key].appearance['weight'][1],
          eyeColor: data[key].appearance['eye-color'],
          hairColor: data[key].appearance['hair-color'],
          intelligence: data[key].powerstats['intelligence'],
          strength: data[key].powerstats['strength'],
          speed: data[key].powerstats['speed'],
          durability: data[key].powerstats['durability'],
          power: data[key].powerstats['power'],
          combat: data[key].powerstats['combat'],
          occupation: data[key].work['occupation'],
          opsBase: data[key].work['base'],
          grpAffiliation: data[key].connections['group-affiliation'],
          relatives: data[key].connections['relatives'],
          image: data[key].image['url'],
        };
        heroes.push(hero);
      }
      console.log(heroes);
      context.commit('findHero', heroes);
      context.commit('notFound', false);
      context.commit('otherError', false);
    } else if (jsonData.response === 'error') {
      context.commit('notFound', true);
      if (jsonData.error === 'character with given name not found') {
        context.commit('otherError', false);
      } else {
        context.commit('otherError', true);
      }
    }
  },
};
