//Create a function called uncompletedNotes that returns only not completed todos.



const notes = [
  {
    id: 1,
    description: "Workout program",
    todos: [
      {
        id: 1,
        name: "Push ups - 10 x 3",
        done: false,
      },
      {
        id: 2,
        name: "Abdominals - 20 x 3",
        done: true,
      },
      {
        id: 3,
        name: "Tapis Roulant - 15min",
        done: true,
      },
    ],
  },
  {
    id: 2,
    description: "Front-end Roadmap",
    todos: [
      {
        id: 1,
        name: "Learn HTML",
        done: true,
      },
      {
        id: 2,
        name: "Learn CSS",
        done: true,
      },
      {
        id: 3,
        name: "Learn JavaScript",
        done: true,
      },
      {
        id: 4,
        description: "Learn Angular",
        done: false,
      },
    ],
  },
];

function uncompletedNotes(notes){
    let notCompleted=[];
    notes.forEach(element => {
        const imcompleto=element.todos.filter((todo)=>!todo.done);

        if (imcompleto.length>0){
            notCompleted.push({
                id:element.id,
                description:element.description,
                todos:imcompleto,
            });

        }

        
    });
    return notCompleted;

}

console.log(uncompletedNotes(notes));