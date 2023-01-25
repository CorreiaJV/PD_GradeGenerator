function endTimeProperty() {
    return function(a, b) {
        return a.endTime - b.endTime || a.days[0] - b.days[0];
    }
}

function isEqual(obj1, obj2){
	for(let key of Object.keys(obj1)){
		if(!obj2[key]){
			return false;
		}
	}
	return true;
}

export default function intervalScheduling (data) {
    data.sort(endTimeProperty());
	var answer = {};
	var conflict = {};
	var rejected = {};
	var filled = {};
	var temp = {};
	var possibilities = [];
	var valid = true;

	for (const subject of data) {
		if(!answer[subject.name]) {
			valid = true;
			for(const [day, hours] of Object.entries(subject.combinations)) {
				if(!filled[day] 
					|| (filled[day][0][0] >= subject.endTime && filled[day][0][1] >= subject.startTime)
					|| (filled[day][0][0] <= subject.endTime && filled[day][0][1] <= subject.startTime)) {
						temp[day] = hours;
					}
					else {
						if(!conflict[filled[day][1].name]){
							conflict[filled[day][1].name] = [];
						}
						rejected[subject.name] = subject;
						conflict[filled[day][1].name].push(subject.name);
						valid = false;
						break;
					}
				}
				if(valid) {
					for(const [day, hours] of Object.entries(temp)) {
						filled[day] = [hours, subject];
					}
					answer[subject.name] = subject;
				}
		}
	}

	console.log('ANSWER:');
	console.log(answer);
	possibilities.push(answer);

	console.log('REJECTED:')
	console.log(rejected);

	console.log('CONFLICTED:')
	console.log(conflict);

	for(const [accepted, rejecteds] of Object.entries(conflict)){
		for(const option of rejecteds){
			var tempPossibilities = [];
			for(const possibility of possibilities)
			{
				var newPossibility = {...possibility};
				delete newPossibility[accepted];
				for(const r of rejecteds){
					delete newPossibility[r];
				}
				var newOption = {...newPossibility};
				newOption[option] = rejected[option];
				var repeated = false;
				for(const poss of tempPossibilities){
					if(isEqual(poss, newOption)){
						repeated = true;
						break;
					}
				}
				if(!repeated){
					tempPossibilities.push(newOption);
				}
			}
			possibilities.push(...tempPossibilities);
		}
	}

	console.log('POSSIBILITIES:');
	console.log(possibilities);

}