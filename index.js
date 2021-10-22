let expenses = {
	"weekly": {
		"questions": weeklyExpenseQuestions,
		"total": 0
	},

	"monthly": {
		"questions": monthlyExpenseQuestions,
		"total": 0
	},

	"annual": {
		"questions": annualExpenseQuestions,
		"total": 0
	},
}

for (let expense in expenses) {
	let currentExpense = expenses[expense]
	for (let question of currentExpense.questions) {
		let stringAnswer = window.prompt(question)
		let numberAnswer = parseFloat(stringAnswer)
		expenses[expense].total += numberAnswer
	}
}
