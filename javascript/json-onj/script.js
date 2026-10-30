const ob={
    name:"hemant",
    gender:"male",
    college:"sirt"
}
console.log(ob);
console.log(Object.keys(ob));
console.log(Object.values(ob));
console.log(Object.entries(ob));
const ar=[10,20,30]
console.log(...ar) 
const {name,gender,year}=ob
function sum(...n)
{
    return n.reduce((result=0,num)=>(result=result+num));
}
const answer=sum(2,3,4,5,6,7,8,9);
console.log(answer)
const college=[
    {name:"rahul",
        age:20,gender:"male",
        stream:"cse",
        subjects:[{subjectname:"abcd",timeline:2,role:"xyz"},
            {subjectnmae2:"science"
            }
                  
        ]
    },
     {name:"manisha",
        age:21,gender:"male",
        stream:"Cse",
        subjects:[{subjectname:"English,Hindi,maths"}
        ]
    },
     {name:"rohit",
        age:19,gender:"male",
        stream:"CSE",
        subjects:[{subjectname:"English,science"}]
    },
     {name:"shashank",
        age:22,gender:"male",
        stream:"cse",
        subjects:[{subjectname:"abcd",timeline:2,role:"xyz"}]
    }
]
console.log(college[0].subjects)
console.log(college[1].subjectname)
delete college[1].gender;
console.log(college)
college[1].age=25;
console.log(college)
var stdname="hemant"
console.log(`hell ${stdname} world`)