import MealPlanCard from "../../components/MealPlan/MealPlanCard.tsx";
import NavBar from "../../components/NavBar/NavBar.tsx";
import PantryCard from "../../components/Pantry/PantryCard.tsx";
import TargetsCard from "../../components/Targets/TargetsCard.tsx";

export default function HomePage() {
	return (
		<>
			<NavBar />
			<TargetsCard />
			<PantryCard />
			<MealPlanCard />
		</>
	);
}
