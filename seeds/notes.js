
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {id: 1, note: 'clean the family room', fam: 'dad', date: '2017/06/24', priority: 6},
        {id: 2, note: 'clean my room', fam: 'mom', date: '2017/07/04', priority: 8},
        {id: 3, note: 'clean up the dog shit', fam: 'travis', date: '2017/07/04', priority: 3},
        {id: 4, note: 'pay rent', fam: 'cody', date: '2017/07/24', priority: 1},
        {id: 5, note: 'make meatloaf', fam: 'mom', date: '2017/07/14', priority: 10}
      ]);
    });
};
