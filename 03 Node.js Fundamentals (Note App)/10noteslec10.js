console.log('Starting noteslec10.js');

//  console.log(module);

//  module.exports.age = 33;

module.exports.addNote = /* function */ () => {
    console.log('addNote');
    return 'New note';
};

module.exports.add = (a, b) => {
    return a + b;
}