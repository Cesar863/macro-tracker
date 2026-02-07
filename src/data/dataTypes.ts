export interface Macros {
	protein: string;
	carbs: string;
	fats: string;
	calories: number;
}

export interface FoodItem {
	name: string;
	baseMacros: number;
}

export interface Target {
	userGoal: string;
}

export interface MealPlan {
	meals: string;
	totalCalories: number;
}
