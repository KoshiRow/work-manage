class SuperDate extends Date {
	constructor(...args) {
		super(...args);
	}

	getDateAfterDate(n) {
		const clone = new SuperDate(this);
		clone.setDate(clone.getDate() + n);
		return clone;
	}

	getDateAfterMonth(n) {
		const clone = new SuperDate(this);
		if(clone.getMonth() + n < 0) {
			clone.setFullYear(clone.getFullYear() - 1);
			clone.setMonth(clone.getMonth() + n + 12);
		} else if(clone.getMonth() + n > 11) {
			clone.setFullYear(clone.getFullYear() + 1);
			clone.setMonth(clone.getMonth() + n - 12);
		} else {
			clone.setMonth(clone.getMonth() + n);
		}
		return clone;
	}
	
	toLocaleDateStr() {
		return this.toLocaleDateString(
				"ja-JP", 
			{ year: 'numeric', month: '2-digit', day: '2-digit'}
		);
	}

	getPastOneMonthDates() {
		const dates = [];
		const monthNum = SuperDate.getMonthModulo(this.getMonth() - 1);
		const datesCount = SuperDate.getDateCountOf(monthNum);
		const dateOneMonthAgo = this.getDateAfterDate(-1 * datesCount);
		console.log(datesCount);
		for(let i = 0; i < datesCount; i++) {
			const clone = new SuperDate(dateOneMonthAgo);
			clone.setDate(clone.getDate() + i);
			dates.push(clone.toLocaleDateStr());
		}
		return dates;	
	}
	
	static getDateCountOf(monthNum) {
		if(monthNum == 0 || monthNum == 2 || monthNum == 4 || monthNum == 6 || monthNum == 7 || monthNum == 9 || monthNum == 11) {
			return 31;
		}
		if(monthNum == 3 || monthNum == 5 || monthNum == 8 || monthNum == 10) {
			return 30;
		}
		if(this.getFullYear % 4 != 0 && monthNum == 1) {
			return 28;
		} 
		if(this.getFullYear % 4 == 0 && monthNum == 1) {
			return 29;
		} else {
			throw new Error("Invalid month number");
		}
	}
	
	static getDateBeforeMonth(n) {
		const clone = new SuperDate();
		clone.setMonth(clone.getMonth() - n);
		return clone;
	}

	static getOneMonthDurationStrUntil(superDate) {
		console.log(SuperDate.getMonthModulo(superDate.getMonth() - 1));
		const datesCount = SuperDate.getDateCountOf(SuperDate.getMonthModulo(superDate.getMonth() - 1));
		const fromSuperDate = superDate.getDateAfterDate(datesCount * -1).getDateAfterDate(1);
		return "  " + fromSuperDate.toLocaleDateStr() + " ~ " + superDate.toLocaleDateStr();
	}

	static getMonthModulo(n) {
		return (n % 12 + 12) % 12;
	}

}