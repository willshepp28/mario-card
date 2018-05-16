
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('characters').del()
    .then(function () {
      // Inserts seed entries
      return knex('characters').insert([
        { name: 'Mario', picture: 'https://vignette.wikia.nocookie.net/movie-ideas2293/images/e/e1/Mario_SSB4.png/revision/latest?cb=20170711000137', description: 'Mario is a short Italian plumber who lives in the Mushroom Kingdom. In the Mario series, he uses his well-known jump and combat abilities to stop Bowser from kidnapping Princess Peach and taking over the Mushroom Kingdom. Along with Luigi, has had other friends such as Yoshi and Toad.'},
        { name: 'Luigi', picture: 'https://vignette.wikia.nocookie.net/fantendo/images/e/e2/Luigi_SSB4.png/revision/latest/scale-to-width-down/250?cb=20160807180700', description: 'Luigi (Japanese ルイージ, Ruīji) is the younger twin brother of Mario from the Mario series. He\'s the deuteragonist of some of the series\' titles (Despite this, he is considered the deuteragonist by the overall franchise by some regardless). Making an appearance in almost every Mario game and starring in three games as the protagonist, over time, he has become a well known character. His role in games appears to be a deuteragonist to his older brother, Mario. He never seems to like going on adventures without Mari'},
        { name: 'Princess Peach', picture: 'https://www.ssbwiki.com/images/thumb/2/23/Peach_SSB4.png/250px-Peach_SSB4.png', description: 'Princess Peach Toadstool is shown to be Mario\'s close companion since childhood. Mario saves Peach quite often and she usually will bake him a cake or kiss him upon her rescue. Since Peach\'s debut appearance, the two have been largely speculated to be in a romantic relationship'},
        { name: 'Wario', picture: 'https://vignette.wikia.nocookie.net/mcleodgaming/images/8/81/Wario.png/revision/latest?cb=20140920232151', description: 'Wario is Mario\'s rival. Their relationship started out very violent with such acts as Wario stealing Mario\'s Castle in Super Mario Land 2: 6 Golden Coins, but their rivalry has settled down in later games. The two even teamed together in Super Mario 64 DS (though they did attack each other possibly for fun in the intro). Nintendo Power has stated that Wario is Mario\'s cousin, but this is unconfirmed. In the Super Mario Kun comics, the rivalry between the two characters is frequently a theme.'},
        { name: 'Bowser', picture: 'https://www.ssbwiki.com/images/thumb/d/d5/Bowser_SSB4.png/250px-Bowser_SSB4.png', description: 'Bowser is Mario\'s nemesis and main enemy. Bowser and Mario have had a long history of antagonism and rivalry for Princess Peach. However, Mario almost always defeats Bowser one way or another. Bowser always tries to find a way to take Peach from Mario and have her all for himself. Bowser is jealous of Peach\'s friendship with Mario, as he admits in Super Paper Mario.'},
       
      ]);
    });
};



