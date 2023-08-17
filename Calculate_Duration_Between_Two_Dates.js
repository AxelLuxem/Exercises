const arr = [{
    name: "jake",
    startDay: "2023-06-01",
    endDay: "2023-06-03",
    durationInDays: null,
  },
  {
    name: "jennifer",
    startDay: "2023-06-01",
    endDay: "2023-09-01",
    durationInDays: null,
  },
  {
    name: "luke",
    startDay: "2023-06-01",
    endDay: "2023-06-26",
    durationInDays: null,
  },
  {
    name: "samantha",
    startDay: "2023-06-01",
    endDay: "2023-07-01",
    durationInDays: null,
  },
];

const getDurationInDays = () => arr.map(item => {
    const startDate = new Date(item.startDay);
  	const endDate = new Date(item.endDay);
  	return { 
    	...item, 
      durationInDays: (endDate - startDate) / (1000 * 60 * 60 * 24) 
    }
});

console.log('getDurationInDays', getDurationInDays());
