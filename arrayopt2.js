// ## Array Cardio Day 2
const people = [
    { name: 'Duke', year: 1988 },
    { name: 'Amit', year: 1986 },
    { name: 'Faiza', year: 1970 },
    { name: 'Anshu', year: 2015 }
  ];
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
    // const isAdult = people.some(function(person) {
    //     let currentYear = (new Date()).getFullYear();
    //     if(currentYear - person.year >= 19){
    //         return true;
    //     }
    // });

    const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
    console.log({isAdult});

// Array.prototype.every() // is everyone 19 or older?
    const allAdult = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
    console.log({allAdult});

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
    // const comment = comments.find(function(comment) {
    //     if(comment.id === 823423){
    //         return true;
    //     }
    // });
    const comment = comments.find(comment => comment.id === 823423);
    console.log(comment);

// find the person less than 19 years
    //  const teenager = people.find(function(person) {
    //      let currentYear = (new Date()).getFullYear();
    //      if(currentYear - person.year <= 19){
    //          return true;
    //      }
    //  });
    const teenager = people.find(person => ((new Date()).getFullYear()) - person.year <= 19);
    console.log(teenager);
    
// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
    const indexElement = comments.findIndex(comment => comment.id === 823423);

//to remove the indexElement from an array
    // comments.splice(indexElement,1);
    // console.table(comments);

    const newComments = [
        ...comments.slice(0,indexElement),
        ...comments.slice(indexElement + 1)
    ];

    console.table(comments);
    console.table(newComments);